import Icon from 'components/Icon';
import Video from '../../components/Video';
import s from './BirthdayMoonView.module.css';

export default function BirthdayMoonView() {
  return (
    <>
      <h1 className={s.pageTitle}>Your Birthday Moon</h1>
      <Video />

      <div className={s.dateWrapper}>
        <p className={s.birthdate}>June 28th, 1980</p>
        <input type="date" className={s.datePicker} />
        <Icon iconId="picker-white-icon" width={38} height={36} />
        <button className={s.soundBtn}>
          <Icon iconId="sound-on-off-icon" width={38} height={27} />
        </button>
      </div>
    </>
  );
}
