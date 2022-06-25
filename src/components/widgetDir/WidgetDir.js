import "./widgetDir.css"

export default function WidgetDir() {
    return (
        <div className="widgetDir">
            <span className="widgetDirTitle">Ultimas alterações</span>
            <table className="widgetDirTable">
                <tr className="widgetDirTr">
                    <th className="widgetDirTh">Tarefa</th>
                    <th className="widgetDirTh">Pessoa</th>
                    <th className="widgetDirTh">Data</th>
                    <th className="widgetDirTh">Estado</th>
                </tr>
                <tr className="widgetDirTr">
                    <td className="widgetDirTarefa">
                    <span className="widgetDirTarefa">Lorem</span>
                    </td>
                    <td className="widgetDirPessoa">
                        <span className="widgetDirUser">User</span>
                    </td>
                    <td className="widgetDirDate">
                        <span className="widgetDirDate">22 de Julho 2022</span>
                    </td>
                    <td className="widgetDirStatus">
                        <span className="widgetDirStatus">Em desenvolvimento</span>
                    </td>
                </tr>
                <tr className="widgetDirTr">
                    <td className="widgetDirTarefa">
                    <span className="widgetDirTarefa">Lorem</span>
                    </td>
                    <td className="widgetDirPessoa">
                        <span className="widgetDirUser">User2</span>
                    </td>
                    <td className="widgetDirDate">
                        <span className="widgetDirDate">26 de Julho 2022</span>
                    </td>
                    <td className="widgetDirStatus">
                        <span className="widgetDirStatus">Por fazer</span>
                    </td>
                </tr>
            </table>
        </div>
    )
}
