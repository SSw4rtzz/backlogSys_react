import "./list.css"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import DadosTarefas from "../../components/dadosTarefas/dadosTarefas"

const ListTarefas = () => {
  return (
    <div className="list">
      <Menu/>
      <div className="listContainer">
        <Topbar/>
        <DadosTarefas/>
      </div>
    </div>
  )
}

export default ListTarefas;
