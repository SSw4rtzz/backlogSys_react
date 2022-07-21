import "./newMembro.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom"
import React from "react";

class NewMembro extends React.Component{
    //Cria objeto State para recolher os dados do formulário
    novoMembro={
      nome: "",
      email: "",
      efetividade: "",
      foto: null,
      equipaFK: ""
    }
  state = this.novoMembro;
  
  //Função para capturar os dados do formulário
  handleAdicao = (e) => {
    const{name, value} = e.target; //Extrair os dados do evento, name -> nome do campo, value -> valor do campo
    //Adiciona os dados ao state
    this.setState({
      [name]: value,
    });
  }

  //Recolhe a fotografia do membro para o state
  handleFotoMembro = (e) => {
    this.setState({foto: e.target.files[0]});
  }

  //Função executada quando o formulário é submetido
  handleFormSubmit = (e) => {
    e.preventDefault();
    //Cria objeto para enviar os dados do formulário
    let dadosForm = {
      nome: this.state.nome,
      email: this.state.email,
      efetividade: this.state.efetividade,
      foto: this.state.foto,
      equipaFK: this.state.equipaFK,
    }
    this.props.dadosOut(dadosForm);
  }

  render(){
    const{nome, email, efetividade, equipaFK} = this.state;

    return (
      <div className="new">
        <Menu />
        <div className="newContainer">
          <Topbar />
          <div className="top">
            <h1>Adicionar novo membro</h1>
          </div>
          <div className="bottom">
            <div className="right">
              <form encType="multipart/form-data" method="Post" onSubmit={this.handleFormSubmit}>
                <div className="formInput">
                  <label>Nome: </label>
                  <input type="text" placeholder="Nome" name="nome" value={nome} onChange={this.handleAdicao}
                    minLength="2" maxLength="20" required/>
                    <span className="validity"></span>
                </div>  
                <div className="formInput">
                  <label>Email: </label>
                  <input type="email" placeholder="Email" name="email" value={email} onChange={this.handleAdicao}/>
                </div>
                <div className="formInput">
                <label>Efetividade: </label>
                <select type="text" name="efetividade" value={efetividade} onChange={this.handleAdicao}>
                  <option value="">Seleciona uma opção</option>
                  <option value="Sim">Contratado/Efetivo</option>
                  <option value="Não">Estagiário</option>
                </select>
              </div>
              <div className="formInput">
                <label>Fotografia: </label>
                <input type="file" name="foto" accept=".jpg,.png" onChange={this.handleFotoMembro}/>
              </div>
              <div className="formInput">
                <label>Equipa: </label>
                <input type="number" placeholder="Numero equipa" name="equipaFK" value={equipaFK} onChange={this.handleAdicao}/>
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
  
  export default NewMembro;
