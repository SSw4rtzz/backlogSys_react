import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom"
import React from "react";



async function getEquipa() {

  //Corta o url de forma a fica só com o ultimo numero apresentado, que representa o id da tarefa
  var idURL = window.location.pathname;
  idURL = idURL.split("/")[3];

  console.log(idURL);
  
  let dados = await fetch("/api/EquipaAPI/".concat(idURL));
  
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
  
    return await dados.json(); //Exporta os dados recebidos da API
  }


  

class EditEquipa extends React.Component{

  //Cria referencias para os inputs, foi usado este metodo pois com o onChange() quando o utilizador não utiliza o input, o valor não é enviado
  constructor(props){
    super(props);
    this.id = React.createRef();
    this.nome = React.createRef();
    this.email = React.createRef();
    this.teamLeader = React.createRef();
    this.chefe = React.createRef();
  }

  state = {
    equipa: [],
  }
  
  
  componentDidMount() {
    this.LoadEquipa();
  }

  async LoadEquipa(){
    try{
      let dadosEquipa = await getEquipa();
      this.setState({equipa: dadosEquipa})

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
      nome: this.nome.current.value,
      email: this.email.current.value,
      teamLeader: this.teamLeader.current.value,
      chefe: this.chefe.current.value,
    }
    this.props.dadosOut(dadosForm);
  }


  render(){
  const{equipa} = this.state;
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
                <input disabled="disabled" ref={this.id} type="number" placeholder="Id" name="id" defaultValue={equipa.id}/>
              </div>  
              <div className="formInput">
                <label>Nome da tarefa: </label>
                <input ref={this.nome} type="text" placeholder="Nome" name="nome" defaultValue={equipa.nome}/>
              </div>  
              <div className="formInput">
                <label>Email: </label>
                <input ref={this.email} type="email" placeholder="Email" name="email" defaultValue={equipa.email}/>
              </div>
              <div className="formInput">
                <label>Team Leader: </label>
                <input ref={this.teamLeader} type="number" placeholder="TeamLeader" name="teamLeader" defaultValue={equipa.teamLeader}/>
              </div>
              <div className="formInput">
                <label>Chefe: </label>
                <input ref={this.chefe} type="number" placeholder="Chefe" name="chefe" defaultValue={equipa.chefe}/>
              </div>
              <input type="submit" value="Adicionar"/>
            </form>
          </div>
          <NavLink to="/gerirEquipas" style={{textDecoration:"none"}} className="" activeclassname="active">
            Voltar
          </NavLink>
        </div>
      </div>
    </div>
  );
  }
};

export default EditEquipa;