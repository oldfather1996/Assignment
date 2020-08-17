import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
const Moderm = ({products}) => {
    return (
        <div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Image</th>
                                <th scope="col">Price</th>
                                <th scope="col">List</th>
                                <th scope="col">Sale</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(({ id, name, image, price, list, sale }, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td><img src={image} alt="" width="50" /></td>
                                    <td>{price}</td>
                                    <td>{list}</td>
                                    <td>{sale}</td>
                                    <td>
                                    {products.map((item)=>
                                     <Link className='btn btn-dark' to={`/about/${item.id}`}>Details</Link>
                                         ) }
                                        
                                       


                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

Moderm.propTypes = {

}

export default Moderm
