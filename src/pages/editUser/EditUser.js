import Menu from "../../components/menu/Menu";
import Topbar from "../../components/topbar/Topbar";
import { NavLink } from "react-router-dom"
import React from "react";


async function getMembros() {
  //Corta o url de forma a fica só com o ultimo numero apresentado, que representa o id da tarefa
  var idURL = window.location.pathname;
  idURL = idURL.split("/")[3];

  console.log(idURL);
  
  let dados = await fetch("/api/MembrosAPI/".concat(idURL));
  
    if (!dados.ok){
      console.error(dados)
      throw new Error("Erro ao carregar a API, codigo: " + dados.status)
    }
  
    return await dados.json(); //Exporta os dados recebidos da API
  }


  

class EditUser extends React.Component{

  //Cria referencias para os inputs, foi usado este metodo pois com o onChange() quando o utilizador não utiliza o input, o valor não é enviado
  constructor(props){
    super(props);
    this.id = React.createRef();
    this.nome = React.createRef();
    this.email = React.createRef();
    this.efetividade = React.createRef();
    this.foto = React.createRef();
    this.equipaFK = React.createRef();
  }

    /*novoMembro={
      foto: null,
    }
    state = this.novoMembro;*/

  state = {
    user: [],
  }
  
  
  componentDidMount() {
    this.LoadMembro();
  }

  async LoadMembro(){
    try{
      let dadosMembro = await getMembros();
      this.setState({user: dadosMembro})

    } catch(erro){
      console.error(erro)
    }
  }


  //Recolhe a fotografia do membro para o state
  handleFotoMembro = (e) => {
    this.setState({foto: e.target.files[0]});
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    let dadosForm = {
      id: this.id.current.value,
      nome: this.nome.current.value,
      email: this.email.current.value,
      efetividade: this.efetividade.current.value,
      foto: this.foto.current.value,
      equipaFK: this.equipaFK.current.value,
    }
    this.props.dadosOut(dadosForm);
  }


  render(){
  const{user} = this.state;
  return (
    <div className="new">
      <Menu />
      <div className="newContainer">
        <Topbar />
        <div className="top">
          <h1>Editar os meus dados</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form method="Post" onSubmit={this.handleFormSubmit}>
            <div className="formInput">
                <label>Numero Empregado: </label>
                <input disabled="disabled" ref={this.id} type="number" placeholder="Id" name="id" defaultValue={user.id}/>
              </div>  
              <div className="formInput">
                <label>Nome: </label>
                <input ref={this.nome} type="text" placeholder="Primeiro e Ultimo" name="nome" defaultValue={user.nome}/>
              </div>  
              <div className="formInput">
                <label>Email: </label>
                <input ref={this.email} type="email" placeholder="Email" name="email" defaultValue={user.email}/>
              </div>

              <div className="formInput">
                <label>Efetividade: </label>
                <select ref={this.efetividade} type="text" placeholder="Efetividade" name="efetividade" defaultValue={user.efetividade}>
                  <option value="Sim">Contratado/Efetivo</option>
                  <option value="Não">Estagiário</option>
                </select>
              </div>
              <div className="formInputFoto">
                <label>Foto: </label>
                <input disabled ref={this.foto} type="text" name="foto" defaultValue={user.foto}/>
              </div>
              {/*<div className="formInput">
                <label>Foto: </label>
                <input type="file" name="foto" accept=".jpg,.png" onChange={this.handleFotoMembro}/>
              </div>*/}
              <div className="formInput">
                <label>Equipa: </label>
                <input ref={this.equipaFK} type="number" placeholder="Equipa" name="equipa" defaultValue={user.equipaFK}/>
              </div>
              <input type="submit" value="Adicionar"/>
            </form>
          </div>
          <NavLink to={"/user/".concat(user.id)} style={{textDecoration:"none"}} className="" activeclassname="active">
            Voltar
          </NavLink>
        </div>
      </div>
    </div>
  );
  }
};

export default EditUser;