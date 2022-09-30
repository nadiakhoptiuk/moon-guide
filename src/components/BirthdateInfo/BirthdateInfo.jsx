import s from './BirthdateInfo.module.css';

export default function BirthdateInfo({ moonPhase }) {
  return (
    <div className={s.birthdateInfo}>
      <p className={s.birthdateTxt}>You were born on a </p>
      {moonPhase ? (
        <>
          <p className={s.birthdateTitle}>
            {moonPhase.toLowerCase()?.includes('moon')
              ? moonPhase
              : `${moonPhase} MOON`}
          </p>
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
        </>
      ) : null}
    </div>
  );
}
