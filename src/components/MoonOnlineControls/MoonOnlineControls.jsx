import CustomDayPicker from 'components/CustomDayPicker';
import Icon from 'components/Icon';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMoonPhasesQuery } from 'service/getMoonPhasesAPI';
import s from './MoonOnlineControls.module.css';

export default function MoonOnlineControls({
  setDate,
  date,
  setMoonPhase,
  setFormattedDate,
  formattedDate,
}) {
  const [isDatePikerShown, setIsDatePikerShown] = useState(false);
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
    setDate(formattedDay);
  }, [dispatch, date, setDate]);

  useEffect(() => {
    function getFormattedDate(date) {
      const newDate = moment(date).format('MMMM Do, YYYY');
      setFormattedDate(newDate);
    }

    getMoonPhasesQuery(new Date(date).getTime())
      .then(data => setMoonPhase(data.data[0].Phase))
      .catch(data => console.log(data.data[0].Error_msg));

    getFormattedDate(date);
  }, [formattedDate, date, setMoonPhase, setFormattedDate]);

  return (
    <div className={s.dateWrapper}>
      <p className={s.date}>{formattedDate}</p>

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
      </div>
    </div>
  );
}
