/*
 *This component is in charge of updating an entidade
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

const AtualizarEntidade = (props) => {

  /*
   *props contains a given entidade that was selected back at Listaentidade component,
   *so it's being created an state to the form from this entidade which gonna be uset to set
   *data in the input fields for updating.
  */
  const [entidade, setEntidade] = useState(props.location.state.detail)

  /*
   *Creating a state for the status of the data being submited.
   *this state will holde data necessary to display the state of submission to the user.
  */
  const status = { submit : false, status : '', message : ''}
  const [formStatus, setFormStatus] = useState(status)

  /*
   *A hook used to push a route to the router. Kind like a redirect, but this does not re-render the page.
  */
  const history = useHistory()

  /*
   *Handle the changes in the inputs so the data is set on the associate state
  */
  const handleInputChange = event => {
	   const { name, value } = event.target
	   setEntidade({ ...entidade, [name]: value })
	}

  /*
   *call to the api for updating the entidade, triggered by an onSubmit event from the form.
  */
  const updateEntidade = entidade => {
    Axios(
        {
          url: "http://localhost:8080/entidades/" + entidade.id,
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          data: entidade
        }
      )
    	.then(response => {
        if(response.status === 201 || response.status === 204){
            setFormStatus({
              submit : true,
              status : 'success',
              message: 'entidade(a) ' + entidade.nome + ' atualizado com sucesso'
            })
        }
    	})
    	.catch(error => {
        setFormStatus({
          submit : true,
          status : 'danger',
          message: 'Erro ao atualizar entidade'
        })
    	})
    	.then(() => {
    		// always executed
    	}
    )
	}

  return (
    <div className="container mt-4">
      <Link to="/" className="btn">Home</Link>
			<div className="row justify-content-center">

				<div className="col-lg-6 mt-4">
					<div className="card form">
						<div className="card-body">
							<h5 className="card-title">Atualizar entidade</h5>

							<form
                onSubmit={event => {
                  event.preventDefault()
                  if (!entidade.nome || !entidade.data) return
                  updateEntidade(entidade)
                }}
              >
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Nome</label>
                    <input
                      type="text"
                      name="nome"
                      className="form-control"
                      id="nome"
                      placeholder="Nome"
                      value={entidade.nome}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Data</label>
                    <input
                      type="text"
                      pattern="\d{1,2}/\d{1,2}/\d{4}"
                      name="data"
                      className="form-control"
                      id="data"
                      placeholder="dd/mm/aaaa"
                      value={entidade.data}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <button type="submit" id = "atualizarEntidade" className="btn btn-primary" value='submit'>
                  Atualize Entidade
                </button>
                &nbsp;
                <button type="button" className="btn btn-default" onClick={
                  () => history.push({
                          pathname: '/ListaEntidades'
                        })
                }>Voltar</button>
							</form>
						</div>
					</div>
          {formStatus.submit ? (
            <div className={"alert alert-" + formStatus.status}>
              {formStatus.message}
            </div>
          ):(
            <div></div>
          )}
  			</div>
      </div>
    </div>
  );
}

export default AtualizarEntidade;
