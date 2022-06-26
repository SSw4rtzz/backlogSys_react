import "./inicio.css"
import Resumo from "../../components/resumo/Resumo"
import Grafico from "../../components/grafico/Grafico"
import GraficoPie from "../../components/grafico/GraficoPie"
import WidgetEsq from "../../components/widgetEsq/WidgetEsq"
import WidgetDir from "../../components/widgetDir/WidgetDir"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"

const Inicio = () => {
    return (
    <div className="inicio">
        <Menu/>
        <div className="inicioContainer"> 
        <Topbar/>
            <h2>Olá, Ruben</h2> {/* Colocar nome da pessoa */}
            <Resumo/>
            <div className="grafico">
                <Grafico/>
                <GraficoPie/>
            </div>
            <div className="widgetsInicio">
                <WidgetEsq/>
                <WidgetDir/>
            </div>
        </div>
    </div>
    )
}

export default Inicio
