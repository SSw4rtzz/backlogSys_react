import logo from './logo.svg';
import './App.css';
import Inicio from './pages/inicio/Inicio';
import Single from './pages/single/Single';
import New from './pages/new/New';
import List from './pages/list/List';
import Login from './pages/login/Login';
import {tarefaRows} from "./fonteDadosTabela.js";

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
              <Route
                path="new"
                element={<New inputs={tarefaRows} title="Adicionar novo utilizador" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
