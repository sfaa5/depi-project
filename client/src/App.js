
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import Blog from './pages/blogs/Blog'
import Contact from './pages/contactUs/contactUs'
import Service from './pages/services/ServiceSection'
import "./style/all.min.css";
import  "./style/main.css";
import { BrowserRouter,  Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
  <Header/>

  <BrowserRouter>
  <Routes> 
    <Route path="/" element={  <Home/>}  />
    <Route path="Services" element={<Service/>} />
   <Route path="Bolg" element={<Blog/>} />
   <Route path="contact-Us" element={<Contact/>} />
   
  </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
