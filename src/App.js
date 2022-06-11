import './App.css';
import Navbar from './components/Navbar';
import { Routes , Route } from "react-router-dom"
import Stopwatch from "./components/Stopwatch"
import Timer from './components/Timer';
function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
      <Route path='/' element={<Stopwatch/>}></Route>
      <Route path='/timer' element={<Timer/>}></Route>
      <Route></Route>
      </Routes>
      
    </div>
  );
}

export default App;
