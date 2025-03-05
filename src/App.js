import Navbar from './Components/navbar';
import './App.css';
import Home from './Components/Home';
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import Lander from './Components/Lander';
import Content from './Components/Content';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/Ai' element={<Home></Home>}/>
        <Route path='/' element={<Lander></Lander>}></Route>
        <Route path='/Content' element={<Content></Content>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
