import React from 'react';

const Form = (props) => {
    const { change, submit } = props;
    const { name, email, password, tos } = props.values;

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
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                        value={name}
                        onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email address'
                        value={email}
                        onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your chosen password'
                        value={password}
                        onChange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input
                        type='checkbox'
                        name='tos'
                        checked={tos}
                        onChange={onChange}
                    />
                </label>
                <input type='submit' value='Add user' />
            </form>
        </div>
    )
}

export default Form;