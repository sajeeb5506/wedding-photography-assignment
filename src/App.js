
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Hrader/Header';
import Services from './Pages/Home/Services/Services';
import Login from './Pages/Login/Login';
import Regester from './Pages/Login/Regester/Regester';
import ServiceDetial from './Pages/ServiceDetial/ServiceDetial';
import Notfound from './Shared/NotFound/Notfound';
import Cheakout from './Pages/CheakOut/CheakOut/Cheakout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/blog';


function App() {
  return (
    <div>
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/about' element={<About/>}></Route>
       <Route path='/services' element={<Services/>}></Route>

      <Route path='/serviceall/:serviceId'  element={<ServiceDetial/>}> </Route>

      <Route path='/cheakout' element={
        <RequireAuth>
          <Cheakout></Cheakout>
        </RequireAuth>
      }></Route>
        
       <Route path='/header' element={<Header/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/regester' element={<Regester/>}></Route>
       <Route path='/blog' element={<Blog/>}></Route>

       <Route path='*' element={<Notfound/>}></Route>
       
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
