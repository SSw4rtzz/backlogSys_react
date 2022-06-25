import logo from './logo.svg';
import './App.css';
import Topbar from "./components/topbar/Topbar";
import Menu from './components/menu/Menu';
import Inicio from './pages/inicio/Inicio';
import Tarefas from './pages/tarefas/Tarefas';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import Login from './pages/login/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
//Import route components



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Inicio />} />
            <Route path="login" element={<Login/>} />
            <Route path="tarefas">
              <Route index element={<List />} />
              <Route path=':tarefaId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
            <Route path="equipa">
              <Route index element={<List />} />
              <Route path=':equipaId' element={<Single />} />
              <Route path='new' element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
