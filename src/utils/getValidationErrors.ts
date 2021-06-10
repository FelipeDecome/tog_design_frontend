import { ValidationError } from 'yup';

interface IErrors {
  [key: string]: string;
}

const getValidationErrors = (err: ValidationError): IErrors => {
  const validationErrors: IErrors = {};

  err.inner.forEach(error => {
    if (error.path) validationErrors[error.path] = error.message;
  });

  return validationErrors;
};

export { getValidationErrors };
