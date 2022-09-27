import React from 'react';
import Icon from 'components/Icon';
// import useFormFields from 'hooks/useFormFields';
import s from './WelcomeForm.module.css';

export default function Form() {
  // const { name, setName } = useFormFields('');
  // const { birthdate, setBirthdate } = useFormFields('');
  const screen = window.innerWidth;

  const iconStyle = {
    fill: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  return (
    <form className={s.form}>
      <label className={s.label}>
        <input
          type="text"
          name="name"
          // value={name}
          value="Blair"
          className={s.input}
          placeholder={'Name'}
          // onChange={setName}
        />
        <Icon
          iconId="user-icon"
          width={screen >= 1024 ? 28 : 17}
          height={screen >= 1024 ? 26 : 18}
          style={iconStyle}
        />
      </label>

      <label className={s.label}>
        <input
          type="date"
          name="birthdate"
          // value={birthdate}
          value="1969-11-20"
          className={s.input}
          placeholder={'Birthdate'}
          // onChange={setBirthdate}
        />

        <Icon
          iconId="picker-icon"
          width={screen >= 1024 ? 30 : 18}
          height={screen >= 1024 ? 28 : 17}
          className={s.icon}
          style={iconStyle}
        />
      </label>
    </form>
  );
}
