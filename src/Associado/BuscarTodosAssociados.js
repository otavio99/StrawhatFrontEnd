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


function buscar(){
  /*
   *A hook for controlling asynchrounous calls to the api for listing associates.
   *Axios for some reason keeps calling the api nonstop so I put a condition of
   *That makes axios trigger once.
  */

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
        return response.data
      }
  	})
  	.catch(function (error) {

  	})
  	.then(function () {
  		// always executed
  	}
  )
}

export default buscar;
