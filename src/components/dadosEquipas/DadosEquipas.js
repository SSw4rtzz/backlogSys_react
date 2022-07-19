import "./dadosEquipas.css";
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
    {field: "nome", headerName: "Nome", width: 200, editable: true }, //Possibilidade de edição na própria tabela
    {field: "email", headerName: "Email", width: 250, editable: true}, //Possibilidade de edição
    {field: "teamLeader", headerName: "Team Leader", width: 170, sortable: false, filterable: false},
    {field: "chefe", headerName: "Chefe", width: 100},
]

async function DeleteEquipa(id){
    let formData = new FormData();
    formData.append("id", id);
    let response = await fetch("/api/EquipaAPI/" + id, {
        method: "DELETE",
        body: formData
    });
    if(!response.ok){
        console.error(response);
        throw new Error("Erro ao apagar a tarefa, codigo: " + response.status);
    }
}

const DadosEquipas = () => {

    const [tableData, setTableData] = useState([])

    //Dados da API
    useEffect(() => {
        fetch("api/EquipaAPI/")
        .then((data) => data.json())
        .then((data) => setTableData(data))
    }, [])

    console.log(tableData)  //Debug 2

    //Apaga linha/dado
    const handleDelete = (id) => {
        try{
            DeleteEquipa(id);
            setTableData(tableData.filter((item) => item.id !== id));
        } catch (error){
            console.error("Ocorreu um erro ao tentar apagar o animal");
        }
    };

    //Mostra a equipa individual navegando para o link /gerirEquipas/(id selecionado)
    const navigate = useNavigate();
    const routeChangeView = (id) => {
        navigate('/gerirEquipas/'.concat(id));
    };
    const routeChangeEdit = (id) => {
        navigate('/gerirEquipas/edit/'.concat(id));
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
                    <div className="cellOption">
                        <div className="viewButton" onClick={() => routeChangeView(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","eye"]} />
                        </div>
                        <div className="viewButton" onClick={() => routeChangeEdit(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","pen"]} />
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
        <div className="dadosEquipas">
            <div className="dadosEquipasTitle">
                Equipas
                <div className="linksAdm">
                <Link to="/gerirEquipas/new" className="linkEquipa">
                   Adicionar Equipa
                </Link>
                <Link to="/equipa/new" className="linkUtilizador">
                   Adicionar Utilizador
                </Link>
                </div>
            </div>
            {/* Tabela criada com framework DataGrid */}
            <DataGrid className="dataGrid"
                columns={columns.concat(optionColumn)}
                rows={tableData}
                autoPageSize={true}
                rowsPerPageOptions={[10]}             
            />
        </div>
    );
            
};

export default DadosEquipas;