export const tarefaColumns = [
    {
        field: "id",
        headerName: "ID",
        width: 60,
    },
    {
        field: "titulo", // nome da coluna
        headerName: "Nome", // nome da coluna
        width: 200, // largura da coluna
        editable: true
    },
    {
        field: "pontoSituacao",
        headerName: "Ponto de Situacao",
        width: 145,
        editable: true,
        renderCell: (params) => {
            return (
                <div className={`cellWithStatus ${params.row.pontoSituacao}`}>
                    {params.row.pontoSituacao}
                </div>
            );
        }  
    },
    {
        field: "membros",
        headerName: "Membros",
        width: 170,
        sortable: false,
        filterable: false,
    },
    {
        field: "dataCriacao",
        headerName: "Criação",
        width: 100,
    },
    {
        field: "dataConclusao",
        headerName: "Concluido",
        width: 100,
    },
    {
        field: "prazo",
        headerName: "Prazo",
        width: 100,
    },
    {
        field: "prioridade",
        headerName: "Prioridade",
        width: 100,
        renderCell: (params) => {
            return (
                <div className={`cellWithPriorities ${params.row.prioridade}`}>
                    {params.row.prioridade}
                </div>
            );
        }
    },
]

//Teste
export const tarefaRows = [
    {
        id: 1,
        titulo: "Tarefa 1",
        descricao: "Descrição da tarefa 1",
        pontoSituacao: "Pendente",
        membros: "Ruben, Jorge, Maria",
        dataCriacao: "2022/03/01",
        prazo: "01/01/2022",
        dataConclusao: null,
        prioridade: "Baixa",
    },
    {
        id: 2,
        titulo: "Tarefa 2",
        descricao: "Descrição da tarefa 2",
        pontoSituacao: "Por Fazer",
        membros: "Ruben",
        dataCriacao: "2020/01/05",
        prazo: "01/01/2020",
        dataConclusao: null,
        prioridade: "Média",
    },
    {
        id: 3,
        titulo: "Tarefa 3",
        descricao: "Descrição da tarefa 3",
        pontoSituacao: "Concluido",
        membros: "Ruben",
        dataCriacao: "2022/02/01",
        prazo: "01/01/2020",
        dataConclusao: "02/02/2022",
        prioridade: "Alta",
    },
    {
        id: 4,
        titulo: "Tarefa 4",
        descricao: "Descrição da tarefa 4",
        pontoSituacao: "Em Progresso",
        membros: "Ruben",
        dataCriacao: "2020/01/01",
        prazo: "01/03/2022",
        dataConclusao: null,
        prioridade: null,
    },
    {
        id: 5,
        titulo: "Tarefa 5",
        descricao: "Descrição da tarefa 5",
        pontoSituacao: "Por Fazer",
        membros: "Teste",
        dataCriacao: "2022/08/03",
        prazo: "02/10/2022",
        dataConclusao: null,
        prioridade: null,
    },
    {
        id: 6,
        titulo: "Tarefa 6",
        descricao: "Descrição da tarefa 6",
        pontoSituacao: "Em Progresso",
        membros: "Laura",
        dataCriacao: "2022/01/08",
        prazo: "01/03/2022",
        dataConclusao: null,
        prioridade: "Baixa",
    },
    {
        id: 7,
        titulo: "Tarefa 7",
        descricao: "Descrição da tarefa 7",
        pontoSituacao: "Por Fazer",
        membros: "Ruben",
        dataCriacao: "2020/01/30",
        prazo: "01/03/2022",
        dataConclusao: null,
        prioridade: "Alta",
    },
];