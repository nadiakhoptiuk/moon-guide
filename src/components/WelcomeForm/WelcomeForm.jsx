import React from 'react';
import Icon from 'components/Icon';
// import useFormFields from 'hooks/useFormFields';
import s from './WelcomeForm.module.css';

export default function Form() {
  // const { name, setName } = useFormFields('');
  // const { birthdate, setBirthdate } = useFormFields('');

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
          readOnly
        />
        <Icon iconId="user-icon" className={s.userIcon} />
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
          readOnly
        />

        <Icon iconId="picker-icon" className={s.datePickerIcon} />
      </label>
    </form>
  );
}
