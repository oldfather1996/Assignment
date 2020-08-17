import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form"

const UpdateProduct = ({ products, onUpdate }) => {
    let { id } = useParams();
    let history = useHistory();
    const product = products.find(product => product.id === id);
    const { register, handleSubmit, watch, errors } = useForm();
    const [currentProduct, setCurrentProduct] = useState(product);

    const onHandleSubmit = (e) => {
        e.preventDefault();
        onUpdate(currentProduct);
        history.push('/admin/products');
    }
    const onHandleChange = e => {
        const { name, value } = e.target;
        setCurrentProduct({
            ...currentProduct,
            [name]: value
        })
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit} className="w-50">
                <div className="form-group">
                    <label htmlFor="productName">Tên sản phẩm</label>
                    <input type="text"
                        name="name"
                        value={currentProduct.name} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">Giá sản phẩm</label>
                    <input type="text"
                        name="price"
                        value={currentProduct.price} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="productName">image</label>
                    <input type="text"
                        name="image"
                        className="form-control"
                        id="InputProductName"
                        value={currentProduct.image} onChange={onHandleChange} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlfor="InputProductList">List</label>
                    <select className="form-control form-control" name="list" ref={register} >
                        <option >All</option>
                        <option>classic</option>
                        <option>moderm</option>
                        <option>Folk</option>
                    </select>
                </div>
                <label htmlFor="InputProductSale"> Sale </label>
                <input
                    type="text"
                    name="sale"
                    className="form-control"
                    id="InputProductName"
                    ref={register}
                />
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    )
}


export default UpdateProduct