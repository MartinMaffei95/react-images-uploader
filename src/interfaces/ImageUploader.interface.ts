import { DragEvent } from 'react';
import { ColorSchemes, Style, StyleWithTextAndIcon } from '.';

interface DragDropActions {
  onDragOver?: (event: DragEvent<HTMLDivElement>) => any;
  onDragLeave?: (event: DragEvent<HTMLDivElement>) => any;
  onDrop?: (event: DragEvent<HTMLDivElement>) => any;
}

interface DropArea extends StyleWithTextAndIcon {}

interface Dragging extends StyleWithTextAndIcon {}

interface Counter extends StyleWithTextAndIcon {
  withCounter?: boolean;
}
interface ImagesContainer extends Style {
  counter?: Counter;
}

interface ImageElement {
  shadowLayer?: Style;
  image?: Style;
}

export interface InputConfiguration {
  setFieldValue?: (inputName: string, value: any) => void;
  fieldName?: string;
  multiple?: boolean;
  min?: number;
  max?: number;
  accept?: string;
}

export interface ErrorConfig {
  onError?: (error?: any) => any;
}

export interface ButtonConfig extends StyleWithTextAndIcon {}
export interface ImageUploaderConfig {
  inputConfig?: InputConfiguration;
  colorScheme?: ColorSchemes;
  dragAndDropEvents?: DragDropActions;
  dropArea?: DropArea;
  draggingConfig?: Dragging;
  containerOfImages?: ImagesContainer;
  previewImage?: ImageElement;
  error?: ErrorConfig;
  buttons?: {
    addImage?: ButtonConfig;
    deleteAll?: ButtonConfig;
    deleteOneImage?: ButtonConfig;
  };
}
