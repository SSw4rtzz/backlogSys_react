import "./list.css"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import DadosTabela from "../../components/dadosTabela/DadosTabela"

const List = () => {
  return (
    <div className="list">
      <Menu/>
      <div className="listContainer">
        <Topbar/>
        <DadosTabela/>
      </div>
    </div>
  )
}


export default List;
