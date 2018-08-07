import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ( props ) => (
       <tr>
           
            <td data-th="Product">
                <div className="row">
                    <div className="col-sm-2 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-fluid"/></div>
                    <div className="col-sm-10">
                        <h4 className="nomargin">{props.name}</h4>
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
       
);

CartItem.propTypes = {
    name: PropTypes.string.isRequired
};
export default CartItem;