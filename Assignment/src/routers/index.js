import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LayoutMain from '../pages/layouts/LayoutMain'
import LayoutAdmin from '../pages/layouts/LayoutAdmin'
//Admin
// import Dashboard from '../pages/views/Admin/DashBoard'
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import AddProducts from '../pages/views/Admin/AddProducts'
import AboutAdmin from '../pages/views/Admin/AboutAdmin'
//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import UpdateProduct from '../pages/views/Admin/UpdateProduct';
import List from '../pages/views/Admin/List/index.';
import Moderm from '../pages/views/Main/Moderm';


const Routers = ({ products, onRemove, onAdd, onUpdate }) => {
    const onHandleRemove = (id) => {
        onRemove(id)
    }
    const onHanleAdd = (id) => {
        onAdd(id)
    }
    const onHandleUpdate = (id, product) => {
        onUpdate(id, product)
    }
    return (
        <Router>
            <Switch>
                <Route path="/admin/:path?/:path?" exact>
                    <LayoutAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products' exact>
                                <ProductsManager products={products} onRemove={onHandleRemove} />
                            </Route>
                            <Route path='/admin/products/add' exact>
                                <AddProducts products={products} onAdd={onHanleAdd} />
                            </Route>
                            <Route path='/admin/:id' exact>
                                <AboutAdmin products={products} />
                            </Route>
                            <Route path='/admin/products/:id' exact>
                                <UpdateProduct products={products} onUpdate={onHandleUpdate} />
                            </Route>
                        </Switch>
                    </LayoutAdmin>
                </Route> 
                <Route  path="/:path?/:path?"  exact>
                    <LayoutMain>
                        <Switch>
                            <Route path="/" exact>
                                <Home products={products} />
                            </Route>
                            <Route path="/about/:id" exact>
                                <About products={products} />
                            </Route>
                            <Route path="/shop" exact>
                                <List products={products} />
                            </Route>
                            <Route path="/shop/moderm" exact>
                                <Moderm products={products} />
                            </Route>
                            
                        </Switch>
                    </LayoutMain>
                </Route>
            </Switch>
        </Router>
    )
}
Routers.propTypes = {
}
export default Routers
