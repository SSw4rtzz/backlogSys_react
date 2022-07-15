import "./singleUser.css";
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import Chart from "../../components/grafico/Grafico"

import React from "react";

class SingleUser extends React.Component{

  render(){

    return(
      <div className="single">
      <Menu/>
      <div className="singleContainer">
        <Topbar/>
        <div className="espaco">
        </div>
        <div className="top">
          <div className="left">
            <div className="editButton">Editar</div>
            <h1 className="title">Detalhes do Utilizador</h1>
            <div className="item">
              <img src="https://w.wallhaven.cc/full/e7/wallhaven-e7g71w.jpg" alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">Ricardo Correia</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">rcorreia@empresa.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Efetividade:</span>
                  <span className="itemValue">Contratado</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Equipa:</span>
                  <span className="itemValue">Admintt</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="right">
            <Chart aspectRatio={3/1} title="Tarefas realizadas (Ultimos 3 meses)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Tarefas em progresso</h1>
        </div>
      </div>
    </div>
    )
  }
}

export default SingleUser;