import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios, {CancelToken} from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory
} from "react-router-dom";
import deleteAssociado from './DeleteAssociado';


function ListaAssociado(){

  const [associados, setAssociados] = useState([])
  const history =   useHistory()

    useEffect( () => {
        Axios(
            {
              url: "http://localhost:8080/associados",
              method: 'get',
              headers: {
                'Content-Type': 'application/json'
              },
            }
          )
        	.then(function (response) {
            if(response.status === 200){
              setAssociados(response.data)
            }
        	})
        	.catch(function (error) {

        	})
        	.then(function () {
        		// always executed
        	}
        )
      },
      [associados.length > 0 || associados.length == 0]
    )
      //<td><Link to={"/delete/" + associado.id} type="button" className="btn btn-danger fa fa-times"></Link></td>

  function remover(id){
    setAssociados(associados.filter(associado => associado.id !== id))
    deleteAssociado(id)
  }


  return (

      <div className="container mt-4">

        <Link to="/" className="btn">Voltar</Link>
        <div className="row justify-content-center">

          <div className="col-lg-8 mt-4">
            <div className="card form">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>

                <form>
                  <div className="form-row">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                    <button type="submit" className="btn btn-primary fa fa-search"></button>
                  </div>
                </form>


                <div className="table-responsive mt-4">
                  <table className="table table-hover table-sm">
                    <thead>
                      <tr>
                        <th scope="col">id</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ver</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Excluir</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      associados.map( associado => (
                          <tr>
                            <th scope="row">{associado.id}</th>
                            <td>{associado.nome}</td>
                            <td><button type="button" className="btn btn-success fa fa-eye" onClick={
                              () =>history.push({
                                      pathname: '/Mostrar',
                                      state: { detail: associado }
                                    })
                            }></button></td>
                            <td><button type="button" className="btn btn-primary fa fa-pencil" onClick={
                              () =>history.push({
                                      pathname: '/Atualizar',
                                      state: { detail: associado }
                                    })
                            }></button></td>

                            <td><button type="button" className="btn btn-danger fa fa-times" onClick={
                              event =>{
                                remover(associado.id)
                              }
                            }></button></td>
                          </tr>
                        )
                      )
                    }
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>

        </div>


  );
}

export default ListaAssociado;
