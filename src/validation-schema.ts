import * as Yup from 'yup'

export const TextValidation = Yup.string().required();
export const FileValidation = Yup.mixed().required();
export const EmailValidation = Yup.string().required().email();
