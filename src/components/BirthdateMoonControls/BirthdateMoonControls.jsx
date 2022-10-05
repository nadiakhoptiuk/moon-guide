// import Audio from 'components/Audio';
import CustomDayPicker from 'components/CustomDayPicker';
import Icon from 'components/Icon';
import moment from 'moment';
// import { CSSTransition } from 'react-transition-group';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthDate } from 'redux/birthDateReducer/birthDateSlice';
import { birthDateSelector } from 'redux/birthDateReducer/birthDateSliceSelector';
import s from './BirthdateMoonControls.module.css';

export default function BirthdateMoonControls({
  formattedBirthDate,
  isDatePikerShown,
  setIsDatePikerShown,
}) {
  const userBirthDate = useSelector(birthDateSelector);
  const [date, setDate] = useState(userBirthDate || new Date());
  const [isSoundOn, setIsSoundOn] = useState(true);
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

  function toggleSound() {
    isSoundOn ? setIsSoundOn(false) : setIsSoundOn(true);
  }

  return (
    <>
      <div className={s.leftPanelWrapper}>
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

            {/* <audio controls src="./fiolet-ridna.mp3">
            <a href="./fiolet-ridna.mp3">Download audio</a>
          </audio> */}

            <button className={s.soundBtnMob} onClick={toggleSound}>
              {isSoundOn ? (
                <Icon iconId="sound-on-icon" width={38} height={27} />
              ) : (
                <Icon iconId="sound-off-icon" width={27} height={27} />
              )}
            </button>
          </div>
        </div>

        <div className={s.audioControlsWrapper}>
          <Icon
            iconId="audio-line-icon"
            width={285}
            height={1}
            className={s.lineIcon}
          />

          <Icon
            iconId="audio-point-icon"
            width={20}
            height={20}
            className={s.pointIcon}
          />
        </div>

        <div className={s.playerControls}>
          <button className={s.soundBtnDesktop} onClick={toggleSound}>
            {isSoundOn ? (
              <Icon iconId="sound-on-icon" width={38} height={27} />
            ) : (
              <Icon iconId="sound-off-icon" width={27} height={27} />
            )}
          </button>

          <button className={s.pauseBtn}>
            <Icon iconId="pause-icon" width={52} height={28} />
          </button>
        </div>
      </div>
    </>
  );
}
