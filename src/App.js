import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HomePage } from './Pages/HomePage'
import '../src/App.scss'
import { TopBanner } from './components/TopBanner'
import { Testimony } from './components/Testimony'
import { Beverages } from './components/Beverages'
import { Footer } from './components/Footer'
import { Service } from './Pages/Service'
import { About } from './Pages/About'
import { Project } from './Pages/Project'
import { Contact } from './Pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/navbar' element={<Navbar />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/topbanner' element={<TopBanner />} />
        <Route path='/testimony' element={<Testimony />} />
        <Route path='/beverages' element={<Beverages />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
