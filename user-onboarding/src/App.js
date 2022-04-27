import React, { useState } from 'react';

import './App.css';

import Form from './components/Form';

import schema from './validation/formSchema';
import * as yup from 'yup';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  tos: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(error => setFormErrors({ ...formErrors, [name]: error.errors[0] }))
  }

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = () => {

  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} submit={handleSubmit} errors={formErrors} />
    </div>
  );
}

export default App;
