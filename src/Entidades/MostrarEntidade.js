/*
 *this component shows the user selected on the list in Listaentidade. This displays the database
 *in the same form used to register and updating, but the fields are disabled so the user cannot do
 *anything with it.
*/
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const MostrarEntidade = props => {

  const [entidade, setEntidade] = useState(props.location.state.detail)

  /*
   *A hook used to push a route to the router. Kind like a redirect, but this does not re-render the page.
  */
  const history = useHistory()

  return (
    <div className="container mt-4">
      <Link to="/" className="btn">Voltar</Link>
			<div className="row justify-content-center">

				<div className="col-lg-6 mt-4">
					<div className="card form">
						<div className="card-body">
							<h5 className="card-title">Informações da entidade</h5>

							<form>
              <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Nome</label>
                    <input disabled
                      type="text"
                      name="nome"
                      className="form-control"
                      id="nome"
                      placeholder="Nome"
                      value={entidade.nome}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Data</label>
                    <input disabled
                      type="text"
                      pattern="\d{1,2}/\d{1,2}/\d{4}"
                      name="data"
                      className="form-control"
                      id="data"
                      placeholder="dd/mm/aaaa"
                      value={entidade.data}
                    />
                  </div>
                </div>
                <button type="button" className="btn btn-primary" onClick={
                  () => history.push({
                          pathname: '/ListaEntidades'
                        })
                }>Voltar</button>
							</form>
						</div>
					</div>
  			</div>
      </div>
    </div>
  );
}

export default MostrarEntidade;
