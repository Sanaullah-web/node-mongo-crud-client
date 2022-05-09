import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Adduser from './Components/AddUser/Adduser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/user' element={<Adduser></Adduser>}></Route>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
