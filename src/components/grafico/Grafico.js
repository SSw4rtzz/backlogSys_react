/* Framework usada Recharts */

import "./grafico.css"
import React from 'react';
import { ComposedChart, Area, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const listaMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const data = new Date();
var mesAtual = listaMeses[data.getMonth()];
var mesAnt1, mesAnt2, mesAnt3;

//Contorna possiveis erros nos meses, por exemplo quando o mes atual é Janeiro, o mes anterior é Dezembro
if (mesAtual === "Janeiro"){
    mesAnt1 = listaMeses[11];
    mesAnt2 = listaMeses[10];
    mesAnt3 = listaMeses[9];
} else if(mesAtual === "Fevereiro"){
    mesAnt1 = listaMeses[data.getMonth()-1];
    mesAnt2 = listaMeses[11];
    mesAnt3 = listaMeses[10];
} else if(mesAtual === "Março"){
    mesAnt1 = listaMeses[data.getMonth()-1];
    mesAnt2 = listaMeses[data.getMonth()-2];
    mesAnt3 = listaMeses[11];
} else {
    mesAnt1 = listaMeses[data.getMonth()-1];
    mesAnt2 = listaMeses[data.getMonth()-2];
    mesAnt3 = listaMeses[data.getMonth()-3];
}

var idUser = window.location.pathname;
idUser = idUser.split("/")[2];
if (idUser === undefined){
    idUser = "1";
}
// Recebe os dados das Tarefas a partir da API
async function getTarefas() {
  
    let dados = await fetch("/api/TarefasAPI/");
        if (!dados.ok){
        console.error(dados)
        throw new Error("Erro ao carregar a API, codigo: " + dados.status)
        }
        return await dados.json(); //Exporta os dados recebidos da API
    }


class Grafico extends React.Component {

    state = {
        tarefas: [],
      }

    componentDidMount() {
        this.LoadTarefas();
      }    

      //Carrega os dados da API das Tarefas
      async LoadTarefas(){
        try{
          let dadosTarefas = await getTarefas();
          this.setState({tarefas: dadosTarefas})
        } catch(erro){
          console.error(erro)
        }
      }  

render(){
    const{tarefas} = this.state;
    //Variáveis de contagem, armazenam o número de tarefas criadas no mês atual e nos passados
    var countAtual = 0, countAnt1 = 0, countAnt2 = 0, countAnt3 = 0;
    const ciclo = tarefas.map(tarefa => {
        const dataConc = new Date(tarefa.dataConclusao)
        if(tarefa.membrosFK == idUser){
            if(dataConc.getMonth() == data.getMonth()){
                countAtual++;
            } else if(dataConc.getMonth() == data.getMonth()-1){
                countAnt1++;
            } else if(dataConc.getMonth() == data.getMonth()-2){
                countAnt2++;
            } else if(dataConc.getMonth() == data.getMonth()-3){
                countAnt3++;
            }
        }
    });


    const dados = [
        {
            mes: mesAnt3,          /* Dados relativos a 3 meses a trás */   
            "Desempenho pessoal": countAnt3,           
            "Desempenho da equipa": 30,           
        },
        {
            mes: mesAnt2,          /* Dados relativos a 2 meses a trás */
            "Desempenho pessoal": countAnt2,           /* AUTOMATIZAR */
            "Desempenho da equipa": 35,
        },
        {
            mes: mesAnt1,          /* Dados relativos ao mês anterior */
            "Desempenho pessoal": countAnt1,           /* AUTOMATIZAR */
            "Desempenho da equipa": 40,
        },
        {
            mes: mesAtual,         /* Dados relativos ao mês atual */
            "Desempenho pessoal": countAtual,           /* AUTOMATIZAR */
            "Desempenho da equipa": 10,
        },
        ]; 

  return (
        <ResponsiveContainer width="74%" aspect={4/1} height="100%">
            <ComposedChart data={dados}>
            {/* Cor gradient do gráfico em Area (Desempenho pessoal) */}
            <defs>
                <linearGradient id="corGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="45%" stopColor="#d4d3d3" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#d4d3d3" stopOpacity={0}/>
                </linearGradient>
            </defs>
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip />
                <Legend iconType="plainline"/>
                {/* Gráfico Desempenho pessoal (Area) */}
                <Area type="monotone" dataKey="Desempenho pessoal" stroke="#a4a3a3" fill="url(#corGradient)" />
                {/* Gráfico Desempenho equipa (Line) */}
                <Line type="monotone" dataKey="Desempenho da equipa" dot={false} strokeWidth={2} stroke="#444444" />
            </ComposedChart>
        </ResponsiveContainer>
  );
}
}
export default Grafico;
