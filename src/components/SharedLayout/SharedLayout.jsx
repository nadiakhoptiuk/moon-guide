import Icon from 'components/Icon';
import Logo from 'components/Logo';
import { NavLink, Outlet } from 'react-router-dom';
import routes from '../../utils/routes';
import s from './SharedLayout.module.css';

export default function SharedLayout() {
  return (
    <>
      <div className="page-wrapper">
        <div className="container">
          <header>
            <Logo />
          </header>

          <Outlet />
          <nav>
            <ul className={s.mainNav}>
              <li className={s.mainNavItem}>
                <NavLink
                  to={routes.home}
                  className={({ isActive }) => {
                    return isActive ? 'activeNavLink' : 'navLink';
                  }}
                >
                  <Icon
                    iconId="birth-moon-icon"
                    width={53}
                    height={53}
                    className={s.navIcon}
                  />
                  Birthday Moon
                </NavLink>
              </li>

              <li className={s.mainNavItem}>
                <NavLink
                  to={routes.lunar}
                  className={({ isActive }) => {
                    return isActive ? 'activeNavLink' : 'navLink';
                  }}
                >
                  <Icon
                    iconId="moon-online-icon"
                    width={53}
                    height={53}
                    className={s.navIcon}
                  />
                  Moon online
                </NavLink>
              </li>

              <li className={s.mainNavItem}>
                <NavLink
                  to={routes.ritual}
                  className={({ isActive }) => {
                    return isActive ? 'activeNavLink' : 'navLink';
                  }}
                >
                  <Icon
                    iconId="ritual-icon"
                    width={53}
                    height={53}
                    className={s.navIcon}
                  />
                  Your ritual
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
