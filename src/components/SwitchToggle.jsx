import { Fragment, useState } from 'react';
import Switch from 'react-switch';

export const SwitchToggle = () => {
  const [checked, setChecked] = useState(false);

  const checkHandler = () => {
    checked ? setChecked(false) : setChecked(true);
  };
  console.log(checked);

  if (checked) {
    document.querySelector('#root').classList.add('dark-mode');
  } else {
    document.querySelector('#root').classList.remove('dark-mode');
  }

  return (
    <Fragment>
      <Switch
        className='toggle-btn'
        checked={checked}
        onChange={checkHandler}
        checkedIcon={false}
        onColor='#929292'
        offHandleColor='#575757'
        onHandleColor='#cecece'
        uncheckedIcon={false}
        uncheckedIcon={<i class='fa fa-sun-o sun' aria-hidden='true'></i>}
        checkedIcon={<i class='fa fa-moon-o moon' aria-hidden='true'></i>}
        handleDiameter={30}
      />
    </Fragment>
  );
};
