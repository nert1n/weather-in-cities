import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/style.scss'
import { routes } from "./router";
import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>

        <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
            exact={route.exact}
          />
        ))}
        </Routes>
        
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;