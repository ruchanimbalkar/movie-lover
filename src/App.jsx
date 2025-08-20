import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Images from './pages/Images';
import './App.css'

function App() {
 

  return (
    <>     
      <div>
      <header>
        <h1>🎥  Movie Lover 💗 </h1>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/images" element={<Images />} />
      </Routes>
      <footer>
        <p> &copy; 2025 Rucha Nimbalkar @ Movie Lover</p>
      </footer>
    </div>
  
    </>
  )
}

export default App
