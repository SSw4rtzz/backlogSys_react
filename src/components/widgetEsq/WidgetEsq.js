import "./widgetEsq.css"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

export default function WidgetEsq() {
    return (
      <div className="widgetEsq">
        <span className="widgetEsqTitle">Membros</span>
        <ul className="widgetEsqList">
            <li className="widgetEsqListItem">
                <img src={process.env.PUBLIC_URL + "avatars/admin.jpg"} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">Nome Pessoa</span>
                    <span className="widgetEsqUserTitle">DevOps</span>
                </div>
            </li>
            <li className="widgetEsqListItem">
                <img src={process.env.PUBLIC_URL + "avatars/admin.jpg"} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">Nome Pessoa</span>
                    <span className="widgetEsqUserTitle">DevOps</span>
                </div>
            </li>
            <li className="widgetEsqListItem">
                <img src={process.env.PUBLIC_URL + "avatars/admin.jpg"} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">Nome Pessoa</span>
                    <span className="widgetEsqUserTitle">DevOps</span>
                </div>
            </li>
            <li className="widgetEsqListItem">
                <img src={process.env.PUBLIC_URL + "avatars/admin.jpg"} alt="" className="widgetEsqImg"/>
                <div className="widgetEsqUser">
                    <span className="widgetEsqUsername">Nome Pessoa</span>
                    <span className="widgetEsqUserTitle">DevOps</span>
                </div>
            </li>
        </ul>
      </div>
    )
}
