import CustomDayPicker from 'components/CustomDayPicker';
import Icon from 'components/Icon';
import moment from 'moment';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthDate } from 'redux/birthDateReducer/birthDateSlice';
// import { setBirthDate } from 'redux/birthDateReducer/birthDateSlice';
import { birthDateSelector } from 'redux/birthDateReducer/birthDateSliceSelector';
import s from './BirthdateMoonControls.module.css';

export default function BirthdateMoonControls({
  formattedBirthDate,
  isDatePikerShown,
  setIsDatePikerShown,
}) {
  const userBirthDate = useSelector(birthDateSelector);
  const [date, setDate] = useState(userBirthDate || new Date());
  const dispatch = useDispatch();

  function handleDateChange(date) {
    setDate(date);
    setIsDatePikerShown(false);
  }

  function toggleDatePickerShow() {
    isDatePikerShown ? setIsDatePikerShown(false) : setIsDatePikerShown(true);
  }

  useEffect(() => {
    const formattedDay = moment(date).format('YYYY-MM-DD');
    dispatch(setBirthDate(formattedDay));
  }, [dispatch, date]);

  return (
    <>
      <div className={s.dateWrapper}>
        <p className={s.birthdate}>{formattedBirthDate}</p>

        <div className={s.btnWrapper}>
          <input
            type="date"
            name="date"
            className={s.datePicker}
            readOnly
            onClick={toggleDatePickerShow}
          />

          <Icon
            iconId="picker-white-icon"
            width={38}
            height={36}
            className={s.datePickerIcon}
            onClick={toggleDatePickerShow}
          />

          {isDatePikerShown ? (
            <CustomDayPicker
              selected={date}
              className={s.customDatePicker}
              onSelect={handleDateChange}
            />
          ) : null}

          <button className={s.soundBtn}>
            <Icon iconId="sound-on-off-icon" width={38} height={27} />
          </button>
        </div>
      </div>
    </>
  );
}
