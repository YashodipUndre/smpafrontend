import Navbar from './Components/navbar';
import './App.css';
import Home from './Components/Home';
import {Routes , Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Home' element={<Home></Home>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
