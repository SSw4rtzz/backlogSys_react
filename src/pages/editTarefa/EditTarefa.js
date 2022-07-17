import "./editTarefa.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom"
import React from "react";



async function getTarefa() {

  //Corta o url de forma a fica só com o ultimo numero apresentado, que representa o id da tarefa
  var idURL = window.location.pathname;
  idURL = idURL.split("/")[3];

  console.log(idURL);
  
  let dados = await fetch("/api/TarefasAPI/".concat(idURL));
  
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
  
    return await dados.json(); //Exporta os dados recebidos da API
  }


  

class NewTarefa extends React.Component{

  //Cria referencias para os inputs, foi usado este metodo pois com o onChange() quando o utilizador não utiliza o input, o valor não é enviado
  constructor(props){
    super(props);
    this.id = React.createRef();
    this.titulo = React.createRef();
    this.descricao = React.createRef();
    this.pontoSituacao = React.createRef();
    this.membrosFK = React.createRef();
    this.dataCriacao = React.createRef();
    this.prioridade = React.createRef();
    this.prazo = React.createRef();
    this.dataConclusao = React.createRef();
  }

  state = {
    tarefa: [],
  }
  
  
  componentDidMount() {
    this.LoadTarefa();
  }

  async LoadTarefa(){
    try{
      let dadosTarefa = await getTarefa();
      this.setState({tarefa: dadosTarefa})

    } catch(erro){
      console.error(erro)
    }
  }



//Função para capturar os dados do formulário
  handleEditar = (e) => {
    const{name, value} = e.target; //Extrair os dados do evento, name -> nome do campo, value -> valor do campo
    
    //Adiciona os dados ao state
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let dadosForm = {
      id: this.id.current.value,
      titulo: this.titulo.current.value,
      descricao: this.descricao.current.value,
      membrosFK: this.membrosFK.current.value,
      pontoSituacao: this.pontoSituacao.current.value,
      dataCriacao: this.dataCriacao.current.value,
      prazo: this.prazo.current.value,
      dataConclusao: this.dataConclusao.current.value,
      prioridade: this.prioridade.current.value
    }
    this.props.dadosOut(dadosForm);
  }


  render(){
    //const{titulo, descricao, pontoSituacao, membrosFK, dataCriacao, dataConclusao, prioridade, prazo} = this.stateEdit;
    const{tarefa} = this.state;

      //document.getElementById('data').valueAsDate = new Date();
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
                <label>Id: </label>
                <input disabled="disabled" ref={this.id} type="number" placeholder="Id" name="id" defaultValue={tarefa.id}/>
              </div>  
              <div className="formInput">
                <label>Nome da tarefa: </label>
                <input ref={this.titulo} type="text" placeholder="Titulo" name="titulo" defaultValue={tarefa.titulo}/>
              </div>  
              <div className="formInput">
                <label>Descrição: </label>
                <input ref={this.descricao} type="text" placeholder="Descrição" name="descricao" defaultValue={tarefa.descricao}/>
              </div>
              <div className="formInput">
                <label>Membros: </label>
                <input ref={this.membrosFK} type="number" placeholder="Membros" name="membrosFK" defaultValue={tarefa.membrosFK}/>
              </div>
              <div className="formInput">
                <label>Ponto de Situação: </label>
                <input ref={this.pontoSituacao} type="text" placeholder="Ponto de Situação" name="pontoSituacao" defaultValue={tarefa.pontoSituacao}/>
              </div>
              
              <div className="formInput">
                <label>Data Criação: </label>
                <input ref={this.dataCriacao} id="data" type="datetime-local" placeholder="DD/MM/AAAA" name="dataCriacao" defaultValue={tarefa.dataCriacao}/>
              </div>
              
              <div className="formInput">
                <label>Prazo: </label>
                <input ref={this.prazo} type="datetime-local" placeholder="DD/MM/AAAA" name="prazo" defaultValue={tarefa.prazo}/>
              </div>

              <div className="formInput">
                <label>Data Conclusão: </label>
                <input ref={this.dataConclusao} type="datetime-local" placeholder="DD/MM/AAAA" name="dataConclusao" defaultValue={tarefa.dataConclusao}/>
              </div>

              <div className="formInput">
                <label>Prioridade: </label>
                <input ref={this.prioridade} type="text" placeholder="Prioridade" name="prioridade" defaultValue={tarefa.prioridade}/>
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