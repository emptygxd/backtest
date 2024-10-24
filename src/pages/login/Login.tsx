import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const loginChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col relative w-3/5 h-3/5 bg-blue-50 rounded-xl shadow-lg">
          <p
            className="absolute top-4 left-4 text-black cursor-pointer"
            onClick={() => navigate(ROUTES.HOME)}>
            &lt;-
          </p>
          <h1 className="text-black text-4xl">Логин</h1>

          <div className="flex justify-center items-center gap-4 flex-col">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-black">
                Логин
              </label>
              <input
                value={login}
                onChange={loginChangeHandler}
                type="text"
                name="login"
                id="login"
                className="rounded-md shadow-md outline-none text-black p-2 text-sm w-52"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="text-black">
                Пароль
              </label>
              <input
                value={password}
                onChange={passwordChangeHandler}
                type="text"
                name="password"
                id="password"
                className="rounded-md shadow-md outline-none text-black p-2 text-sm w-52"
              />
            </div>
          </div>

          <button>Войти</button>
        </div>
      </div>
    </>
  );
};

export default Login;
