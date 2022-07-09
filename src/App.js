import logo from './logo.svg';
import './App.css';
import Inicio from './pages/inicio/Inicio';
import Single from './pages/singleTarefas/SingleTarefas';
import New from './pages/new/New';
import List from './pages/list/List';
import Login from './pages/login/Login';
import { useState,useEffect } from "react";

//import {tarefaRows} from "./fonteDadosTabela.js";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';




async function getTarefas() {
//const DadosTabela = () => {

let dados = await fetch("/api/TarefasAPI/");

/*if(id != undefined){
  dados = await fetch("api/TarefasAPI/"+id);
}*/
  if (!dados.ok){
    console.error(dados)
    throw new Error("Erro ao carregar a API, codigo: " + dados.status)
  }

  return await dados.json(); //Exporta os dados recebidos da API
}



class App extends React.Component {

  state = {
    tarefas: [],
  }

  componentDidMount() {
    this.LoadTarefas();
  }

  async LoadTarefas(){
    try{
      let dadosTarefas = await getTarefas();
      this.setState({tarefas: dadosTarefas})
      //console.log(dadosTarefas)
    } catch(erro){
      console.error(erro)
    }
  }

  

  render(){


    // Lê os dados do state
    const{tarefas} = this.state;
    console.log(tarefas[0])


    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Inicio />} />
              <Route path="login" element={<Login/>} />
              <Route path="tarefas">
                <Route index element={<List/>} />
                <Route path=':tarefaId' element={<Single dados={tarefas}/>} />
                <Route
                  path="new"
                  element={<New inputs={tarefas} title="Adicionar novo utilizador" />}
                />
              </Route>
              
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
