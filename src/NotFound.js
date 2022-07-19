import React from 'react';
import {Link} from 'react-router-dom';


class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>Página não encontrada</p>
        <p><Link to="/">Voltar</Link></p>
      </div>
    );
  }
}
export default NotFound;