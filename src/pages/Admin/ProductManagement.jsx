import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductManagement.css";


const ProductManagement = () => {

  const { products, deleteProduct } = useContext(ProductContext);


  return (

    <div className="product-management-container">


      <div className="product-header">

        <h1>
          Product Management
        </h1>


        <Link to="/add-product">

          <button className="add-product-btn">
            + Add Product
          </button>

        </Link>


      </div>




      <div className="table-card">


        <table className="product-table">


          <thead>

            <tr>

              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Action</th>

            </tr>

          </thead>



          <tbody>


          {
            products.map((product)=>(


              <tr key={product.id}>


                <td>

                  <img 
                    src={product.image}
                    alt={product.name}
                    className="product-images"
                  />

                </td>



                <td>
                  {product.name}
                </td>



                <td>
                  ${product.price}
                </td>



                <td>
                  {product.category}
                </td>



                <td>


                  <Link to={`/edit-product/${product.id}`}>

                    <button className="edit-btn">
                      Edit
                    </button>

                  </Link>



                  <button
                    className="delete-btn"
                    onClick={()=>deleteProduct(product.id)}
                  >
                    Delete
                  </button>


                </td>


              </tr>


            ))
          }


          </tbody>


        </table>


      </div>


    </div>

  );

};


export default ProductManagement;