import React from 'react'
import {
  Redirect,
  Route
} from 'react-router-dom'

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const  PrivateRoute  = ({component: Component, isAuth, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => isAuth === true
          ? <Component {...props} />
          : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
      />
    )
}