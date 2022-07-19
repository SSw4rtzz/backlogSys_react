import "./singleUser.css";
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import Chart from "../../components/grafico/Grafico"
import { NavLink } from "react-router-dom"

import React from "react";

async function getMembros() {
  //Corta o url de forma a fica só com o ultimo numero apresentado, que representa o id da tarefa
  var id = window.location.pathname;
  id = id.split("/")[2];
  
  let dados = await fetch("/api/MembrosAPI/".concat(id));
  
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
  
    return await dados.json(); //Exporta os dados recebidos da API
  }

  async function getEquipa(idEquipa) {
    let dados = await fetch("/api/EquipaAPI/".concat(idEquipa));
      if (!dados.ok){
        console.error(dados)
        throw new Error("Erro ao carregar a API, codigo: " + dados.status)
      }
      return await dados.json(); //Exporta os dados recebidos da API
    }

class SingleUser extends React.Component{
  state = {
    membro: [],
    equipa: []
  }

  componentDidMount() {
    this.LoadMembros();
  }

  async LoadMembros(){
    try{
      let dadosMembros = await getMembros();
      this.setState({membro: dadosMembros})
      this.LoadEquipas(dadosMembros.equipaFK);
    } catch(erro){
      console.error(erro)
    }
  }

  async LoadEquipas(idEquipa){
    try{
      let dadosEquipa = await getEquipa(idEquipa);
      this.setState({equipa: dadosEquipa})
    } catch(erro){
      console.error(erro)
    }
  }

  render(){
    const{membro,equipa} = this.state;
    return(
      <div className="single">
      <Menu/>
      <div className="singleContainer">
        <Topbar/>
        <div className="espaco">
        </div>
        <div className="top">
          <div className="left">
          <NavLink to={"/user/edit/".concat(membro.id)} style={{textDecoration:"none"}} className="editButton" activeclassname="active">
            Editar
          </NavLink>
            <h1 className="title">Detalhes do Utilizador</h1>
            <div className="item">
              <img src={'../Fotos/' + membro.foto} alt="" className="itemImgUser"/>
              <div className="detailsUser">
                <h1 className="itemTitle">{membro.nome}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{membro.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Efetividade:</span>
                  <span className="itemValue">{membro.efetividade}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipa:</span>
                  <span className="itemValue">{equipa.nome}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="right">
            <Chart aspectRatio={3/1} title="Tarefas realizadas (Ultimos 3 meses)"/>
          </div>
        </div>
        <div className="bottom">
          {/*<h1 className="title">Tarefas em progresso</h1>*/}
        </div>
      </div>
    </div>
    )
  }
}

export default SingleUser;