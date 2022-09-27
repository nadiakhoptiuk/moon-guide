import { Route, Routes } from 'react-router-dom';
import WelcomeView from 'views/WelcomeView/WelcomeView';
// import routes from '../utils/routes';

export const App = () => {
  return (
    <Routes>
      <Route path="/welcome" element={<WelcomeView />} />
    </Routes>
  );
};
