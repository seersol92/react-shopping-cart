import Login from './../components/auth/Login';
import Register from './../components/auth/Register';
import Cart from './../components/cart/Cart';
import Home from './../components/Home'


const Routes = [
    
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Cart
    },
    
    {
        path: '/',
        component: Home,
        exact: true
    }

]

export default Routes;