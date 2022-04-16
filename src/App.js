
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Hrader/Header';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Regester from './Pages/Login/Regester/Regester';

function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/regester' element={<Regester/>}></Route>
    
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
