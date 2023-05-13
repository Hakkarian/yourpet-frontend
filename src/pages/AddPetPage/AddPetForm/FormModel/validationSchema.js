import * as Yup from 'yup';

const validationSchema = Yup.object({
  category: Yup.string()
    .oneOf(['yourPet', 'sell', 'lostFound', 'inGoodHands'])
    .required(),
  title: Yup.string().required('Please type a title'),
  name: Yup.string().min(2).required('Please type a name'),
  date: Yup.string().required('Please type a date'),
  breed: Yup.string().required('Please type a breed'),
  sex: Yup.string().oneOf(['male', 'female']).required(),
  location: Yup.string().required(),
  price: Yup.number().when('category', {
    is: 'sell',
    then: schema => schema.required(),
    otherwise: schema => schema.notRequired(),
  }),
  comments: Yup.string()
    .min(3, `Please include more details...`)
    .required(`Comment is required`),
});

export default validationSchema;
