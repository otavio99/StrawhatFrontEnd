import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function CadastroAssociado() {
  const initialFormState = {
    id : null,
    nome : '',
    dataDeNascimento : '',
    cpf : '',
    rg : '',
    endereco : '',
    telefone : ''
  }
  const [associado, setAssociado] = useState(initialFormState)
  
  const status = { submit : false, status : '', message : ''}
  const [formStatus, setFormStatus] = useState(status)

  const handleInputChange = event => {
		const { name, value } = event.target

		setAssociado({ ...associado, [name]: value })
	}

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
    	.then(function (response) {
        if(response.status === 201){
            setFormStatus({
              submit : true,
              status : 'success',
              message: 'Associado(a) ' + associado.nome + ' cadastrado com sucesso'
            })
        }
    	})
    	.catch(function (error) {
        setFormStatus({
          submit : true,
          status : 'danger',
          message: 'Erro ao cadastrar associado'
        })
    	})
    	.then(function () {
    		// always executed
    	}
    )
	}

  return (
    <div className="container mt-4">
      <Link to="/" className="btn">Voltar</Link>
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

export default CadastroAssociado;
