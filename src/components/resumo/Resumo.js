import "./resumo.css"
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// Recebe os dados das Tarefas a partir da API
async function getTarefas() {
    let dados = await fetch("/api/TarefasAPI/");
      if (!dados.ok){
        console.error(dados)
        throw new Error("Erro ao carregar a API, codigo: " + dados.status)
      }
      return await dados.json(); //Exporta os dados recebidos da API
    }

  const data = new Date();


class Resumo extends React.Component {
    state = {
        tarefas: []
      }
    
      componentDidMount() {
        this.LoadTarefas();
      }
      
      async LoadTarefas(){
        try{
          let dadosTarefas = await getTarefas();
          this.setState({tarefas: dadosTarefas})
        } catch(erro){
          console.error(erro)
        }
      }

render() {
    const{tarefas} = this.state;

    var countAcabar = 0, countProgresso = 0, countNovas = 0, countConcluidas = 0;
    const ciclo = tarefas.map(tarefa => {
        const dataPrazo = new Date(tarefa.prazo)
        const dataCriac = new Date(tarefa.dataCriacao)
        const dataConc = new Date(tarefa.dataConclusao)
        if(tarefa.membrosFK == 1){ //1 é o id do utilizador logado
            if((dataPrazo.getMonth() == data.getMonth() && dataPrazo.getDay() > data.getDay() && tarefa.pontoSituacao != "Concluido") || dataPrazo.getMonth() == data.getMonth()+1 && tarefa.pontoSituacao != "Concluido"){
                countAcabar++;
            } else if(tarefa.pontoSituacao == "Em desenvolvimento"){
                countProgresso++;
            } else if(tarefa.pontoSituacao == "Por fazer"){
                countNovas++;
            } else if(tarefa.pontoSituacao == "Concluido" && dataConc == Date){
                countConcluidas++;
            }
        }
    });
  return (
    <div className="resumo">
        {/* Prazos a acabar */}
        <div className="resumoItemPrazo">
            <div className="resumoCirclePrazo">
                <FontAwesomeIcon icon={["fas","clock"]} className="resumoIconCircle Prazo" />
            </div>
            <span className="resumoNumber Prazo">{countAcabar}</span>
            <div className="resumoTaskTitle Prazo">Prazos a acabar</div>
        </div>
        {/* Tarefas em progresso */}
        <div className="resumoItemProgresso">
            <div className="resumoCircleProgresso">
                <FontAwesomeIcon icon={["fas","spinner"]} className="resumoIconCircle Progresso" />
            </div>
            <span className="resumoNumber Progresso">{countProgresso}</span>
            <div className="resumoTaskTitle Progresso">Em progresso</div>
        </div>
        {/* Novas tarefas */}
        <div className="resumoItemNovas">
            <div className="resumoCircleNovas">
                <FontAwesomeIcon icon={["fas","star"]} className="resumoIconCircle Novas" />
            </div>
            <span className="resumoNumber Novas">{countNovas}</span>
            <div className="resumoTaskTitle Novas">Novas tarefas</div>
        </div>
        {/* Tarefas terminadas hoje */}
        <div className="resumoItemTerminadas">
            <div className="resumoCircleTerminadas">
                <FontAwesomeIcon icon={["fas","check"]} className="resumoIconCircle Terminadas" />
            </div>
            <span className="resumoNumber Terminadas">{countConcluidas}</span>
            <div className="resumoTaskTitle Terminadas">Terminadas hoje</div>
        </div>
    </div>
  )
}
}
export default Resumo;