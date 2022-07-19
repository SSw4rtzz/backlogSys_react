import "./widgetEsq.css"
import React from 'react';

async function getMembros() {
    let dados = await fetch("/api/MembrosAPI/"); 
      if (!dados.ok){
        console.error(dados)
        throw new Error("Erro ao carregar a API, codigo: " + dados.status)
      }
      return await dados.json(); //Exporta os dados recebidos da API
    }
    

class WidgetEsq extends React.Component {
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

    var nome1 = "", foto1="", nome2 = "Gonçalo Santos", nome3 = "Hugo Oliveira", equipa = "";
    const ciclo = membros.map(membro => {
        if(membro.nomeEquipa == "Aix System"){ //1 é o id do utilizador logado
            nome1 = membro.nome;
            foto1 = membro.foto;
            equipa = membro.nomeEquipa;
        }
        
    });

    return (
      <div className="widgetEsq">
        <span className="widgetEsqTitle">Membros</span>
        <ul className="widgetEsqList">
            <li className="widgetEsqListItem">
                <img src={'../Fotos/' + foto1} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">{nome1}</span>
                    <span className="widgetEsqUserTitle">{equipa}</span>
                </div>
            </li>
            <li className="widgetEsqListItem">
                <img src={'../Fotos/gsantos.jpg'} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">{nome2}</span>
                    <span className="widgetEsqUserTitle">{equipa}</span>
                </div>
            </li>
            <li className="widgetEsqListItem">
                <img src={'../Fotos/holiveira.jpg'} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">{nome3}</span>
                    <span className="widgetEsqUserTitle">{equipa}</span>
                </div>
            </li>
        </ul>
      </div>
    )
}
}
export default  WidgetEsq;
