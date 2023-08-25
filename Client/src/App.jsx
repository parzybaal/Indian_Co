import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom"
import Home from './views/Home/Home';
import Navbar from "./components/Navbar/Navbar"
import Contact from './views/Contact/Contact'
import About from './views/About/About';
import Detail from './views/Detail/Detail';
import Container from './views/Products/Container/Container';
import NotFound from './views/Error/NotFound';
import DashboardAdmin from './views/DashboardAdmin/DashboardAdmin'
import Cart from './views/Cart/Cart'
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from 'react';
import ProtectedRoutes from './utils/ProtectedRoutes';


function App() {


  const location = useLocation();
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('sessions')))
  }, [user])

  return (
    <>

      {location.pathname !== ("/*" && "/dashboardadmin") && < Navbar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/dashboardadmin' element={
          <ProtectedRoutes>
            <DashboardAdmin />
          </ProtectedRoutes>
        }
        />
        <Route path='/products' element={<Container />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>

      {location.pathname !== "/dashboardadmin" && <Footer />}

    </>
  )
}

export default App
