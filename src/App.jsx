import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header/Header';
import { Footer } from './Components/Footer/Footer';
import { HomePage } from './Pages/HomePage/HomePage';
import { HawaiiPage } from './Pages/HawaiiPage/HawaiiPage';
import { GreecePage } from './Pages/GreecePage/GreecePage';
import { IcelandPage } from './Pages/IcelandPage/IcelandPage';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/hawaii' element={<HawaiiPage />} />
        <Route path='/iceland' element={<IcelandPage />} />
        <Route path='/greece' element={<GreecePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
