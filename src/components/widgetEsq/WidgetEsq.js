import "./widgetEsq.css"

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
