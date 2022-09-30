import Icon from 'components/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthDate } from 'redux/birthDateReducer/birthDateSlice';
import { birthDateSelector } from 'redux/birthDateReducer/birthDateSliceSelector';
import s from './BirthdateMoonControls.module.css';

export default function BirthdateMoonControls({ formattedBirthDate }) {
  const userBirthDate = useSelector(birthDateSelector);
  const dispatch = useDispatch();

  function handleDateChange(evt) {
    const chosenDate = evt.target.value;
    dispatch(setBirthDate(chosenDate));
  }

  return (
    <>
      <div className={s.dateWrapper}>
        <p className={s.birthdate}>{formattedBirthDate}</p>

        <div className={s.btnWrapper}>
          <input
            type="date"
            name="date"
            className={s.datePicker}
            onChange={handleDateChange}
            value={userBirthDate}
          />

          <Icon
            iconId="picker-white-icon"
            width={38}
            height={36}
            className={s.datePickerIcon}
          />

          <button className={s.soundBtn}>
            <Icon iconId="sound-on-off-icon" width={38} height={27} />
          </button>
        </div>
      </div>
    </>
  );
}
