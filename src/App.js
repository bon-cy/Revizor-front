import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Diner from './pages/Diner/Diner';
import './app.css'

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Diner />} />
      </Routes>
      <Footer />

  </div>
  )
}

export default App;
