import { Route, Routes } from 'react-router-dom';
import BirthdayMoonView from 'views/BirthdayMoonView';
import WelcomeView from 'views/WelcomeView/WelcomeView';
import SharedLayout from './SharedLayout';
// import routes from '../utils/routes';

export const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomeView />} />
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<BirthdayMoonView />} />
      </Route>
    </Routes>
  );
};
