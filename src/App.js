import logo from './logo.svg';
import './App.css';
import Inicio from './pages/inicio/Inicio';
import SingleTarefas from './pages/singleTarefas/SingleTarefas';
import NewTarefa from './pages/newTarefa/NewTarefa';
import ListTarefas from './pages/listTarefas/ListTarefas';
import SingleEquipas from './pages/singleEquipas/SingleEquipas';
import NewEquipa from './pages/newEquipa/NewEquipa';
import ListEquipas from './pages/listEquipas/ListEquipas';
import SingleMembros from './pages/singleMembros/SingleMembros';
import NewMembro from './pages/newMembro/NewMembro';
import ListMembros from './pages/listMembros/ListMembros';
import Login from './pages/login/Login';
import { useState,useEffect } from "react";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';


// Recebe os dados das Tarefas a partir da API
async function getTarefas() {
let dados = await fetch("/api/TarefasAPI/");
  if (!dados.ok){
    console.error(dados)
    throw new Error("Erro ao carregar a API, codigo: " + dados.status)
  }
  return await dados.json(); //Exporta os dados recebidos da API
}

// Recebe os dados dos Membros a partir da API
async function getMembros() {
  let dados = await fetch("/api/MembrosAPI/");
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
    return await dados.json(); //Exporta os dados recebidos da API
}

// Recebe os dados das Equipas a partir da API
async function getEquipas() {
  let dados = await fetch("/api/EquipaAPI/");
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
    return await dados.json(); //Exporta os dados recebidos da API
}

class App extends React.Component {
  state = {
    tarefas: [],
    membros: [],
    equipas: [],
  }

  componentDidMount() {
    this.LoadTarefas();
    this.LoadMembros();
    this.LoadEquipas();
  }

  //Carrega os dados da API das Tarefas
  async LoadTarefas(){
    try{
      let dadosTarefas = await getTarefas();
      this.setState({tarefas: dadosTarefas})
    } catch(erro){
      console.error(erro)
    }
  }

    //Carrega os dados da API das Membros
  async LoadMembros(){
    try{
      let dadosMembros = await getMembros();
      this.setState({membros: dadosMembros})
    } catch(erro){
      console.error(erro)
    }
  }

  //Carrega os dados da API das Equipas
  async LoadEquipas(){
    try{
      let dadosEquipas = await getEquipas();
      this.setState({equipas: dadosEquipas})
    } catch(erro){
      console.error(erro)
    }
  }


  render(){

    // Lê os dados do state
    const{tarefas, membros, equipas} = this.state;
    //console.log(tarefas[0]) //Debug 3


    return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route index element={<Inicio />} />
              <Route path="login" element={<Login/>} />

              <Route path="tarefas">
                <Route index element={<ListTarefas/>} />
                <Route path=':tarefaId' element={<SingleTarefas dados={tarefas}/>} />
                <Route
                  path="new"
                  element={<NewTarefa inputs={tarefas} title="Adicionar nova tarefa" />}
                />
              </Route>

              <Route path="equipa">
              <Route index element={<ListMembros/>} />
                <Route path=':membroId' element={<SingleMembros dados={membros}/>} />
                <Route
                  path="new"
                  element={<NewMembro inputs={membros} title="Adicionar novo membro" />}
                />
              </Route>
              
              <Route path="gerirEquipas">
              <Route index element={<ListEquipas/>} />
                <Route path=':equipaId' element={<SingleEquipas dados={equipas}/>} />
                <Route
                  path="new"
                  element={<NewEquipa inputs={equipas} title="Adicionar nova equipa" />}
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
