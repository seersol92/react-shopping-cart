import React, { Component } from 'react';
import NavBar from './../components/shared/NavBar';

class Layout extends Component {
    
    render() { 
        return ( 
            <div>
                <NavBar/>
                <div className="container mt-5">
                    {this.props.children}
                </div>
            </div>
         );
    }
}
 
export default Layout;