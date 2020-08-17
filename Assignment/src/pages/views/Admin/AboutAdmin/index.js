import React from 'react'
import PropTypes from 'prop-types'
import { useParams, Link } from 'react-router-dom'
const AboutAdmin = ({ products }) => {
    const { id } = useParams();

    const product = products.find(product => product.id === id);
    return (
        <div>
            <div className="card-header py-3">
                <h2 className="m-0 font-weight-bold text-primary" align="center">Chi tiết sản phẩm</h2>
            </div>
            <br />
            <div class="container-fluid" align="center">
                <div class="card text-center" >
                    <div class="row">
                        <div class="card-body">
                            <h2 class="card-title">ID: {product.id} </h2>
                            <h2 class="card-title">Name : {product.name} </h2>
                            <h2 class="card-text">Price: {product.price}$ </h2>
                            <h2 class="card-text">List: {product.list}$ </h2>
                            <h2 class="card-text">Sale: {product.sale}$ </h2>
                            <div class="col-12 offset-12">
                                <img src={product.image} alt="..." width="500px" />
                            </div>
                            <div>
                                {/* <Link className='btn btn-dark' to={`/admin/${b}`}>Pre</Link>
                                <Link className='btn btn-dark' to={`/admin/${c}`}>Next</Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
AboutAdmin.propTypes = {
}
export default AboutAdmin
