/*
 *This component is in charge of registering new mensalidade. The main thing to notice is that
 *the form used to collect the data has a mensalidade state, everytime the user write something on the input
 *fields the data is set on this state.
*/

import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

const CadastroEntidade = () => {
  /*
   *Constant object that mocks the state of entidade
  */
  const initialFormState = {
    id : null,
    data : '',
    nome : '',
  }

  /*
   *Creating a state with the hook useState
  */
  const [entidade, setEntidade] = useState(initialFormState)

  /*
   *A hook used to push a route to the router. Kind like a redirect, but this does not re-render the page.
  */
  const history = useHistory()


  /*
   *Creating a state for the status of the data being submited.
   *this state will holde data necessary to display the state of submission to the user.
  */
  const status = { submit : false, status : '', message : ''}
  const [ submitStatus, setSubmitStatus] = useState(status)

  /*
   *Handle the changes in the inputs so the data is set on the entidade state
  */
  const handleInputChange = event => {
	   const { name, value } = event.target
	   setEntidade({ ...entidade, [name]: value })
	}

  /*
   *Function that peforms the submission of the data to the api for registering
  */
  const addEntidade = entidade => {
    Axios(
        {
          url: "http://localhost:8080/entidades",
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          data: entidade
        }
      )
    	.then(response => {
        if(response.status === 201){
            setSubmitStatus({
              submit : true,
              status : 'success',
              message: 'A entidade ' + entidade.nome + ' foi cadastrada com sucesso'
            })
        }
    	})
    	.catch(error => {
        setSubmitStatus({
          submit : true,
          status : 'danger',
          message: 'Erro ao cadastrar entidade'
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
							<h5 className="card-title">Cadastro entidade</h5>

							<form
                onSubmit={event => {
                  event.preventDefault()
                  if (!entidade.nome || !entidade.data) return
                  addEntidade(entidade)
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
                      value={entidade.data}
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
                      value={entidade.valor}
                      onChange={handleInputChange}
                    />
                  </div>
								</div>
								<button type="submit" id = "cadastroEntidade" className="btn btn-primary" value='submit'>
                  Cadastre Entidade
                </button>
                &nbsp;
                <button type="button" className="btn btn-default" onClick={
                  () => history.push({
                          pathname: '/'
                        })
                }>Voltar</button>
							</form>
						</div>
					</div>
          { submitStatus.submit ? (
            <div className={"alert alert-" +  submitStatus.status}>
              { submitStatus.message}
            </div>
          ):(
            <div></div>
          )}
  			</div>
      </div>
    </div>
  );
}

export default CadastroEntidade;
