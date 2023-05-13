import React from 'react';
import useForm from './useForm';
import ReusableButton from 'shared/components/ReusableButton';

const UseFormExample = () => {
  const { values, handleChange, handleSubmit } = useForm({
    name: '',
    email: '',
    password: '',
  });

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {' '}
        Name
        <input
          type="name"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </label>
      <ReusableButton type="submit" text="Submit" color="black" />
    </form>
  );
};

export default UseFormExample;
