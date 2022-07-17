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
import SingleUser from './pages/singleUser/SingleUser';
import EditTarefa from './pages/editTarefa/EditTarefa';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
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

//Insere os dados do uma tarefa na API
async function InsereTarefa(tarefa) {
  //Criar o contentor que levará os dados para a API
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "titulo": tarefa.titulo,
    "descricao": tarefa.descricao,
    "pontoSituacao": tarefa.pontoSituacao,
    "membrosFK": tarefa.membrosFK,
    "dataCriacao": tarefa.dataCriacao,
    "dataConclusao": tarefa.dataConclusao,
    "prazo": tarefa.prazo,
    "prioridade": tarefa.prioridade
  });
  //Entrega os dados à API
  let resposta = await fetch("/api/TarefasAPI/", { method: "POST", headers: myHeaders, body: raw });
  if (!resposta.ok){
    console.error(resposta)
    throw new Error("Erro ao adicionar dados à API, codigo: " + resposta.status)
  }  
}

//Edita os dados do uma tarefa na API
async function EditarTarefa(tarefa) {
  //Criar o contentor que levará os dados para a API
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "id": tarefa.id,
    "titulo": tarefa.titulo,
    "descricao": tarefa.descricao,
    "pontoSituacao": tarefa.pontoSituacao,
    "membrosFK": tarefa.membrosFK,
    "dataCriacao": tarefa.dataCriacao,
    "dataConclusao": tarefa.dataConclusao,
    "prazo": tarefa.prazo,
    "prioridade": tarefa.prioridade
  });
  //Entrega os dados à API
  let resposta = await fetch("/api/TarefasAPI/".concat(tarefa.id), { method: "PUT", headers: myHeaders, body: raw });
  if (!resposta.ok){
    console.error(resposta)
    throw new Error("Erro ao editar os dados da API, codigo: " + resposta.status)
  }  
}

//Insere os dados da equipa à API
async function InsereEquipa(equipa) {
  //Criar o contentor que levará os dados para a API
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  let raw = JSON.stringify({
    "nome": equipa.nome,
    "email": equipa.email,
    "teamLeader": equipa.teamLeader,
    "chefe": equipa.chefe
  });
  //Entrega os dados à API
  let resposta = await fetch("/api/EquipasAPI/", { method: "POST", headers: myHeaders, body: raw });
  if (!resposta.ok){
    console.error(resposta)
    throw new Error("Erro ao adicionar dados à API, codigo: " + resposta.status)
  }  
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

/*********************************** HANDLE TAREFAS **********************************/
  //Envia os dados da tarefa para a API
  handleNovaTarefa = async (tarefa) => {
    try{
      await InsereTarefa(tarefa); //Exporta os dados para a API
      this.LoadTarefas(); //Recarrega a lista de tarefas
    } catch(erro){
      //Debug 8
      console.error("Ocorreu um erro ao adicionar a tarefa ("
      + tarefa.titulo + "|" 
      + tarefa.descricao + "|" 
      + tarefa.pontoSituacao + "|" 
      + tarefa.membrosFK + "|" 
      + tarefa.prioridade + "|" 
      + tarefa.dataCriacao + "|"
      + tarefa.dataConclusao + "|"
      + tarefa.prazo + ")")
    }
  }

  //Envia os dados para a API
  handleEditTarefa = async (tarefa) => {
    try{
      await EditarTarefa(tarefa); //Exporta os dados para a API
      this.LoadTarefas(); //Recarrega a lista de tarefas
    } catch(erro){
      //Debug 9
      console.error("Ocorreu um erro ao editar a tarefa ("
      + tarefa.id + "|" 
      + tarefa.titulo + "|" 
      + tarefa.descricao + "|" 
      + tarefa.pontoSituacao + "|" 
      + tarefa.membrosFK + "|" 
      + tarefa.prioridade + "|" 
      + tarefa.dataCriacao + "|"
      + tarefa.dataConclusao + "|"
      + tarefa.prazo + ")")
    }
  }

  //Envia os dados da equipa para a API
  handleNovaEquipa = async (equipa) => {
    try{
      await InsereEquipa(equipa); //Exporta os dados para a API
      this.LoadEquipas(); //Recarrega a lista de tarefas
    } catch(erro){
      //Debug 10
      console.error("Ocorreu um erro ao editar a tarefa ("
      + equipa.id + "|" 
      + equipa.nome + "|" 
      + equipa.email + "|" 
      + equipa.teamLeader + "|" 
      + equipa.chefe + ")")
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

              <Route path="tarefas">
                <Route index element={<ListTarefas/>} />
                <Route path=':tarefaId' element={<SingleTarefas dadosIn={tarefas}/>} />
                <Route
                  path="new"
                  element={<NewTarefa inputs={tarefas} dadosOut={this.handleNovaTarefa} />}
                />
                <Route
                  path="edit/:tarefaId"
                  element={<EditTarefa inputs={tarefas} dadosOut={this.handleEditTarefa} />}
                />
              </Route>

              <Route path="equipa">
                <Route index element={<ListMembros/>} />
                <Route path=':membroId' element={<SingleMembros dados={membros}/>} />
                <Route
                  path="new"
                  element={<NewMembro inputs={membros} dadosOut={this.handleNovaEquipa} title="Adicionar novo membro" />}
                />
              </Route>

              <Route path="user">
                <Route index element={<SingleUser/>} />
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
