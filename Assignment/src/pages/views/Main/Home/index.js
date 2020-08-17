import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ products }) => {
    return (
        <div>
            <div className="content">
                <div className="container">
                    <div className="content-top">
                        <h1><img src="images/cloth_1.jpg" width="40px" /> NEW PRODUCTS</h1>
                        <div className="grid-in">   
                            {products.map((item) => (
                                <div className="col-md-4 grid-top">
                                    <Link to={`/about/${item.id}`} className="b-link-stripe b-animate-go  thickbox">
                                        <img className="img-responsive" src={item.image} width="300" height="25 0" />
                                        <div className="b-wrapper">
                                            <h3 className="b-animate b-from-left b-delay03 ">
                                                <span>{item.name}</span>
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.propTypes = {

}

export default Home
