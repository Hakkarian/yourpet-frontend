import * as Yup from 'yup';

const SUPPORT_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const userValidationSchema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Enter a valid email').required('Required'),
  birthday: Yup.string('Please enter a date in a format "dd.mm.yyyy"')
 .trim().required('Please enter a date in a format "dd.mm.yyyy"'),
  phone: Yup.string().matches(/^\+380\d{9}$/, 'Phone number must be in format +380000000000').required('Required'),
  city: Yup.string().matches(/^[A-Za-z\s]+$/, 'City name must contain only letters'),
});

export const userPhotoValidationSchema = Yup.object().shape({
  avatar: Yup
    .mixed()
    .nullable()
    .test(
      'FILE_SIZE',
      'Uploaded file is too big',
      value => !value || value.size <= 1024 * 1024
    )
    .test(
      'FILE_FORMAT',
      'Uploaded file has unsupported format',
      value => !value || (value && SUPPORT_FORMATS.includes(value?.type))
    ),
});