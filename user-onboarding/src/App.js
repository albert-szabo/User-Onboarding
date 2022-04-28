import React, { useState } from 'react';
import axios from 'axios';

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
  const [users, setUsers] = useState([]);

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
    axios.post('https://reqres.in/api/users', formValues)
      .then(response => {
        setUsers([ response.data, ...users ])
      })
      .catch(error => console.error(error))
      .finally(() => setFormValues(initialFormValues))
  }

  return (
    <div className="App">
      <Form values={formValues} errors={formErrors} change={handleChange} submit={handleSubmit} />
      {users.map(user => {
        return <div key={user.id}>
            <h6>{user.createdAt}</h6>
            <h6>{user.name}</h6>
            <h6>{user.email}</h6>
          </div>
      })}
    </div>
  );
}

export default App;
