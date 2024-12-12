import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Recommendation from './Pages/Recommendation';
import Widgets from './Pages/Widgets';
function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/movies' element={<Movie/>}/>
    <Route path='/recommendation' element={<Recommendation/>}/>
    <Route path='/widgets' element={<Widgets/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
