import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen w-screen justify-center items-center">
        <div className="flex justify-center items-center gap-4 flex-col w-3/5 h-2/5 bg-blue-50 rounded-xl shadow-lg">
          <h1 className="text-black">Привет, </h1>

          <div className="flex gap-4">
            <button onClick={() => navigate(ROUTES.REGISTRATION)}>
              Регистрация
            </button>
            <button onClick={() => navigate(ROUTES.LOGIN)}>Логин</button>
            <button onClick={() => navigate(ROUTES.HOME)}>Выход</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
