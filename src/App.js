import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss'
import { publicRoutes } from "./router";
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';
import { createContext } from 'react';
import AppRouter from './components/AppRouter';

export const ConfigContext = createContext();

function App() {
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