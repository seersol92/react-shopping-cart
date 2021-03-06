import React, { Component } from 'react';
import {
    withRouter
  } from 'react-router-dom'
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from './../store/actions/index';
import './Home.css'
 
class Home extends Component {

    componentDidMount () {
        this.props.onHardRefresh();
    }

    errorToaster () {
        if (this.props.error !== null) {
             toast.dismiss(); // dismiss all 
             toast.info(this.props.error)
        }
    }

    incrementQty(index) {
        this.props.onQtyIncrement(index);
        this.errorToaster();
    }

    decrementQty(index) {
        this.props.onQtyDecrement(index)
        this.errorToaster();

    }

    onCartClick = (id) => {
        this.props.onAddToCart(id);
    }

    render() { 
        const styleAvailable = {
            color: 'green'
        }

        const styleNotAvailable = {
            color: 'red'
        }
       
        return ( 
            <div>
                <div className="page-header">
                    <h3>Products</h3>
                </div>
                <div className="row">
                { this.props.products.map((item, index) => (
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <div className="card mb-3">
                            <h4 className="card-header">{item.name}</h4>
                            <img style={{height: '200px', width: '100%', display: 'block'}}
                            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"  
                            alt={item.name}
                            />
                            <div className="card-body">
                                <p className="card-text">
                                    <strong>Price: {item.price}$</strong>
                                </p>
                                <div class="input-group mb-1">
                                <div class="input-group-prepend">
                                    <button 
                                    type="button" 
                                    class="btn btn-outline-success" 
                                    disabled={item.selectedQty=== item.qty }
                                    onClick={() => this.incrementQty(index)}>
                                        <i className="fa fa-plus" ></i>
                                    </button>
                                </div>
                                <input type="text" readOnly class="form-control" 
                                placeholder="Pick Quantity" value={item.selectedQty} />
                                <div class="input-group-append">
                                    <button 
                                    type="button" 
                                    class="btn btn-outline-danger" 
                                    disabled={item.selectedQty=== 1 }
                                    onClick={ () => this.decrementQty(index)}>
                                        <i className="fa fa-minus" ></i>
                                    </button>
                                </div>
                                </div>
                                <div className="text-center" style={item.qty-item.selectedQty !== 0 ? styleAvailable : styleNotAvailable}>
                                    <small>({(item.qty-item.selectedQty)}) Available</small>
                                </div>
                            </div>
                            <div className="card-footer text-muted">
                                <button 
                                onClick={ () => this.onCartClick(item.id)}
                                type="button"
                                class="btn btn-outline-success btn-block" 
                                 >
                                    <i className="fa fa-shopping-cart" ></i> &nbsp;Add To Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
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
        loading: state.products.loading,
        error: state.products.error,
        products: state.products.products
    };
  };
  
  export default withRouter(connect( mapStateToProps, mapDispatchToProps )( Home ));