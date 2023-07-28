interface OnChangeFunction {
  onChange?: (inputName: string, value: any) => void;
  fieldName?: string;
}
export interface UseImageUploaderConfig extends OnChangeFunction {}
