import * as yup from 'yup'

let createUserSchema = yup.object().shape({
    firstName: yup.string(),
    lastName: yup.string(),
    email: yup.string().email(),
    password: yup.string().required('Please enter a password.').min(6, 'Your password must be more than 6 characters').max(20, 'Woah, that is too long to remember'),
    username: yup.string().min(4, 'This must be at least a four letter word').max(15, 'Just a username, not your mantra').required()
})

export default createUserSchema