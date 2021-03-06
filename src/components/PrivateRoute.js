import React from 'react';
import {Route} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render = {(props) => {
      if(localStorage.getItem('token')) {
        return <Component {...props}/>
      }else {
        return(<h1>Please try again. Incorrect credentials</h1>)
      }
    }}/>
  )
}

export default PrivateRoute