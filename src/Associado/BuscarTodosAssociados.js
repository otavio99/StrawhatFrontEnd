/*
 *This component is in charge of getting all associates.
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


const BuscarTodosAssociados = () => {

  return Axios(
          {
            url: "http://localhost:8080/associados",
            method: 'get',
            headers: {
              'Content-Type': 'application/json'
            },
          }
        )

}

export default BuscarTodosAssociados;
