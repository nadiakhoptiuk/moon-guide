import Icon from 'components/Icon';
import Video from '../../components/Video';
import s from './BirthdayMoonView.module.css';

export default function BirthdayMoonView() {
  return (
    <>
      <div className={s.moonViewWrapper}>
        <h1 className={s.pageTitle}>Your Birthday Moon</h1>
        <Video />

        <div className={s.dateWrapper}>
          <p className={s.birthdate}>June 28th, 1980</p>

          <div className={s.btnWrapper}>
            <input type="date" className={s.datePicker} />

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

        <div className={s.aboutBirthdate}>
          <p className={s.birthdateTxt}>You were born on a </p>
          <p className={s.birthdateTitle}>WANING GIBBOUS MOON</p>
          <p className={s.birthdateDesc}>
            An individual born under the Waning Gibbous Moon often seems wise
            beyond their years, with an enhanced ability to parse their
            experiences and learn from them. This tendency also makes them
            particularly good teachers and communicators.
          </p>
          <p className={s.birthdateDesc}>
            If you were born under the Waning Gibbous Moon, you may be driven by
            the desire to understand and explain - but you also need to learn to
            be more accepting of the fact that not all people have the desire to
            listen, and that doesn’t necessarily make them inferior to you - it
            could be that they already have a deeper or different understanding
            of the topic. Or perhaps it’s simply not the right time. Other
            people may find you frustrating if you lecture them and talk down to
            them in a patronizing way. No matter how good your intentions are,
            you can come off as arrogant and condescending, like you’re always
            placing yourself in a position of superiority. Learning when to
            talk, and when to let others talk, is the core challenge that you
            have to overcome on the path to self-actualization.
          </p>
        </div>
      </div>
    </>
  );
}
