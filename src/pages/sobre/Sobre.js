import "./sobre.css"
import Menu from "../../components/menu/Menu"
import Topbar from "../../components/topbar/Topbar"

const creditos = () => {
  return (

  <div className="sobre">
    <Menu/>
    <div className="inicioContainer"> 
    <Topbar/>
      <h1 className="tituloSobre">BacklogSys</h1>
      <div className="observacoes">
        <h3>Observações:</h3>
        <p>Esta aplicação foi desenvolvida no ambito da unidade curricular Desenvolvimento Web, esta deverá servir como projeto final à UC mencionada, para o ano letivo 2021/2022</p>
        <p>A aplicação é composta por duas componentes, uma que é corrida do lado do servidor e uma que corre do lado do cliente.
          A aplicação "lado servidor" está escrita em C# e desenvolvida em Visual Studio, tem as suas funcionalidades de criação de membros/equipas/tarefas independentes, ou seja, apesar de estar a servir como API para a
          compente React, pode perfeitamente servir como uma aplicação independente. A aplicação não é tão <i>user friendly</i> pois com medo de não conseguir acabar o desenvolvimento de ambas as
          aplicações em termos de funcionalidades pedidas pelo Professor, não consegui dedicar mais tempo que o já dedicado. Gostei imenso de trabalhar com o C# e espero conseguir mudar esta frase entretanto.
          <br/>
          A componente React (esta), é corrida do lado do cliente, isto permite atualizar só a informação necessária sempre que é introduzido ou requisitado algum dado pelo utilizador.
          Nesta componente, a que mais gostei de trabalhar, entusiasmei-me com a personalização e acabei a perder muito tempo com ela, isto, junto com as grandes dificuldades em
          colocar a API a funcionar no React, colocou-me numa situação de corrida contra o tempo, impossibilitando-me o desenvolvimento de todas as funcionalidades por mim
          idializadas no inicio, acabando portanto por ficar muito à quem da minha espetativa.
        </p>
        </div>

        <ul className='dadosAluno'>
            <li><b>Nome:</b> Ruben Anastácio</li>
            <li><b>Numero:</b> 20965</li>
            <li><b>Curso:</b> Engenharia Informática</li>
        </ul>

      <div className='frameworks'>
        <h3>Frameworks utilizadas: </h3>
        <ul>
          <li className="detailFramework"><b>Material-UI</b>, ajudou-me na criação de uma tabela mais <i>user friendly</i>, optei pelo uso desta framework no projeto
          pois já tinha um minimo conhecimento na mesma e achei que seria um bom complemento ao projeto de forma a ter uma interface
          mais bonita e perder o minimo tempo de personalização nesta componente, ganhando tempo para adicionar novas funcionalidades.</li>
          <br/><span className='tituloLink'>Link: </span><a className="linkSobre" href="https://mui.com/pt/" target="_blank">mui.com/pt/</a>
          <li className="detailFramework"><b>Rechart</b>, esta framework permitiu-me a criação de gráficos, não tinha conhecimento da mesma mas após uma breve pesquisa,
          pareceu-me a mais bonita e que mais se enquadra na aplicação.</li><br/>
          <span className='tituloLink'>Link: </span><a className="linkSobre" href="https://recharts.org/" target="_blank">recharts.org</a>
          

          <li className="detailFramework"><b>FontAwesome</b>, esta framework permitiu-me usar icons de forma mais simples.</li><br/>
          <span className='tituloLink'>Link: </span><a className="linkSobre" href="https://fontawesome.com/" target="_blank">fontawesome.com</a>


          <li className="detailFramework"><b>Moment</b>, esta framework permitiu personalizar a data da forma pretendida em contexto react</li><br/>
          <span className='tituloLink'>Link: </span><a className="linkSobre" href="https://momentjs.com/" target="_blank">momentjs.com</a>
        </ul>
      </div>
    </div>
  </div>

     
  )
}

export default creditos;