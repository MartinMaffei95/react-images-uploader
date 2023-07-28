import { CSSProperties, DragEvent, ReactNode } from 'react'

interface DragDropActions {
  onDragOver?: (event: DragEvent<HTMLDivElement>) => any
  onDragLeave?: (event: DragEvent<HTMLDivElement>) => any
  onDrop?: (event: DragEvent<HTMLDivElement>) => any
}

interface DragDropZone {
  dragDropText?: string
  dragDropClassName?: string
  dragDropStyle?: CSSProperties
  dragDropIcon?: ReactNode
}

interface ImagesContainer {
  imagesContainerClassName?: string
  dragDropStyle?: CSSProperties
}

interface ImageElement {
  ImageElementClassName?: string
  ImageElementStyle?: CSSProperties
}

interface ButtonConfig {
  className?: string
  style?: CSSProperties
  text?: string
}

export interface OnChangeFunction {
  setFieldValue?: (inputName: string, value: any) => void
  fieldName?: string
}
export interface ImageUploaderConfig
  extends DragDropZone,
    OnChangeFunction,
    ImagesContainer,
    ImageElement,
    DragDropActions {
  addImagesButton?: ButtonConfig
}
