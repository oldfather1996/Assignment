import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import apiRequest from '../../../../api/ProductApi';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import Sidebar from '../../../../components/Main/Sidebar';
const List = ({ products }) => {
    const id = useParams().id;
    
    const [product, setProduct] = useState({});
    // const product = products.find(item => item.id === id)
    useEffect(() => {
        const getProduct = async () => {
            
            try {
                const { data } = await apiRequest.get(id);
                console.log(data);
                setProduct(data)
            } catch (error) { 
                console.log('Faile to request API', error)
            }
        }
        getProduct()
    }, {})
    return (
        <div>  
               <Sidebar/>
        </div>
    )
}

List.propTypes = {

}

export default List
