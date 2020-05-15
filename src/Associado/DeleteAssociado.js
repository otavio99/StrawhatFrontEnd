/*
 *This component is in charge of just deleting a given associate.
*/
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Axios, {CancelToken} from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  Redirect
} from "react-router-dom";

const deleteAssociado = id => {
    //const {id} = useParams()

    if ( id > 0 ){
    return  Axios(
          {
            url: "http://localhost:8080/associados/" + id,
            method: 'delete',
            headers: {
              'Content-Type': 'application/json'
            },
          }
        )
      	.then(response => {

            console(response.data)

      	})
      	.catch(error => {

      	})
      	.then(() => {
      		// always executed
      	   }
        )
      }
  }

export default deleteAssociado;
