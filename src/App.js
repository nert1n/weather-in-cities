import { BrowserRouter } from 'react-router-dom';
import './scss/style.scss'
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import { createContext, useEffect } from 'react';
import AppRouter from './components/AppRouter';
import { useFetching } from './hooks/useFetching';
import PostService from './API/PostServise';
import { useTranslation } from 'react-i18next';

export const ConfigContext = createContext();

function App() {
  const { t, i18n } = useTranslation();

  const [fetchIp, isIpLoading, ipError] = useFetching( async () => {
    const ip = await PostService.getIp();
    const country = ip.country.toLowerCase()

    i18n.changeLanguage(country);
  })

  useEffect(() => {
    fetchIp()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <AppRouter/>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;