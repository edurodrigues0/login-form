import * as yup from 'yup';

export const loginFormSchema = yup.object().shape({
  email: yup.string().required('Required E-mail').email('Invalid E-mail'),
  password: yup.string().required('Required Password').min(6, 'Password should be over characteres'),
})

export const recoverPasswordSchema = yup.object().shape({
  email: yup.string().required('Required E-mail').email('Invalid E-mail')
})

export const registerFormSchema = yup.object().shape({
  email: yup.string().required('Required E-mail').email('Invalid E-mail'),
  password: yup.string().required('Required Password').min(6, 'Minimum 6 characters'),
  password_confirmation: yup.string().oneOf([
    null, yup.ref('password')
  ], "Passwords don't match")
})