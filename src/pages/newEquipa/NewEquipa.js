import "./newEquipa.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom"
import React from "react";

class NewEquipa extends React.Component{
    //Cria objeto State para recolher os dados do formulário
    novaEquipa={
      nome: "",
      email: "",
      teamLeader: "",
      chefe: ""
    }
  state = this.novaEquipa;
  
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
      nome: this.state.nome,
      email: this.state.email,
      teamLeader: this.state.teamLeader,
      chefe: this.state.chefe,
    }
    this.props.dadosOut(dadosForm);
  }

  render(){
    const{nome, email, teamLeader, chefe} = this.state;

    return (
      <div className="new">
        <Menu />
        <div className="newContainer">
          <Topbar />
          <div className="top">
            <h1>Adicionar nova Equipa</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form method="Post" onSubmit={this.handleFormSubmit}>
                <div className="formInput">
                  <label>Nome da equipa: </label>
                  <input type="text" placeholder="Nome" name="nome" value={nome} onChange={this.handleAdicao}
                    minLength="2" maxLength="20" required/>
                    <span className="validity"></span>
                </div>  
                <div className="formInput">
                  <label>Email da equipa: </label>
                  <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleAdicao}/>
                </div>
                <div className="formInput">
                  <label>Team Leader: </label>
                  <input type="number" placeholder="Numero do Team Leader" name="teamLeader" value={teamLeader} onChange={this.handleAdicao}/>
                </div>
                <div className="formInput">
                  <label>Chefe: </label>
                  <input type="number" placeholder="Numero do Chefe" name="chefe" value={chefe} onChange={this.handleAdicao}/>
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
  
  export default NewEquipa;
