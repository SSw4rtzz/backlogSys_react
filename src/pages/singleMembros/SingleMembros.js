import "./singleMembros.css";
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"

import React from "react";

async function getMembros(id) {

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


class SingleMembros extends React.Component{
  state = {
    membro: [],
  }

  componentDidMount() {
    this.LoadMembros();
  }

  async LoadMembros(){
    try{
      let dadosMembros = await getMembros();
      this.setState({membro: dadosMembros})
    } catch(erro){
      console.error(erro)
    }
  }

  render(){
    const{membro} = this.state;
    console.log(membro);
    return(
      <div className="single">
      <Menu/>
      <div className="singleContainer">
        <Topbar/>
        <div className="details">
        <h1>Detalhes</h1>
          <div>
            <div className="detailItem">
              <span className="itemKey" key={membro.id}>Numero da membro:</span>
              <span className="itemValue">{membro.id}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Nome:</span>
              <span className="itemValue">{membro.nome}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Email:</span>
              <span className="itemValue">{membro.email}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Efetividade:</span>
              <span className="itemValue">{membro.efetividade}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Foto:</span>
              <span className="itemValue">{membro.foto}</span>
            </div>
            <div className="detailItem">
              <span className="itemKey">Equipa:</span>
              <span className="itemValue">{membro.equipaFK}</span>
            </div>
          </div>
      </div>
      </div>
    </div>
    )
  }
}

export default SingleMembros;