/*
 *This is the home of the application. It's main function is to serve as a gateway for the
 *other functionalities of the entire application. The main problem faced when developing this
 *component is that in order for it's layout do disappear when rendering the other ones, a state
 *needs to be set. For that, useState hook is being used and changeHomeState is a function which
 *is used to set false for being at "home" when the user click on a link that goes for another page.
 *This is not the ideal solution but right now it's the better one. I good way to improve things in here
 *is to get the current route state and from that decides whick page should be rendered.
*/

import React, { useState, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CadastroAssociado from './Associado/CadastroAssociado'
import ListaAssociado from './Associado/ListaAssociado'
import AtualizarAssociado from './Associado/AtualizarAssociado'
import MostrarAssociado from './Associado/MostrarAssociado'

function App() {

  /*
   *This is a state for the home and its function that alter it.
  */
  const [isHome, setIsHome] = useState(true)

  /*
   *A function that gonna be used in the onClick events that are responsible for sending
   *the user to another page.
  */
  const changeHomeState = event => {
		if (isHome){
      setIsHome(false)
    } else {
      setIsHome(true)
    }
	}

  return (
    <div>
      {isHome ? (
        <Fragment>
          <Router>
            <div className="container mt-4">
        			<div className="row justify-content-center">

        				<div className="col-lg-6 mt-4">
        					<div className="card">
        						<div className="card-body">
        							<h5 className="card-title">Cadastro do Associado</h5>
        							<p className="card-text">
        								Cadastro dos dado de um novo associado
        							</p>
        							<Link to="/CadastroAssociado" onClick={changeHomeState} className="btn btn-primary">Ir para o Cadastro</Link>
        						</div>
        					</div>
        				</div>

        				<div className="col-lg-6 mt-4">
        					<div className="card">
        						<div className="card-body">
        							<h5 className="card-title">Special title treatment</h5>
        							<p className="card-text">Breve descrição sobre essa opção</p>
                      <Link to="/ListaAssociado" onClick={changeHomeState} className="btn btn-primary">Ir para a Lista</Link>
        						</div>
        					</div>
        				</div>

        				<div className="col-lg-6 mt-4">
        					<div className="card">
        						<div className="card-body">
        							<h5 className="card-title">Special title treatment</h5>
        							<p className="card-text">Breve descrição sobre essa opção</p>
        							<Link to="#" className="btn btn-primary">Go somewhere</Link>
        						</div>
        					</div>
        				</div>

        				<div className="col-lg-6 mt-4">
        					<div className="card">
        						<div className="card-body">
        							<h5 className="card-title">Special title treatment</h5>
        							<p className="card-text">Breve descrição sobre essa opção</p>
        							<Link to="#" className="btn btn-primary">Go somewhere</Link>
        						</div>
        					</div>
        				</div>

        				<div className="col-lg-6 mt-4">
        					<div className="card">
        						<div className="card-body">
        							<h5 className="card-title">Special title treatment</h5>
        							<p className="card-text">Breve descrição sobre essa opção</p>
        							<Link to="#" className="btn btn-primary">Go somewhere</Link>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
          </Router>
        </Fragment>
      ):(

        <Router>
          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route path="/CadastroAssociado">
              <CadastroAssociado />
            </Route>
            <Route path="/ListaAssociado">
              <ListaAssociado />
            </Route>
            <Route path="/Atualizar" component={AtualizarAssociado} />
            <Route path="/Mostrar" component={MostrarAssociado} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
