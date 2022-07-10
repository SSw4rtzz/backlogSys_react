import "./newEquipa.css";
import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";

const NewEquipa = ({inputs, title}) => {
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
                <label>Nome da equipa: </label>
                <input type="text" placeholder="Nome"/>
              </div>  
              <div className="formInput">
                <label>Email: </label>
                <input type="text" placeholder="Email"/>
              </div>
              <div className="formInput">
                <label>Team Leader: </label>
                <input type="text" placeholder="Team Leader"/>
              </div>
              <div className="formInput">
                <label>Chefe: </label>
                <input type="text" placeholder="Chefe"/>
              </div>

              <button>Adicionar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewEquipa;