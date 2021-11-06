import { ErrorMessage, FastField } from 'formik';
import { TextError } from './TextError';

export const Input = ({ type, lable, name, ...rest }) => {
  return (
    <div className='input-container'>
      <label htmlFor={name}>{lable}</label>
      <FastField type={type} name={name} id={name} {...rest} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};
