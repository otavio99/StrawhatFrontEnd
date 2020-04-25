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

function deleteAssociado (id) {
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
      	.then(function (response) {

            console(response.data)

      	})
      	.catch(function (error) {

      	})
      	.then(function() {
      		// always executed
      	   }
        )
      }
  }

export default deleteAssociado;
