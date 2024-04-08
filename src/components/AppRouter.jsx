import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { privateRoutes } from '../router';
import { publicRoutes } from './../router/index';
import Error from './UI/Error/Error';

export default function AppRouter() {
  const isAuth = useSelector((state) => state.auth.value);

  return (
    <div className='content'>
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
              exact={route.exact}
            />
          ))}
          <Route path='*' element={<Error />} />
          <Route
            path='/weather-in-cities/login'
            element={<Navigate to='/weather-in-cities/' replace />}
          />
          <Route
            path='/weather-in-cities/register'
            element={<Navigate to='/weather-in-cities/' replace />}
          />
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component title={route.title} />}
              exact={route.exact}
            />
          ))}
          <Route path='*' element={<Error />} />
        </Routes>
      )}
    </div>
  );
}
