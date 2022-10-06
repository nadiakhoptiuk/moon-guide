import BirthdateInfo from 'components/BirthdateInfo';

import BirthdateMoonControls from 'components/BirthdateMoonControls';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { birthDateSelector } from 'redux/birthDateReducer/birthDateSliceSelector';
import { getMoonPhasesQuery } from 'service/getMoonPhasesAPI';
import Video from '../../components/Video';
import s from './BirthdayMoonView.module.css';

export default function BirthdayMoonView() {
  const [formattedBirthDate, setFormattedBirthDate] = useState('');
  const [moonPhase, setMoonPhase] = useState('');
  const [isDatePikerShown, setIsDatePikerShown] = useState(false);

  const userBirthDate = useSelector(birthDateSelector);

  useEffect(() => {
    getMoonPhasesQuery(new Date(userBirthDate).getTime())
      .then(data => setMoonPhase(data.data[0].Phase))
      .catch(data => console.log(data.data[0].Error_msg));

    getFormattedDate(userBirthDate);
  }, [formattedBirthDate, moonPhase, userBirthDate]);

  function getFormattedDate(date) {
    const newDate = moment(date).format('MMM Do, YYYY');
    setFormattedBirthDate(newDate);
  }

  return (
    <>
      <div className={s.moonViewWrapper}>
        <div
          className={
            isDatePikerShown ? s.moonAndTitleWrapperBlur : s.moonAndTitleWrapper
          }
        >
          <h1 className={s.pageTitle}>Your Birthday Moon</h1>
        </div>

        <div className={s.infoWrapper}>
          <div className={s.leftPanelDesktop}>
            <div className={s.videoWrapper}>
              <Video className={s.video} />
            </div>
            <BirthdateMoonControls
              formattedBirthDate={formattedBirthDate}
              isDatePikerShown={isDatePikerShown}
              setIsDatePikerShown={setIsDatePikerShown}
            />
          </div>
          <BirthdateInfo moonPhase={moonPhase} />
        </div>
      </div>
    </>
  );
}
