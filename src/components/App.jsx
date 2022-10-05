import { Route, Routes } from 'react-router-dom';
import BirthdayMoonView from 'views/BirthdayMoonView';
import { MoonOnlineView } from 'views/MoonOnlineView/MoonOnlineView';
import WelcomeView from 'views/WelcomeView/WelcomeView';
import SharedLayout from './SharedLayout';
// import routes from '../utils/routes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<BirthdayMoonView />} />
        <Route path="/moon_online" element={<MoonOnlineView />} />
        {/* <Route path="/your_ritual" element={< />} /> */}
      </Route>
      <Route path="/welcome" element={<WelcomeView />} />
    </Routes>
  );
};
