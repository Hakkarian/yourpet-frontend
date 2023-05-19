import * as Yup from 'yup';

const SUPPORT_FORMATS = ['image/jpg', 'image/jpeg', 'image/png'];
const nameMatches = /^[a-zA-Zа-яА-ЯІіїЇґҐ\s-]+$/;
const cityMatches = /^(?:(?:[a-zA-Zа-яА-ЯіІїЇєЄ]+(?:[.'’‘`-][a-zA-Zа-яА-ЯіІїЇєЄ]+)*)\s*)+$/;
const birthdayMatches = /^([0-2]\d|3[0-1])\.(0\d|1[0-2])\.\d{4}$/;

export const userValidationSchema = Yup.object().shape({
file: Yup.mixed().nullable().required('Required photo').test('FILE_SIZE', 'Uploaded file is too large', (value) =>
    !value || (value && value.size < 1024 * 1024)
  )
  .test('fileType', 'Uploaded file has an unsupported format', (value) => !value || (value && SUPPORT_FORMATS.includes(value?.type))),
  name: Yup.string().matches(nameMatches, 'Enter your name, please!'),
  email: Yup.string().email('Enter a valid email').required('Required'),
  birthday: Yup.string(birthdayMatches, 'Please enter a date in a format "dd.mm.yyyy"').trim().required('Required'),
  phone: Yup.string().matches(/^\+380\d{9}$/, 'Phone number must be in format +380000000000').required('Required'),
  city: Yup.string().matches(cityMatches, 'City name must contain only letters'),
});