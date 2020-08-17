import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (id) => {
        onRemove(id)
    }

    return (
        <div>
            <Link className="btn btn-primary" to="/admin/products/add">Them san pham</Link>
            {/* Page Heading */}
            <h1 className="h3 mb-2 text-gray-800">Tables</h1>
            <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more
          information about DataTables, please visit the <a target="_blank" href="https://datatables.net">official
            DataTables documentation</a>.</p>
            {/* DataTales Example */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
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
                                {products.map(({ id, name, image, price , list , sale }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="50" /></td>
                                        <td>{price}</td>
                                        <td>{list}</td>
                                        <td>{sale}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => removeHandle(id)}>Delete</button>
                                            <Link className='btn btn-dark' to={`/admin/${id}`}>Details</Link>
                                            <Link className='btn btn-dark' to={`/admin/products/${id}`}>Update</Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
