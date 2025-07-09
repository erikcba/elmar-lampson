import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import News from './pages/News'
import About from './pages/About'
import MyMusic from './pages/MyMusic'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/myMusic" element={<MyMusic />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
