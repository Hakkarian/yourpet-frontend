import * as Yup from 'yup';
import { format } from 'date-fns';

function formatDateString(value) {
  if (!value) {
    return;
  }
  const parsedDate = new Date(value);
  const formattedDate = format(parsedDate, 'dd.MM.yyyy');
  return formattedDate;
}

const validationSchema = Yup.object({
  category: Yup.string()
    .oneOf(['my pet', 'sell', 'lost-found', 'for-free'])
    .required(),
  title: Yup.string()
    .min(2, 'The title must contain at least 2 characters')
    .trim()
    .when('category', {
      is: 'my pet',
      then: schema => schema.notRequired(),
      otherwise: schema => schema.required('Please enter a title'),
    }),
  name: Yup.string()
    .min(2, 'Enter a name that is at least 2 letters long')
    .max(16, 'Please shorten your name to 16 characters or less')
    .matches(/^[a-zA-Z ]+$/, 'A name can only contain letters')
    .trim()
    .required('Please enter a name'),
  birthday: Yup.string('Please enter a date in a format "dd.mm.yyyy"')
    .transform(formatDateString)
    .trim()
    .required('Please enter a date in a format "dd.mm.yyyy"'),
  breed: Yup.string()
    .min(2, 'Enter a breed that is at least 2 letters long')
    .max(16, 'Please enter a breed not longer than 16 characters')
    .matches(/^[a-zA-Z ]+$/, 'A breed can only contain letters')
    .trim()
    .required('Please enter a breed'),
  sex: Yup.string()
    .oneOf(['male', 'female'])
    .when('category', {
      is: 'my pet',
      then: schema => schema.notRequired(),
      otherwise: schema => schema.required(),
    }),
  location: Yup.string()
    .matches(/^[A-Z]{1}[a-z]{1,20}$/, 'Enter a correct city name')
    .trim()
    .when('category', {
      is: 'my pet',
      then: schema => schema.notRequired(),
      otherwise: schema => schema.required('Please enter your city'),
    }),
  price: Yup.number('A price must be a number')
    .moreThan(0, 'A price should be greater than 0')
    .when('category', {
      is: 'sell',
      then: schema => schema.required(),
      otherwise: schema => schema.notRequired('Please enter a price'),
    }),
  comments: Yup.string()
    .min(8, `Please include more details...`)
    .max(160, 'Please shorter a bit your comment')
    .required(`Comment is required`),
});

export default validationSchema;
