import "./resumo.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function Resumo() {
  return (
    <div className="resumo">
        {/* Prazos a acabar */}
        <div className="resumoItemPrazo">
            <div className="resumoCirclePrazo">
                <FontAwesomeIcon icon={["fas","clock"]} className="resumoIconCircle Prazo" />
            </div>
            <span className="resumoNumber Prazo">5</span>
            <div className="resumoTaskTitle Prazo">Prazos a acabar</div>
        </div>
        {/* Tarefas em progresso */}
        <div className="resumoItemProgresso">
            <div className="resumoCircleProgresso">
                <FontAwesomeIcon icon={["fas","spinner"]} className="resumoIconCircle Progresso" />
            </div>
            <span className="resumoNumber Progresso">3</span>
            <div className="resumoTaskTitle Progresso">Em progresso</div>
        </div>
        {/* Novas tarefas */}
        <div className="resumoItemNovas">
            <div className="resumoCircleNovas">
                <FontAwesomeIcon icon={["fas","star"]} className="resumoIconCircle Novas" />
            </div>
            <span className="resumoNumber Novas">8</span>
            <div className="resumoTaskTitle Novas">Novas tarefas</div>
        </div>
        {/* Tarefas terminadas hoje */}
        <div className="resumoItemTerminadas">
            <div className="resumoCircleTerminadas">
                <FontAwesomeIcon icon={["fas","check"]} className="resumoIconCircle Terminadas" />
            </div>
            <span className="resumoNumber Terminadas">5</span>
            <div className="resumoTaskTitle Terminadas">Terminadas hoje</div>
        </div>
    </div>
  )
}
