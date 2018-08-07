import React, { Component } from 'react';
import {
    withRouter
  } from 'react-router-dom'
import { connect } from 'react-redux';
import * as actions from './../../store/actions/index';
import  CartItem  from './cartItem'
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
                            {
                                this.props.product.map((item, index) =>  {
                                return   <CartItem name={item.name} key={index} />
                                })
                            }
                           
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
                            <strong> <i className="fa fa-hand-o-right" aria-hidden="true"></i> Your cart is empty!!.</strong>
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
 
