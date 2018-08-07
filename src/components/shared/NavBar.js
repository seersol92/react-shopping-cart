import React, { Component } from 'react';
import {
    withRouter
  } from 'react-router-dom'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as actions from './../../store/actions/index';


class NavBar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink to={'/'} className="navbar-brand">React Cart</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav ml-auto">
                   
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/login'} activeClassName="active">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/register'} activeClassName="active">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to={'/cart'} activeClassName="active">
                            <i className="fa fa-shopping-cart"></i>
                            <span class="badge badge-pill badge-success ml-1">
                            { this.props.product.length }
                            </span>
                        </NavLink>
                    </li>
                    </ul>
                </div>
            </nav>
         );
    }
}
 

const mapDispatchToProps = dispatch => {
    return {
      onAddToCart:    (id)    => dispatch(actions.addToCart(id))
    };
  };
  
  const mapStateToProps = state => {
    return {
        loading: state.cart.loading,
        error: state.cart.error,
        product: state.cart.product
    };
  };
  
  export default withRouter(connect( mapStateToProps, mapDispatchToProps )( NavBar ));