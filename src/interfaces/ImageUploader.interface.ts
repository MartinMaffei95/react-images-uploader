import { CSSProperties, DragEvent, ReactNode } from 'react';

interface DragDropActions {
  onDragOver?: (event: DragEvent<HTMLDivElement>) => any;
  onDragLeave?: (event: DragEvent<HTMLDivElement>) => any;
  onDrop?: (event: DragEvent<HTMLDivElement>) => any;
}

export interface Style {
  className?: string;
  style?: CSSProperties;
}

export type GenericPositions = 'bottom' | 'top' | 'left' | 'right';
interface TextAndIcon {
  text?: string;
  icon?: ReactNode;
  iconPosition?: GenericPositions;
}

export interface StyleWithTextAndIcon extends Style, TextAndIcon {}

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

export interface OnChangeFunction {
  setFieldValue?: (inputName: string, value: any) => void;
  fieldName?: string;
}

export interface ButtonConfig extends StyleWithTextAndIcon {}
export interface ImageUploaderConfig {
  inputConfig?: OnChangeFunction;
  dragAndDropEvents?: DragDropActions;
  dropArea?: DropArea;
  draggingConfig?: Dragging;
  containerOfImages?: ImagesContainer;
  previewImage?: ImageElement;
  buttons?: {
    addImage?: ButtonConfig;
    deleteAll?: ButtonConfig;
    deleteOneImage?: ButtonConfig;
  };
}
