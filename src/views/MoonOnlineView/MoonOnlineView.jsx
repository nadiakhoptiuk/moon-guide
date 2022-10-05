import MoonOnlineControls from 'components/MoonOnlineControls';
import { useState } from 'react';
import s from './MoonOnlineView.module.css';

export function MoonOnlineView() {
  const [date, setDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');
  const [moonPhase, setMoonPhase] = useState('');

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
          <button type="button"></button>
        </div>
      </section>
    </>
  );
}
