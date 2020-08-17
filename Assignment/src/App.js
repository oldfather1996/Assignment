import React, { useState, useEffect } from 'react';
// import Products from './components/Products';
// import Box from './components/Box/Box';
// import Home from './components/Main/NavBar'
// import Product from './components/Product';
import dataFake from './dataFake';
import Routers from './routers'
import apiRequest from './api/ProductApi';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import AddProduct from './components/AddProduct';
function App() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await apiRequest.getAll();
        console.log(data)
        setProducts(data);
      } catch (error) {
        console.log('failed to request API: ', error)
      }
    }
    getProducts();
  }, []);
  // const [products, setProducts] = useState(dataFake);
  // const [status, setStatus] = useState(false);
  // const [color, setColor] = useState('green');
  // const onHandleClick = () => {
  //   // setStatus(true);
  //   setColor('red');
  // }
  // const onHandleRemove = (id) => {
  //   const newProducts = products.filter(product => product.id !== id);
  //   setProducts(newProducts);
  // }
  // const onHanleAdd = (product) => {
  //   const newProduct = {
  //     id: products.length + 1,
  //     ...product
  //   }
  //   setProducts([
  //     ...products,
  //     newProduct
  //   ])
  // }


  const onHandleRemove = async (id) => {
    try {
      const { data } = await apiRequest.remove(id);
      const newProducts = products.filter(product => product.id !== id);
      const ConfirmWindor = window.confirm("ban chac chan muon xoa")
      if (ConfirmWindor) {
        setProducts(newProducts);
      }
    } catch (error) {
      console.log('failed to request API: ', error)
    }

  }
  const onHandleAdd = async (product) => {
    try {
      const { data } = await apiRequest.create(product);
      setProducts([
        ...products,
        data
      ])
    } catch (error) {
      console.log('failed to request API:', error)
    }
  }
  const onHandleUpdate = (updateProduct) => {
    const newProducts = products.map(product => (
      product.id === updateProduct.id ? updateProduct : product  // Nếu product.id bằng với id của sản phẩm vừa chỉnh sửa thì trả về mảng có object mới
    ));
    localStorage.setItem('products', JSON.stringify(newProducts))
    setProducts(newProducts);
  }

  return (
    <div className="App">
      <Routers products={products} onRemove={onHandleRemove} onAdd={onHandleAdd} onUpdate={onHandleUpdate} />
    </div>
  )

}
export default App;