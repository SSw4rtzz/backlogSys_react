import "./inicio.css"
import Resumo from "../../components/resumo/Resumo"
import Grafico from "../../components/grafico/Grafico"
import GraficoPie from "../../components/grafico/GraficoPie"

export default function Inicio(){
    return (
        <div className="inicio">
            <h2>Olá, Ruben</h2> {/* Colocar nome da pessoa */}
            <Resumo/>
            <div className="grafico">
            <Grafico/>
            <GraficoPie/>
            </div>
        </div>
    )
}