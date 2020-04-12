import React, { useState, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CadastroAssociado from './Associado/CadastroAssociado'

function App() {

  const [isHome, setIsHome] = useState(true)

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
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
