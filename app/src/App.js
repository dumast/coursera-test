import logo from './logo.svg';
import './App.css';
import MenuIcon from './Components/MenuIcon'
import Arrow from './Components/Arrow'
import Home from './Components/Home'
import About from './Components/About'
import Programming from './Components/Programming'
import Contact from './Components/Contact'

function App() {
  return (
    <>
      <MenuIcon/>
      <Arrow/>
      <div className="page">
        <Home/>
        <About/>
        <Programming/>
        <Contact/>
      </div> 
    </>
  );
}

export default App;
