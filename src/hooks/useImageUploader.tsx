import {
  Image,
  UseImageUploaderConfig,
  errorOnValidation,
} from '../interfaces';
import { ChangeEvent, DragEvent, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { toBase64, validateMax, validateMin } from '../utils';

const useImageUploader = ({
  onChange,
  fieldName,
  max,
  min,
  multiple,
  onError,
}: UseImageUploaderConfig) => {
  const [images, setImages] = useState<Image[]>([]);
  const [dragging, setDragging] = useState<boolean>(false);
  const [errors, _setErrors] = useState([]);

  const handleErrors = (files: FileList) => {
    const validateMaxSize: errorOnValidation[] = max
      ? validateMax(files, max)
      : [];
    const validateMinSize: errorOnValidation[] = min
      ? validateMin(files, min)
      : [];

    if (validateMaxSize.length > 0 || validateMinSize.length > 0)
      throw [...validateMinSize, ...validateMaxSize];
  };

  const receiveFiles = (files: null | FileList) => {
    try {
      if (!files) throw 'NO_FILES';

      handleErrors(files);
      transformAndSave(files);
    } catch (error) {
      console.error(error);
      onError && onError(error);
    }
  };

  const handleFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    receiveFiles(files);
  };

  const transformAndSave = async (files: FileList) => {
    const convertedImages: Image[] = [];

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];

      const base64Image = await toBase64(file);
      if (!base64Image) return;
      const imageToRender: Image = {
        src: base64Image,
        name: file.name,
        id: uuid(),
      };
      convertedImages?.push(imageToRender);
    }
    multiple
      ? setImages((state) => [...state, ...convertedImages])
      : setImages(() => [convertedImages[0]]);
  };

  const deleteOneImage = (imageId: string) => {
    const filteredImages = images?.filter((image) => image?.id !== imageId);
    setImages(filteredImages);
  };
  const deleteAllImages = () => {
    setImages([]);
  };

  const toggleDragging = (state: boolean) => {
    setDragging(state);
  };

  const handleDrag = (event: DragEvent<HTMLDivElement>, state: boolean) => {
    event.preventDefault();
    toggleDragging(state);
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    toggleDragging(false);
    const { files } = event.dataTransfer;
    receiveFiles(files);
  };

  useEffect(() => {
    onChange && onChange(fieldName || '', images);
  }, [images, errors]);

  return {
    images,
    dragging,
    deleteAllImages,
    deleteOneImage,
    handleFiles,
    handleDrag,
    handleDrop,
    errors,
  };
};

export default useImageUploader;
