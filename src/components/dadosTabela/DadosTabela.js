import "./dadosTabela.css";
import {DataGrid} from "@mui/x-data-grid";
import {tarefaColumns, tarefaRows} from "../../fonteDadosTabela";
import {Link} from "react-router-dom";
import { useState } from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

const DadosTabela = () => {

    const [data, setData] = useState(tarefaRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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
                        <Link to="/tarefas/test" style={{ textDecoration: "none" }}>
                            <FontAwesomeIcon icon={["fas","eye"]} className="viewButton" />
                        </Link>
                        <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
                            <FontAwesomeIcon icon={["fas","trash"]} />
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="dadosTabela">
            <div className="dadosTabelaTitle">
                Adicionar uma tarefa
                <Link to="/tarefas/new" className="link">
                   Adicionar
                </Link>
            </div>
            <DataGrid className="dataGrid"
                columns={tarefaColumns.concat(optionColumn)}
                rows={data}
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

export default DadosTabela;