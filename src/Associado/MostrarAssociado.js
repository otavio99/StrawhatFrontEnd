import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function MostrarAssociado(props) {

  const [associado, setAssociado] = useState(props.location.state.detail)

  return (
    <div className="container mt-4">
      <Link to="/" className="btn">Voltar</Link>
			<div className="row justify-content-center">

				<div className="col-lg-6 mt-4">
					<div className="card form">
						<div className="card-body">
							<h5 className="card-title">Informações do associado</h5>

							<form>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4">Nome</label>
										<input disabled
                      type="text"
                      name="nome"
                      className="form-control"
                      id="nome"
                      placeholder="Nome Completo"
                      value={associado.nome}
                    />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Data de Nascimento</label>
                    <input disabled
                      type="text"
                      pattern="\d{1,2}/\d{1,2}/\d{4}"
                      name="dataDeNascimento"
                      className="form-control"
                      id="dataNascimento"
                      value=""
                      placeholder="Dia/Mes/Ano"
                      value={associado.dataDeNascimento}
                    />
                  </div>
								</div>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4">Cpf</label>
										<input disabled disabled
                      type="text"
                      name="cpf"
                      className="form-control"
                      id="cpf"
                      placeholder="Cpf"
                      value={associado.cpf}
                    />
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Rg</label>
										<input disabled
                      type="text"
                      name="rg"
                      className="form-control"
                      id="rg"
                      placeholder="RG"
                      value={associado.rg}
                    />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress2">Endereço</label>
									<input disabled
                    type="text"
                    name="endereco"
                    className="form-control"
                    id="endereco"
                    placeholder="Bairro, Rua e Número"
                    value={associado.endereco}
                  />
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress2">Telefone</label>
									<input disabled
                    type="text"
                    name="telefone"
                    className="form-control"
                    id="telefone"
                    placeholder="(67) 9 9999-9999"
                    value={associado.telefone}
                  />
								</div>
							</form>
						</div>
					</div>
  			</div>
      </div>
    </div>
  );
}

export default MostrarAssociado;
