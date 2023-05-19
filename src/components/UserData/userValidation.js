import * as Yup from 'yup';
import { format } from 'date-fns';

function formatDateString(value) {
  if (!value) {
    return;
  }
  const parsedDate = new Date(value);
  const formattedDate = format(parsedDate, 'dd.MM.yyyy');
  return formattedDate;
};

const SUPPORT_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];

export const userValidationSchema = Yup.object().shape({
file: Yup.mixed().nullable().required('Required photo').test('FILE_SIZE', 'Uploaded file is too large', (value) =>
    !value || (value && value.size < 1024 * 1024)
  )
  .test('fileType', 'Uploaded file has an unsupported format', (value) => !value || (value && SUPPORT_FORMATS.includes(value?.type))),
  name: Yup.string(),
  email: Yup.string().email('Enter a valid email').required('Required'),
  birthday: Yup.string('Please enter a date in a format "dd.mm.yyyy"')
  .transform(formatDateString).trim().required('Please enter a date in a format "dd.mm.yyyy"'),
  phone: Yup.string().matches(/^\+380\d{9}$/, 'Phone number must be in format +380000000000').required('Required'),
  city: Yup.string().matches(/^[A-Za-z\s]+$/, 'City name must contain only letters'),
});