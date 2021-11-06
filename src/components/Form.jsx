import { Form, Formik } from 'formik';
import { useContext } from 'react';
import { AppContext } from './AppContext';
import { Input } from './Input';

export const Login = () => {
  const context = useContext(AppContext);
  const { initialValues, validationSchema, onSubmit } = context;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className='form'>
        <div className='container'>
          <h1 className='header'>ورود</h1>
          <Input type='text' name='username' lable='نام کاربری' />
          <Input type='password' name='password' lable='رمز عبور' />
          <button type='submit' className='submit'>
            ورود
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export const Register = () => {
  const context = useContext(AppContext);
  const { initialValues, validationSchema, onSubmit } = context;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}>
      <Form className='form'>
        <div className='container'>
          <h1 className='header'>ثبت نام</h1>
          <Input type='text' name='username' lable='نام کاربری' />
          <Input type='email' name='email' lable='ایمیل' />
          <Input type='password' name='password' lable='رمز عبور' />
          <Input
            type='password'
            name='confirmPassword'
            lable='تکرار رمز عبور'
          />
          <button className='submit'>ثبت نام</button>
        </div>
      </Form>
    </Formik>
  );
};
