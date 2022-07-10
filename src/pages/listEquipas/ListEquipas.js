import "./listEquipas.css"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"
import DadosEquipas from "../../components/dadosEquipas/DadosEquipas"

const ListEquipas = () => {
  return (
    <div className="list">
      <Menu/>
      <div className="listContainer">
        <Topbar/>
        <DadosEquipas/>
      </div>
    </div>
  )
}

export default ListEquipas;
