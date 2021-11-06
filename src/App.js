import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Nav } from './components/Nav';
import { PageSwitch } from './components/PageSwitch';
import * as Yup from 'yup';
import { SwitchToggle } from './components/SwitchToggle';
import { AppContext } from './components/context/AppContext';

const App = (props) => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('پر کردن این فیلد الزامی می باشد'),
    email: Yup.string()
      .email('ایمیل وارد شده نا معتبر است')
      .required('پر کردن این فیلد الزامی می باشد'),
    password: Yup.string()
      .required('پر کردن این فیلد الزامی می باشد')
      .min(6, 'پسسورد نمیتواند کمتر از 6 کارکتر باشد'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), ''], 'پسووردها با هم برابر نیستند')
      .required('پر کردن این فیلد الزامی می باشد'),
  });

  const [submited, setSubmited] = useState(false);
  const onSubmit = (values) => {
    console.log(values);
    setSubmited(true);
  };

  const menuToggler = () => {
    const toggleBtn = document.querySelector('.menu-toggler');
    const menu = document.querySelector('nav');
    menu.classList.toggle('show-menu');
    toggleBtn.classList.toggle('show-menu-toggler');
  };

  return (
    <AppContext.Provider
      value={{
        initialValues,
        validationSchema,
        onSubmit,
      }}>
      <Router>
        <SwitchToggle />
        <Nav />
        <div className='App'>
          <PageSwitch>{props.children}</PageSwitch>
        </div>
        <div onClick={menuToggler} className='menu-toggler'>
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export default App;
