import "./single.css";
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"

const Single = () => {
  return (
    <div className="single">
      <Menu/>
      <div className="singleContainer">
        <Topbar/>
        <div className="details">
          <h1 className="itemTitle">Tarefa 1</h1>
          <div className="detailItem">
            <span className="itemKey">ID:</span>
            <span className="itemValue">1</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Descrição:</span>
            <span className="itemValue">Descrição 1</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Membros:</span>
            <span className="itemValue">Ruben</span>
            <span className="itemValue">Jorge</span>
            <span className="itemValue">Maria</span>
          <div className="detailItem">
            <span className="itemKey">Data de Criação:</span>
            <span className="itemValue">2022/03/01</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Data de Concluido:</span>
            <span className="itemValue">Por Concluir</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Prazo:</span>
            <span className="itemValue">01/01/2022</span>
          </div>
          <div className="detailItem">
            <span className="itemKey">Prioridade:</span>
            <span className="itemValue">Baixa</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Single;
