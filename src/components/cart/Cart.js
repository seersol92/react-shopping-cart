import React, { Component } from 'react';
import {
    withRouter
  } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';
class Cart extends Component {

    componentDidMount () {

    }

    state = {  }
    render() { 
        return ( 
            <div>
                <div className="mt-5">
                <div className="page-header">
                    <h3>My Cart</h3>
                </div>
                { this.props.product.length > 0 ? 
                    <table id="cart" className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th  className="text-xs-center">Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-fluid"/></div>
                                        <div className="col-sm-10">
                                            <h4 className="nomargin">Product 1</h4>
                                            <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price" className="mt-3">$1.99</td>
                                <td data-th="Quantity" className="mt-3">
                                    <input type="number" className="form-control text-xs-center" value="1" />
                                </td>
                                <td data-th="Subtotal" className="text-xs-center mt-3">1.99</td>
                                <td className="actions mt-3" data-th="">
                                    <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                                    <button className="btn btn-danger btn-sm ml-1"><i className="fa fa-trash-o"></i></button>								
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="visible-xs">
                                <td className="text-xs-center"><strong>Total 1.99</strong></td>
                            </tr>
                            <tr>
                                <td><a className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
                                <td colspan="2" className="hidden-xs"></td>
                                <td className="hidden-xs text-xs-center"><strong>Total $1.99</strong></td>
                                <td><a className="btn btn-success btn-block">Checkout <i className="fa fa-angle-right"></i></a></td>
                            </tr>
                        </tfoot>
                    </table>
                    : 
                    <div class="alert alert-dismissible alert-secondary">
                            <strong>Well done!</strong> Your cart is empty!!.
                    </div>
                    }
                </div>
            </div>
         );
    }
}

const mapDispatchToProps = dispatch => {
    return {
      onHardRefresh:  ()      => dispatch(actions.fetchProduct()),
      onQtyIncrement: (index) => dispatch(actions.quantityIncrement(index)),
      onQtyDecrement: (index) => dispatch(actions.quantityDecrement(index)),
      onAddToCart:    (id)    => dispatch(actions.addToCart(id)),
    };
  };
  
  const mapStateToProps = state => {
    return {
        loading: state.cart.loading,
        error: state.cart.error,
        product: state.cart.product
    };
  };
  
  export default withRouter(connect( mapStateToProps, mapDispatchToProps )( Cart ));
 
