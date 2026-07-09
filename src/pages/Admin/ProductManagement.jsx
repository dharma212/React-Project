import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Link } from "react-router-dom";
import "./ProductManagement.css";
import Sidebar from "./Sidebar"; 
import "./Sidebar.css"; 


const ProductManagement = () => {

  const { products, deleteProduct } = useContext(ProductContext);


  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
    <Sidebar /> 

    <div style={{ marginLeft: "200px", width: "100%", padding: "25px" }}>
      <div className="product-header">

        <h1>
          Product Management
        </h1>


        <Link to="/admin/add-product">

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


                  <Link to={`/admin/edit-product/${product.id}`}>

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
    </div>

  );

};


export default ProductManagement;