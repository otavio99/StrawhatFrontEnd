/*
 *This component is in charge of listing the associates and offering options like update, view and delete,
 *as well as a search bar for finding a specific associate.
*/

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
import deleteEntidade from './DeleteEntidade';
import BuscarTodasEntidades from './BuscarTodasEntidades';


const ListaEntidades = () => {

  /*
   *A list for holding the entidades that are brought from the api.
  */
  const [entidades, setEntidades] = useState([])

  /*
   *A hook used to push a route to the router. Kind like a redirect, but this does not re-render the page.
  */
  const history = useHistory()

  /*
   *A hook for controlling asynchrounous calls to the api for listing entidades.
   *Axios for some reason keeps calling the api nonstop so I put a condition of
   *That makes axios trigger once.
  */

  useEffect( () => {
      BuscarTodasEntidades()
      	.then(response => {
          if(response.status === 200){
            setEntidades(response.data)
          }
      	})
      	.catch(error => {

      	})
      	.then(() => {
      		// always executed
      	}
      )
    },
    [entidades.length > 0 || entidades.length == 0]
  )

  /*
   *This function takes care of removing the entidades from the buffer list and
   *by calling the delete method in the api. This is that the page doesn't reload everytime
   *an entidade is deleted.
  */
  const remover = id => {
    //removing the associate from the buffer list of entidade
    setEntidades(entidades.filter(entidade => entidade.id !== id))

    //calling the api for removing the entidade from database
    deleteEntidade(id)
  }

  return (
      <div className="container mt-4">

        <Link to="/" className="btn">Home</Link>
        <div className="row justify-content-center">

          <div className="col-lg-8 mt-4">
            <div className="card form">
              <div className="card-body">
                <h5 className="card-title">Lista de entidades cadastradas</h5>

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
                      entidades.map( entidade => (
                          <tr>
                            <td scope="row">{entidade.id}</td>
                            <td>{entidade.nome}</td>
                            <td>
                              <button type="button" className="btn btn-success fa fa-eye" onClick={
                                () => history.push({
                                        pathname: '/MostrarEntidade',
                                        state: { detail: entidade }
                                      })
                              }></button>
                            </td>
                            <td>
                              <button type="button" className="btn btn-primary fa fa-pencil" onClick={
                                () => history.push({
                                        pathname: '/AtualizarEntidade',
                                        state: { detail: entidade }
                                      })
                              }></button>
                            </td>

                            <td>
                              <button type="button" className="btn btn-danger fa fa-times" onClick={
                                event => {
                                  remover(entidade.id)
                                }
                              }></button>
                            </td>
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

export default ListaEntidades;
