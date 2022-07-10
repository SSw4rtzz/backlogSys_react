import "./singleEquipas.css";
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"

import React from "react";

async function getEquipas(id) {

  //Corta o url de forma a fica só com o ultimo numero apresentado, que representa o id da tarefa
  var id = window.location.pathname;
  id = id.split("/")[2];
  
  let dados = await fetch("/api/EquipaAPI/".concat(id));
  
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
  
    return await dados.json(); //Exporta os dados recebidos da API
  }


class SingleEquipas extends React.Component{
  state = {
    equipa: [],
  }

  componentDidMount() {
    this.LoadEquipas();
  }

  async LoadEquipas(){
    try{
      let dadosEquipas = await getEquipas();
      this.setState({equipa: dadosEquipas})
    } catch(erro){
      console.error(erro)
    }
  }

  render(){
    const{equipa} = this.state;
    console.log(equipa);
    return(
      <div className="single">
      <Menu/>
      <div className="singleContainer">
        <Topbar/>
        <div className="details">
        <h1>Detalhes</h1>
          <div>
            <div className="detailItem">
              <span className="itemKey" key={equipa.id}>Numero da Equipa:</span>
              <span className="itemValue">{equipa.id}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Nome:</span>
              <span className="itemValue">{equipa.nome}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">{equipa.email}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Chefe:</span>
              <span className="itemValue">{equipa.teamLeader}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Team Leader:</span>
              <span className="itemValue">{equipa.chefe}</span>
            </div>

          </div>
      </div>
      </div>
    </div>
    )
  }
}

export default SingleEquipas;