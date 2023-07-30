import { CSSProperties, ReactNode } from 'react';
export interface errorOnValidation {
  fileName: string;
  error: string;
  expectedSize: number;
  fileSize: number;
}

export type ColorSchemes =
  | 'base'
  | 'blue'
  | 'pink'
  | 'yellow'
  | 'green'
  | 'red'
  | 'purple'
  | 'black'
  | 'ball'
  | 'galaxy';

export type GenericPositions = 'bottom' | 'top' | 'left' | 'right';

export interface Style {
  className?: string;
  style?: CSSProperties;
}

export interface TextAndIcon {
  text?: string;
  icon?: ReactNode;
  iconPosition?: GenericPositions;
}

export interface StyleWithTextAndIcon extends Style, TextAndIcon {}
