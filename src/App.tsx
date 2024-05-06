import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { publicRoutes, privateRoutes } from '@/routes/routes';
import Error from '@/components/widgets/error';
import Header from '@/components/widgets/header';
import Footer from '@/components/widgets/footer';
import '@/styles/style.scss';

export default function App() {
  const isAuth = useSelector((state: any) => state.auth.value);

  return (
    <div className='content'>
      <Header />
      {isAuth ? (
        <Routes>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
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
              element={<route.component />}
            />
          ))}
          <Route path='*' element={<Error />} />
        </Routes>
      )}
      <Footer />
    </div>
  );
}
