import { ErrorConfig, InputConfiguration } from '.';

interface OnChangeFunction
  extends Omit<InputConfiguration, 'setFieldValue'>,
    Pick<ErrorConfig, 'onError'> {
  onChange?: (inputName: string, value: any) => void;
  fieldName?: string;
}
export interface UseImageUploaderConfig extends OnChangeFunction {}
