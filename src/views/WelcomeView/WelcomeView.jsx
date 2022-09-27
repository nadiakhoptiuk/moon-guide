import { Link } from 'react-router-dom';
import s from './WelcomeView.module.css';
import routes from '../../utils/routes';
import WelcomeForm from 'components/WelcomeForm';
import Icon from 'components/Icon';
import Logo from 'components/Logo';

export default function WelcomeView() {
  const screen = window.innerWidth;

  return (
    <section className={s.section}>
      <div className="container">
        <Logo />

        <p className={s.welcomeText}>
          Welcome to <br /> <span className={s.titleText}>Moon guide</span>
        </p>

        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          donec mattis consectetur vehicula dolor commodo pharetra, curabitur
          cursus.
        </p>

        <WelcomeForm />

        <Link to={routes.home} className={s.buttonStart}>
          Start
          <Icon
            iconId="arrow-right-icon"
            width={screen >= 1024 ? 36 : 20}
            height={screen >= 1024 ? 29 : 16}
            className={s.startIcon}
            style={
              screen >= 1024 ? { marginLeft: '24px' } : { marginLeft: '11px' }
            }
          />
        </Link>
      </div>
    </section>
  );
}
