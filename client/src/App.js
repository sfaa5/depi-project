
import './App.css';
import Header from './components/Header';
import Home from './pages/home/Home';
import Blog from './pages/blogs/Blog'
import "./style/all.min.css";
import  "./style/main.css";
import { BrowserRouter,  Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
  <Header/>

  <Routes> 
    <Route path="/" element={  <Home/>}  />
   <Route path="Bolg" element={<Blog/>} />
  
  </Routes>


    </div>
  );
}

export default App;
