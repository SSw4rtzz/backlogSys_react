import "./listMembros.css"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import DadosMembros from "../../components/dadosMembros/DadosMembros"

const ListMembros = () => {
  return (
    <div className="list">
      <Menu/>
      <div className="listContainer">
        <Topbar/>
        <DadosMembros/>
      </div>
    </div>
  )
}

export default ListMembros;
