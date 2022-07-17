import "./dadosTarefas.css";
import {DataGrid} from "@mui/x-data-grid";
import {Link, useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// Cabeçalho da tabela
const columns = [
    {field: "id", headerName: "ID", width: 60},
    {field: "titulo", headerName: "Nome", width: 200, editable: true }, //Possibilidade de edição na própria tabela
    {field: "pontoSituacao", headerName: "Ponto de Situacao", width: 155, editable: true, //Possibilidade de edição
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.pontoSituacao}`}>
                    {params.row.pontoSituacao}
                </div>
            );
        }  
    },
    {field: "membrosFK", headerName: "Membros", width: 80, sortable: false, filterable: false},
    {field: "dataCriacao", headerName: "Criação", width: 120},
    {field: "dataConclusao", headerName: "Concluido", width: 140},
    {field: "prazo", headerName: "Prazo", width: 140},
    {field: "prioridade", headerName: "Prioridade", width: 90,
        renderCell: (params) => {
            return (
                <div className={`cellWithPriorities ${params.row.prioridade}`}>
                    {params.row.prioridade}
                </div>
            );
        }
    },
]

async function DeleteTarefa(id){
    let formData = new FormData();
    formData.append("id", id);
    let response = await fetch("/api/TarefasAPI/" + id, {
        method: "DELETE",
        body: formData
    });
    if(!response.ok){
        console.error(response);
        throw new Error("Erro ao apagar a tarefa, codigo: " + response.status);
    }
}


const DadosTarefas = () => {

    const [tableData, setTableData] = useState([])

    //Dados da API
    useEffect(() => {
        fetch("api/TarefasAPI/")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    }, [])

    console.log(tableData)  //Debug

    //Apaga linha/dado
    const handleDelete = (id) => {
        try{
            DeleteTarefa(id);
            setTableData(tableData.filter((item) => item.id !== id));
        } catch (error){
            console.error("Ocorreu um erro ao tentar apagar o animal");
        }
    };

    //Mostra uma tarefa individual navegando para o link /tarefas/(id da tarefa selecionada)
    const navigate = useNavigate();
    const routeChangeView = (id) => {
        navigate('/tarefas/'.concat(id));
    };
    const routeChangeEdit = (id) => {
        navigate('/tarefas/edit/'.concat(id));
    };

    //Coluna de opções, Ver e Apagar
    const optionColumn = [
        {
            field: "option",
            headerName: "Opções",
            width: 120,
            sortable: false,
            hideable: false,
            filterable: false,
            disableColumnMenu: true,
            
            renderCell: (params) => {
                return (
                    <div className="cellOptionTarefas">
                        <div className="viewButton" onClick={() => routeChangeView(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","eye"]} className="viewButton" />
                        </div>
                        <div className="viewButton" onClick={() => routeChangeEdit(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","pen"]} className="viewButton" />
                        </div>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","trash"]} />
                        </div>
                    </div>
                );
            },
        },
    ];



    return (
        <div className="dadosTarefas">
            <div className="dadosTarefasTitle">
                Adicionar uma tarefa     
                <Link to="/tarefas/new" className="link">
                   Adicionar
                </Link>
            </div>
            <DataGrid className="dataGrid"
                columns={columns.concat(optionColumn)}
                rows={tableData}
                autoPageSize={true}
                rowsPerPageOptions={[10]}
                initialState={{
                    sorting:{
                        sortModel:[
                            {field:'dataCriacao',sort:'desc'},
                        ],
                    },
                }}                
            />
        </div>
    );
            
};

export default DadosTarefas;