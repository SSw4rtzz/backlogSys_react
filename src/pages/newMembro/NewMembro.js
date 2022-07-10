import "./newMembro.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";

const NewMembro = ({inputs, title}) => {
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
                <label>Nome da membro: </label>
                <input type="text" placeholder="Nome"/>
              </div>  
              <div className="formInput">
                <label>Email: </label>
                <input type="text" placeholder="Email"/>
              </div>
              <div className="formInput">
                <label>Efetividade: </label>
                <input type="text" placeholder="Efetividade"/>
              </div>
              <div className="formInput">
                <label>Foto: </label>
                <input type="text" placeholder="Foto"/>
              </div>
              <div className="formInput">
                <label>Equipa: </label>
                <input type="text" placeholder="Equipa"/>
              </div>

              <button>Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMembro;