import "./grafico.css"
import React, { PureComponent } from 'react';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const listaMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const data = new Date();
var mesAtual = listaMeses[data.getMonth()];

if (mesAtual == "Janeiro"){
    var mesAnt1 = listaMeses[11];
    var mesAnt2 = listaMeses[10];
    var mesAnt3 = listaMeses[9];
} else if(mesAtual == "Fevereiro"){
    var mesAnt1 = listaMeses[data.getMonth()-1];
    var mesAnt2 = listaMeses[11];
    var mesAnt3 = listaMeses[10];
} else if(mesAtual == "Março"){
    var mesAnt1 = listaMeses[data.getMonth()-1];
    var mesAnt2 = listaMeses[data.getMonth()-2];
    var mesAnt3 = listaMeses[11];
} else {
    var mesAnt1 = listaMeses[data.getMonth()-1];
    var mesAnt2 = listaMeses[data.getMonth()-2];
    var mesAnt3 = listaMeses[data.getMonth()-3];
}


export default function Grafico() {

    const data = [
        {
            name: mesAnt3,          /* Dados relativos a 3 meses a trás */   
            "Tarefas fechadas": 12,           /* AUTOMATIZAR */
            "Desempenho equipa": 30,           /* AUTOMATIZAR */
        },
        {
            name: mesAnt2,          /* Dados relativos a 2 meses a trás */
            "Tarefas fechadas": 20,           /* AUTOMATIZAR */
            "Desempenho equipa": 35,
        },
        {
            name: mesAnt1,          /* Dados relativos ao mês anterior */
            "Tarefas fechadas": 6,           /* AUTOMATIZAR */
            "Desempenho equipa": 40,
        },
        {
            name: mesAtual,         /* Dados relativos ao mês atual */
            "Tarefas fechadas": 2,           /* AUTOMATIZAR */
            "Desempenho equipa": 10,
        },
        ]; 

  return (
    <div className="grafico">
        <ResponsiveContainer width="100%" aspect={4/1} height="100%">
            <ComposedChart data={data}>

            <defs>
                <linearGradient id="corGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="45%" stopColor="#d4d3d3" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="#d4d3d3" stopOpacity={0}/>
                </linearGradient>
            </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Tarefas fechadas" stroke="#d4d3d3" fill="url(#corGradient)" />
                <Line type="monotone" dataKey="Desempenho equipa" dot={false} stroke="#d4d3d3" />

            </ComposedChart>

        </ResponsiveContainer>
    </div>
  )
}
