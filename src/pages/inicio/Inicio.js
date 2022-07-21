import "./inicio.css"
import Resumo from "../../components/resumo/Resumo"
import Grafico from "../../components/grafico/Grafico"
import GraficoPie from "../../components/grafico/GraficoPie"
import WidgetEsq from "../../components/widgetEsq/WidgetEsq"
import WidgetDir from "../../components/widgetDir/WidgetDir"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import React from 'react';


// Recebe os dados do Membro a partir da API
async function getMembros() {
    let dados = await fetch("/api/MembrosAPI/1");
      if (!dados.ok){
        console.error(dados)
        throw new Error("Erro ao carregar a API, codigo: " + dados.status)
      }
      return await dados.json(); //Exporta os dados recebidos da API
  }

class Inicio extends React.Component {
    state = {
        membros: []
      }
    
      componentDidMount() {
        this.LoadMembros();
      }

//Carrega os dados da API das Membros
  async LoadMembros(){
    try{
      let dadosMembros = await getMembros();
      this.setState({membros: dadosMembros})
    } catch(erro){
      console.error(erro)
    }
  }

    render() {
        const{membros} = this.state;
    return (
    <div className="inicio">
        <Menu/>
        <div className="inicioContainer"> 
        <Topbar/>
            <h2>Olá, {membros.nome}</h2>
            <Resumo/>
            <div className="grafico">
                <Grafico/>
                <GraficoPie/>
            </div>
            <div className="widgetsInicio">
                <WidgetEsq/>
                <WidgetDir/>
            </div>
        </div>
    </div>
    )
}
}

export default Inicio;
