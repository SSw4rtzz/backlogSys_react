import "./singleTarefas.css";
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import Moment from 'moment';

import React from "react";

async function getTarefas(id) {

  //Corta o url de forma a fica só com o ultimo numero apresentado, que representa o id da tarefa
  var id = window.location.pathname;
  id = id.split("/")[2];
  
  let dados = await fetch("/api/TarefasAPI/".concat(id));
  
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
  
    return await dados.json(); //Exporta os dados recebidos da API
  }


class SingleTarefas extends React.Component{
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
    const{tarefas} = this.state;
    const dataCri = Moment(tarefas.dataCriacao).format('DD MMM YYYY');
    const dataConc = Moment(tarefas.dataCriacao).format('DD MMM YYYY');
    const prazo = Moment(tarefas.dataCriacao).format('DD MMM YYYY');
    console.log(tarefas);
    
    //const{dados} = this.props;
    //console.log(dados.id);
    return(
      <div className="single">
      <Menu/>
      <div className="singleContainer">
        <Topbar/>
        <div className="details">
        <h1>Detalhes</h1>
        {//{dados.map(dados => (
          <div>
            <div className="detailItem">
              <span className="itemKey" key={tarefas.id}>Numero da Tarefa:</span>
              <span className="itemValue">{tarefas.id}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Titulo:</span>
              <span className="itemValue">{tarefas.titulo}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Descrição:</span>
              <span className="itemValue">{tarefas.descricao}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Ponto de Situação:</span>
              <span className="itemValue">{tarefas.pontoSituacao}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Membro:</span>
              <span className="itemValue">{tarefas.membrosFK}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Data de Criação:</span>
              <span className="itemValue">{dataCri}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Prazo:</span>
              <span className="itemValue">{dataConc}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Data de Conclusão:</span>
              <span className="itemValue">{prazo}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Prioridade:</span>
              <span className="itemValue">{tarefas.prioridade}</span>
            </div>


          </div>
        //))
      }
      </div>
      </div>
    </div>
    )
  }
}

export default SingleTarefas;