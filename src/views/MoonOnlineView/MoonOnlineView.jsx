import moment from 'moment';
import Icon from 'components/Icon';
import MoonOnlineControls from 'components/MoonOnlineControls';
import Video from 'components/Video';
import { useEffect, useState } from 'react';
import { useGetNewMoonDatesByYearQuery } from 'redux/newMoonDates/newMoonDatesApi';
import s from './MoonOnlineView.module.css';
import LunarDay from 'components/LunarDay';

export function MoonOnlineView() {
  const [date, setDate] = useState(new Date());
  const [year, setYear] = useState(new Date().getFullYear());
  const [formattedDate, setFormattedDate] = useState('');
  const [moonPhase, setMoonPhase] = useState('');

  const { data } = useGetNewMoonDatesByYearQuery(year, {
    refetchOnReconnect: true,
    refetchOnMountOrArgChange: true,
  });

  useEffect(() => {
    const newYear = moment(date).year();

    if (year === newYear) return;
    setYear(newYear);
  }, [date, year]);

  // console.log(data);

  return (
    <>
      <section className={s.moonOnlineSection}>
        <p className={s.moonPhase}>
          {moonPhase.toLowerCase()?.includes('moon')
            ? moonPhase
            : `${moonPhase} Moon`}
        </p>

        <MoonOnlineControls
          setDate={setDate}
          date={date}
          setMoonPhase={setMoonPhase}
          setFormattedDate={setFormattedDate}
          formattedDate={formattedDate}
        />

        <div className={s.energyDescWrap}>
          <p className={s.energyDesc}>
            The energy of this phase is magnetic and celebratory!
          </p>
          <button type="button" className={s.btnFullInfo}>
            Full info
            <Icon iconId="arrow-more-icon" className={s.btnFullInfoIcon} />
          </button>
        </div>

        <div className={s.videoWrapper}>
          <Video className={s.video} />
        </div>

        <LunarDay newMoonDates={data} currentDate={date} />
      </section>
    </>
  );
}
