import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required!')
        .min(3, 'Username must be 3 Characters long!'),
    email: yup 
        .string()
        .email()
        .required('Must be a valid email address'),
    password: yup
        .string()
        .required("a password is required!")
        .min(6, 'password must be 6 characters long!'),
    tos: yup
        .boolean()
        .oneOf([true], 'Must accept the terms and conditions')
})

export default formSchema