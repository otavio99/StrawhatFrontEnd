/*
 *This component is in charge of registering new associate. The main thing to notice is that
 *the form used to collect the data has a associate state, everytime the user write something on the input
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

const CadastroAssociado = () => {
  /*
   *Constant object that mocks the state associate
  */
  const initialFormState = {
    id : null,
    nome : '',
    dataDeNascimento : '',
    cpf : '',
    rg : '',
    endereco : '',
    telefone : ''
  }

  /*
   *Creating a state with the hook useState
  */
  const [associado, setAssociado] = useState(initialFormState)

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
   *Handle the changes in the inputs so the data is set on the associate state
  */
  const handleInputChange = event => {
	   const { name, value } = event.target
	   setAssociado({ ...associado, [name]: value })
	}

  /*
   *Function that peforms the submission of the data to the api for registering
  */
  const addAssociado = associado => {
    Axios(
        {
          url: "http://localhost:8080/associados",
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          data: associado
        }
      )
    	.then(response => {
          if(response.status === 201){
              setSubmitStatus(
                {
                  submit : true,
                  status : 'success',
                  message: 'Associado(a) ' + associado.nome + ' cadastrado com sucesso'
                }
            )
          }
      	}
      )
    	.catch(error => {
          setSubmitStatus(
            {
              submit : true,
              status : 'danger',
              message: 'Erro ao cadastrar associado'
            }
          )
      	}
      )
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
							<h5 className="card-title">Cadastro Associado</h5>

							<form
                onSubmit={event => {
                  event.preventDefault()
                  if (!associado.nome || !associado.cpf) return
                  addAssociado(associado)
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
                      placeholder="Nome Completo"
                      value={associado.nome}
                      onChange={handleInputChange}
                    />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Data de Nascimento</label>
                    <input
                      type="text"
                      pattern="\d{1,2}/\d{1,2}/\d{4}"
                      name="dataDeNascimento"
                      className="form-control"
                      id="dataNascimento"
                      value=""
                      placeholder="Dia/Mes/Ano"
                      value={associado.dataDeNascimento}
                      onChange={handleInputChange}
                    />
                  </div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4">Cpf</label>
										<input
                      type="text"
                      name="cpf"
                      className="form-control"
                      id="cpf"
                      placeholder="Cpf"
                      value={associado.cpf}
                      onChange={handleInputChange}
                    />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Rg</label>
										<input
                      type="text"
                      name="rg"
                      className="form-control"
                      id="rg"
                      placeholder="RG"
                      value={associado.rg}
                      onChange={handleInputChange}
                    />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress2">Endereço</label>
									<input
                    type="text"
                    name="endereco"
                    className="form-control"
                    id="endereco"
                    placeholder="Bairro, Rua e Número"
                    value={associado.endereco}
                    onChange={handleInputChange}
                  />
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress2">Telefone</label>
									<input
                    type="text"
                    name="telefone"
                    className="form-control"
                    id="telefone"
                    placeholder="(67) 9 9999-9999"
                    value={associado.telefone}
                    onChange={handleInputChange}
                  />
								</div>
								<button type="submit" id = "cadastroAssociado" className="btn btn-primary" value='submit'>
                  Adicione Associado
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

export default CadastroAssociado;
