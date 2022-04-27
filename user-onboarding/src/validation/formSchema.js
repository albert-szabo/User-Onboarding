import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please enter your name.')
        .min(2, 'The name entered must be at least two characters long.'),
    email: yup
        .string()
        .trim()
        .email('Please enter a valid email address.')
        .required('Please enter your email address.'),
    password: yup
        .string()
        .trim()
        .required('Please enter a password.')
        .min(10, 'Your chosen password must have at least 10 characters.'),
    tos: yup
        .boolean()
        .oneOf([true], 'You must accept the terms and conditions to continue.')
})

export default formSchema;