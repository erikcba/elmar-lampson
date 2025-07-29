import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import MyMusic from './pages/mymusic/MyMusic'
import ScrollTop from './components/ScrollTop'
import Calendar from './pages/calendar/Calendar'
import Media from './pages/Media'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000, // duración en ms
    once: true, // solo una vez
  });
}, []);

  return (
    <BrowserRouter>
    <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/myMusic" element={<MyMusic />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
