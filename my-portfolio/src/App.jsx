import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import About from './pages/About';
import API from './pages/API';

function App() {
  return (
    <BrowserRouter> {/*Sets up routing for the browser */}
        <Routes> {/* the container for the routes*/}
          <Route path="/" element={<Home/>}/>
          <Route path="/project1" element={<Project1/>}/>
          <Route path="/project2" element={<Project2/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/api" element={<API/>}/>
        </Routes>
    </BrowserRouter>
    
  );
}


export default App;
