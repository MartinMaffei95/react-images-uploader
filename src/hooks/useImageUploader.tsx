import { Image, UseImageUploaderConfig } from '../interfaces'
import { ChangeEvent, DragEvent, useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { toBase64 } from '../utils'

const useImageUploader = ({ onChange, fieldName }: UseImageUploaderConfig) => {
  const [images, setImages] = useState<Image[]>([])
  const [dragging, setDragging] = useState<boolean>(false)
  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (!files) return
    transformAndSave(files)
  }
  const transformAndSave = async (files: FileList) => {
    const convertedImages: Image[] = []

    for (let i = 0; i < files?.length; i++) {
      const file = files[i]

      const base64Image = await toBase64(file)
      if (!base64Image) return
      const imageToRender: Image = {
        src: base64Image,
        name: file.name,
        id: uuid(),
      }
      convertedImages?.push(imageToRender)
    }
    setImages((state) => [...state, ...convertedImages])
  }

  const deleteOneImage = (imageId: string) => {
    const filteredImages = images?.filter((image) => image?.id !== imageId)
    setImages(filteredImages)
  }
  const deleteAllImages = () => {
    setImages([])
  }

  const toggleDragging = (state: boolean) => {
    setDragging(state)
  }

  const handleDrag = (event: DragEvent<HTMLDivElement>, state: boolean) => {
    event.preventDefault()
    toggleDragging(state)
  }

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    toggleDragging(false)
    const { files } = event.dataTransfer
    if (!files) return
    transformAndSave(files)
  }

  useEffect(() => {
    onChange && onChange(fieldName || '', images)
  }, [images])

  return {
    images,
    dragging,
    deleteAllImages,
    deleteOneImage,
    handleFiles,
    handleDrag,
    handleDrop,
  }
}

export default useImageUploader
