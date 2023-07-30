import { errorOnValidation } from '../interfaces';

export const validateMin = (
  files: FileList,
  min: number
): errorOnValidation[] => {
  let errors: errorOnValidation[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size < min) {
      const error = {
        fileName: file.name,
        error: `The file size is minor of ${min}`,
        expectedSize: min,
        fileSize: file.size,
      };
      errors.push(error);
    }
  }
  console.log(errors);

  return errors;
};
export const validateMax = (
  files: FileList,
  max: number
): errorOnValidation[] => {
  let errors: errorOnValidation[] = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    if (file.size > max) {
      const error = {
        fileName: file.name,
        error: `The file size is major of ${max}`,
        expectedSize: max,
        fileSize: file.size,
      };
      errors.push(error);
    }
  }

  console.log(errors);
  return errors;
};
