import "./inicio.css"
import Resumo from "../../components/resumo/Resumo"
import Grafico from "../../components/grafico/Grafico"

export default function Inicio(){
    return (
        <div className="inicio">
            <h2>Olá, Ruben</h2> {/* Colocar nome da pessoa */}
            <Resumo/>
            <Grafico/>
        </div>
    )
}