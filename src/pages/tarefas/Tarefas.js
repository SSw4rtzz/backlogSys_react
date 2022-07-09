import "./tarefas.css"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"



const Tarefas = () => {
  return (
    <div className="tarefas">
      <Menu/>
        <div className="tarefasContainer">
          <Topbar/>
          DataBase
        </div>
    </div>
  )
}

export default Tarefas;
