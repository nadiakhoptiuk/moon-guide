import logoImg from '../../images/logo.png';
import logoImgDesktop from '../../images/logo-desktop.png';
import s from './Logo.module.css';

export default function Logo() {
  const width = window.innerWidth;

  return (
    <div className={s.logo}>
      <img src={width >= 1440 ? logoImgDesktop : logoImg} alt="logo" />
      <p className={s.logoText}>Numerologist</p>
    </div>
  );
}
