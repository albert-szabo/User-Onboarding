import React, { useState } from 'react';

import './App.css';

import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = () => {

  }

  return (
    <div className="App">
      <Form values={formValues} change={handleChange} submit={handleSubmit} />
    </div>
  );
}

export default App;
