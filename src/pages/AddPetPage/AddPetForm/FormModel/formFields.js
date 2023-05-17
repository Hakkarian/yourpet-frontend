const fields = {
  category: {
    name: 'category',
  },
  title: {
    name: 'title',
    type: 'text',
    label: 'Title of add',
    placeholder: 'Type title of add',
  },
  name: {
    name: 'name',
    type: 'text',
    label: 'Name pet',
    placeholder: 'Type pet name',
  },
  birthday: {
    name: 'birthday',
    type: 'date',
    label: 'Date of birth',
    placeholder: 'Type date of birth',
  },
  breed: {
    name: 'breed',
    type: 'text',
    label: 'Breed',
    placeholder: 'Type breed',
  },
  sex: {
    name: 'sex',
  },
  photo: {
    name: 'photo',
    label: 'Add photo',
  },
  location: {
    name: 'location',
    type: 'text',
    label: 'Location',
    placeholder: 'Type location',
  },
  price: {
    name: 'price',
    type: 'text',
    label: 'Price',
    placeholder: 'Type price',
  },
  comments: {
    name: 'comments',
    as: 'textarea',
    label: 'Comments',
    placeholder: 'Add more details about your pet',
  },
};

export default fields;
