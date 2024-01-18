import './App.css';
import { useAuth } from './store/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Features } from './pages/Features';
import { Pricing } from './pages/Pricing';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Logout } from './pages/Logout';
import { HomeNavbar } from './components/HomeNavbar';
import { MyAccount } from './pages/MyAccount';
import { OtherProduct } from './pages/OtherProduct';
import { HomeFooter } from './components/HomeFooter';
import { Settings } from './pages/Settings';
import { Signings } from './pages/Signings';
import { Expenses } from './pages/Expenses';
import { Customer } from './pages/Customer';







function App() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <BrowserRouter>
        {!isLoggedIn ? <Navbar /> :  <> </>} 
        {isLoggedIn ? <HomeNavbar/> :  <> </>} 
      
        <Routes>
        <Route path="/" element={ <Features></Features> }/>
        <Route path="/features" element={ <Features></Features> }/>
        <Route path="/pricing" element={ <Pricing/> }/>
        <Route path="/signup" element={ <Signup/> }/>
        <Route path="/login" element={ <Login/> }/>
        <Route path="/logout" element={ <Logout/> }/>
        <Route path="/home" element={ <Home/> }/>
        <Route path="/MyAccount" element={ <MyAccount/> }/>
        <Route path="/otherProduct" element={ <OtherProduct/> }/>
        <Route path="/Settings" element={ <Settings/> }/>
        <Route path="/signing" element={ <Signings/> }/>
        <Route path="/expenses" element={ <Expenses/> }/>
        <Route path="/customers" element={ <Customer/> }/>

      </Routes>
      {!isLoggedIn ? <Footer /> : <></>} 
      { isLoggedIn ? <HomeFooter /> : <></>} 
    
    </BrowserRouter >


    
    </>

  );
}

export default App;
