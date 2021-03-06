import "./dadosMembros.css";
import {DataGrid} from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import {Link, useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

// Cabeçalho da tabela
const columns = [
    {field: "id", headerName: "ID", width: 60},
    {field: "nome", headerName: "Nome", width: 200, editable: true }, //Possibilidade de edição na própria tabela
    {field: "email", headerName: "Email", width: 250, editable: true}, //Possibilidade de edição
    {field: "efetividade", headerName: "Efetividade", width: 170, sortable: false, filterable: false},
    {field: "foto", headerName: "Foto", width: 100,
        renderCell: (params) => {return(
            <Avatar src={'../Fotos/' + params.value} variant="rounded" />
        )}},
    {field: "nomeEquipa", headerName: "Equipa", width: 150},
]

async function DeleteMembro(id){
    let formData = new FormData();
    formData.append("id", id);
    let response = await fetch("/api/MembrosAPI/" + id, {
        method: "DELETE",
        body: formData
    });
    if(!response.ok){
        console.error(response);
        throw new Error("Erro ao apagar o utilizador, codigo: " + response.status);
    }
}

const DadosMembros = () => {

    const [tableData, setTableData] = useState([])

    //Dados da API
    useEffect(() => {
        fetch("api/MembrosAPI/")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    }, [])

    console.log(tableData)  //Debug

    //Apaga linha/dado
    const handleDelete = (id) => {
        try{
            DeleteMembro(id);
            setTableData(tableData.filter((item) => item.id !== id));
        } catch (error){
            console.error("Ocorreu um erro ao tentar apagar o animal");
        }
    };

    //Mostra um membro individual navegando para o link /equipa/(id do membro selecionado)
    const navigate = useNavigate();
    const routeChange = (id) => {
        navigate('/equipa/'.concat(id));
    };

    //Coluna de opções, Ver e Apagar
    const optionColumn = [
        {
            field: "option",
            headerName: "Opções",
            width: 100,
            sortable: false,
            hideable: false,
            filterable: false,
            disableColumnMenu: true,
            
            renderCell: (params) => {
                return (
                    <div className="cellOption">
                        <div className="viewButton" onClick={() => routeChange(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","eye"]} className="viewButton" />
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
        <div className="dadosMembros">
            <div className="dadosMembrosTitle">
                Utilizadores  
            </div>
            <DataGrid className="dataGrid"
                columns={columns.concat(optionColumn)}
                rows={tableData}
                autoPageSize={true}
                rowsPerPageOptions={[10]}             
            />
        </div>
    );
            
};

export default DadosMembros;