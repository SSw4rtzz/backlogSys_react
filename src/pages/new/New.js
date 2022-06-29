import "./new.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";

const New = ({inputs, title}) => {
  return (
    <div className="new">
      <Menu />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              <div className="formInput">
                <label>Nome da tarefa: </label>
                <input type="text" placeholder="Nome"/>
              </div>  
              <div className="formInput">
                <label>Descrição: </label>
                <input type="text" placeholder="Descrição"/>
              </div>
              <div className="formInput">
                <label>Ponto de Situação: </label>
                <input type="text" placeholder="Ponto de Situação"/>
              </div>
              <div className="formInput">
                <label>Membros: </label>
                <input type="text" placeholder="Membros"/>
              </div>
              <div className="formInput">
                <label>Prazo: </label>
                <input type="text" placeholder="Prazo"/>
              </div>

              <button>Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;