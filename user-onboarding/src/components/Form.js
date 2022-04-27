import React from 'react';

const Form = (props) => {
    const { change, submit } = props;
    const { name, email, password, checked } = props.values;

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === 'checkbox' ? checked : value;
        change(name, newValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <h1>User Addition Form</h1>
            <form onSubmit={submit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name here'
                        value={name}
                        onChange={change}
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email address here'
                        value={email}
                        onChange={change}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your chosen password here'
                        value={password}
                        onChange={change}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type='checkbox'
                        name='tos'
                        checked={checked}
                        onChange={change}
                    />
                </label>
                <input type='submit' value='Add user' />
            </form>
        </div>
    )
}

export default Form;