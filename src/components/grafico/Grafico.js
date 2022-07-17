/* Framework usada Recharts */

import "./grafico.css"
import React from 'react';
import { ComposedChart, Area, Line, Legend, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const listaMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const data = new Date();
var mesAtual = listaMeses[data.getMonth()];
var mesAnt1, mesAnt2, mesAnt3;

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


export default function Grafico() {

    const data = [
        {
            mes: mesAnt3,          /* Dados relativos a 3 meses a trás */   
            "Desempenho pessoal": 12,           /* AUTOMATIZAR */
            "Desempenho da equipa": 30,           /* AUTOMATIZAR */
        },
        {
            mes: mesAnt2,          /* Dados relativos a 2 meses a trás */
            "Desempenho pessoal": 20,           /* AUTOMATIZAR */
            "Desempenho da equipa": 35,
        },
        {
            mes: mesAnt1,          /* Dados relativos ao mês anterior */
            "Desempenho pessoal": 6,           /* AUTOMATIZAR */
            "Desempenho da equipa": 40,
        },
        {
            mes: mesAtual,         /* Dados relativos ao mês atual */
            "Desempenho pessoal": 2,           /* AUTOMATIZAR */
            "Desempenho da equipa": 10,
        },
        ]; 

  return (
        <ResponsiveContainer width="74%" aspect={4/1} height="100%">
            <ComposedChart data={data}>
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
