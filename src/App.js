import logo from './logo.svg';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Menu from './components/menu/Menu';

import Inicio from './pages/inicio/Inicio';



function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <Menu/>
        <Inicio/>
      </div>

    </div>
  );
}

export default App;
