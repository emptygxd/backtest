import { Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home';
import Registration from '../pages/registration/Registration';
import Login from '../pages/login/Login';

import { ROUTES } from '../constants/routes';

function App() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.REGISTRATION} element={<Registration />} />

      <Route path={ROUTES.LOGIN} element={<Login />} />

      {/* <Route path={ROUTES.LOGOUT} element={<Logout />} /> */}

      <Route path="*" element={<div>не найдено</div>} />
    </Routes>
  );
}

export default App;
