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
