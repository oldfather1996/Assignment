import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useForm } from "react-hook-form"
import firebase from '../../../../firebase'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import { isCompositeComponent } from 'react-dom/test-utils';
import ProductsManager from '../Products';
const AddProduct = ({ onAdd }) => {


    const { register, handleSubmit, watch, errors } = useForm();
    const [desc, setDesc] = useState("");
    let history = useHistory();
    const onHandleSubmit = (data) => {

        let file = data.image[0];

        let storageRef = firebase.storage().ref(`images/${file.name}`);

        storageRef.put(file).then(function () {

            storageRef.getDownloadURL().then((url) => {
                console.log(url)
                const newData = {
                    id: Math.random().toString(36).substr(2, 9),
                    ...data,
                    desc,
                    image: url
                }
                console.log(newData)
                onAdd(newData)
                history.push('/admin/products')

            })
        })
    }
    return (
        <div>
            <div className="card sdhadow mb -4">
                <h6 className="m-o font-weight-bold text-primary"> Thêm Sản Phẩm</h6>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit(onHandleSubmit)}>
                    <div className="from-group">
                        <label htmlFor="InputProductName" > Product Name</label>
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            id="InputProductName"
                            ref={register({ required: true, minLength: 5 })}
                        />
                        {errors.name && errors.name.type === "required" && <span>Product Name not null</span>}
                        {errors.name && errors.name.type == "minLength" && <span>Product Namme 5 word</span>}
                        <label htmlFor="InputProductPrice"> Price </label>
                        <input
                            type="text"
                            name="price"
                            className="form-control"
                            id="InputProductName"
                            ref={register({ required: true })}
                        />
                        {errors.name && <span> Price Not null </span>}
                        <label htmlFor="InputProductImage" > Image</label>
                        <input
                            type="file"
                            name="image"
                            className="form-control"
                            id="InputProductImage"
                            ref={register}
                        />
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
                            ref={register({ required: true })}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

AddProduct.propTypes = {

}

export default AddProduct
