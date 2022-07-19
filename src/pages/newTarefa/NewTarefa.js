import "./newTarefa.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom"
import React from "react";


class NewTarefa extends React.Component{


  //Cria objeto State para recolher os dados do formulário
  novaTarefa={
    titulo: "",
    descricao: "",
    pontoSituacao: "",
    membrosFK: "",
    dataCriacao: new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString().split('.')[0],
    prazo: "",
    dataConclusao: "",
    prioridade: ""
  }

  state = this.novaTarefa;

//Função para capturar os dados do formulário
  handleAdicao = (e) => {
    const{name, value} = e.target; //Extrair os dados do evento, name -> nome do campo, value -> valor do campo
    //Adiciona os dados ao state
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let dadosForm = {
      titulo: this.state.titulo,
      descricao: this.state.descricao,
      pontoSituacao: this.state.pontoSituacao,
      membrosFK: this.state.membrosFK,
      dataCriacao: this.state.dataCriacao,
      dataConclusao: this.state.dataConclusao,
      prioridade: this.state.prioridade,
      prazo: this.state.prazo
    }
    this.props.dadosOut(dadosForm);
  }


  render(){
      const{titulo, descricao, pontoSituacao, membrosFK, dataCriacao, dataConclusao, prioridade, prazo} = this.state;
      //Data atual
      
  return (
    <div className="new">
      <Menu />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>Adicionar nova tarefa</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form method="Post" onSubmit={this.handleFormSubmit}>
              <div className="formInput">
                <label>Nome da tarefa: </label>
                <input type="text" placeholder="Titulo" name="titulo" value={titulo} onChange={this.handleAdicao}
                  minLength="2" maxLength="20" required/>
                  <span className="validity"></span>
              </div>  
              <div className="formInput">
                <label>Descrição: </label>
                <input type="textarea" placeholder="Descrição" name="descricao" value={descricao} onChange={this.handleAdicao}/>
              </div>
              <div className="formInput">
                <label>Membros: </label>
                <input type="number" placeholder="Numero Empregado" name="membrosFK" value={membrosFK} onChange={this.handleAdicao}/>
              </div>
              <div className="formInput">
                <label>Ponto de Situação: </label>
                <select type="text" placeholder="Ponto de Situação" name="pontoSituacao" value={pontoSituacao} onChange={this.handleAdicao}>
                  <option value="">Ponto de Situação</option>
                  <option value="Por fazer">Por fazer</option>
                  <option value="Em desenvolvimento">Em desenvolvimento</option>
                  <option value="Em espera">Em espera</option>
                  <option value="Concluido">Concluido</option>
                  <option value="Cancelado">Cancelado</option>
                </select>
              </div>
              
              <div className="formInput">
                <label>Data Criação: </label>
                <input id="data" type="datetime-local" placeholder="DD/MM/AAAA" name="dataCriacao" value={dataCriacao} onChange={this.handleAdicao}/>
              </div>
              
              <div className="formInput">
                <label>Prazo: </label>
                <input type="datetime-local" placeholder="DD/MM/AAAA" name="prazo" value={prazo} onChange={this.handleAdicao}/>
              </div>

              <div className="formInput">
                <label>Prioridade: </label>
                <select type="text" placeholder="Prioridade" name="prioridade" value={prioridade} onChange={this.handleAdicao}>
                  <option value="">Selecione uma prioridade (Caso exista)</option>
                  <option value="Baixa">Baixa</option>
                  <option value="Média">Média</option>
                  <option value="Alta">Alta</option>
                </select>
              </div>

              <div className="formInput">
                <label>Data Conclusão: </label>
                <input type="datetime-local" placeholder="DD/MM/AAAA" name="dataConclusao" value={dataConclusao} onChange={this.handleAdicao}/>
              </div>
              <input type="submit" value="Adicionar"/>
            </form>
          </div>
          <NavLink to="/tarefas" style={{textDecoration:"none"}} className="" activeclassname="active">
            Voltar
          </NavLink>
        </div>
      </div>
    </div>
  );
}
};

export default NewTarefa;