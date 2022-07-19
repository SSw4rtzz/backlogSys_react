import React from 'react';
import "./widgetDir.css";
import Moment from 'moment';


// Recebe os dados das Tarefas a partir da API
async function getTarefas() {
  
    let dados = await fetch("/api/TarefasAPI/29");
        if (!dados.ok){
        console.error(dados)
        throw new Error("Erro ao carregar a API, codigo: " + dados.status)
        }
        return await dados.json(); //Exporta os dados recebidos da API
    }
    

class WidgetDir extends React.Component {
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

    render() {
    const{tarefas} = this.state;

    const dataCri = Moment(tarefas.dataCriacao).format('DD MMM YYYY');

    return (
        <div className="widgetDir">
            <span className="widgetDirTitle">Ultimas alterações</span>
            <table className="widgetDirTable">
                <tbody>
                <tr className="widgetDirTr">
                    <th className="widgetDirTh">Tarefa</th>
                    <th className="widgetDirTh">Pessoa</th>
                    <th className="widgetDirTh">Data</th>
                    <th className="widgetDirTh">Estado</th>
                </tr>
                <tr className="widgetDirTr">
                    <td className="widgetDirTarefa">
                    <span className="widgetDirTarefa">{tarefas.titulo}</span>
                    </td>
                    <td className="widgetDirPessoa">
                        <span className="widgetDirUser">Maria Silva</span>
                    </td>
                    <td className="widgetDirDate">
                        <span className="widgetDirDate">{dataCri}</span>
                    </td>
                    <td className="widgetDirStatus">
                        <span className="widgetDirStatus">{tarefas.pontoSituacao}</span>
                    </td>
                </tr>
                
                </tbody>
            </table>
        </div>
    )
}
}
export default WidgetDir
