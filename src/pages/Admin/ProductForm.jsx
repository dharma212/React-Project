import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import './ProductForm.css';
import Sidebar from './Sidebar';
import './Sidebar.css';
import { useToast } from "../../context/ToastContext";

const ProductForm = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const { products, addProduct, updateProduct } = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);
  const { showToast } = useToast();

  if (!currentUser || currentUser.role !== "admin") {
    return <h2>Access Denied</h2>;
  }


  const [formData, setFormData] = useState({
    name: '',
    price: '0',
    category: 'Electronics',
    image: '',
    description: '',
    stock: '',
    rating: 5
  });


  const isEditMode = Boolean(id);



  // Edit product data load
  useEffect(() => {

    if (isEditMode) {

      const existingProduct = products.find(
        p => p.id === parseInt(id)
      );


      if (existingProduct) {
        setFormData(existingProduct);
      }

    }

  }, [id, products, isEditMode]);





  // Handle normal input change
  const handleChange = (e) => {

    const { name, value } = e.target;


    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };





  // Handle Image Upload
  const handleImageChange = (e) => {

    const file = e.target.files[0];


    if (file) {

      const reader = new FileReader();


      reader.onloadend = () => {

        setFormData(prev => ({
          ...prev,
          image: reader.result
        }));

      };


      reader.readAsDataURL(file);

    }

  };





  // Submit Product
  const handleSubmit = (e) => {

    e.preventDefault();



    const productToSave = {

      ...formData,

      price: parseInt(formData.price),

      stock: parseInt(formData.stock),

      rating: parseFloat(formData.rating)

    };



    if (isEditMode) {


      updateProduct({

        ...productToSave,

        id: parseInt(id)

      });



      showToast(
        `${productToSave.name} updated successfully`
      );


    }
    else {


      addProduct(productToSave);



      showToast(
        `${productToSave.name} added successfully`
      );


    }



    navigate('/admin/products');

  };





  return (

    <div style={{ display: "flex", minHeight: "100vh" }}>


      <Sidebar />



      <div
        style={{
          marginLeft: "260px",
          width: "100%",
          padding: "20px",
          backgroundColor: "#f4f7f6"
        }}
      >



        <div
          className="product-form-container"
          style={{
            maxWidth: "600px",
            margin: "0 auto",
            background: "white",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
          }}
        >



          <h2>
            {
              isEditMode
                ? "Edit Product"
                : "Add New Product"
            }
          </h2>





          <form
            onSubmit={handleSubmit}
            className="product-form"
          >



            <label>Name</label>

            <input

              type="text"

              name="name"

              required

              placeholder="Enter Product Name"

              value={formData.name}

              onChange={handleChange}

            />





            <label>Price ($)</label>

            <input

              type="number"

              name="price"

              required

              placeholder="Enter Product Price"

              value={formData.price}

              onChange={handleChange}

            />






            <label>Category</label>


            <select

              name="category"

              value={formData.category}

              onChange={handleChange}

            >

              <option value="Electronics">
                Electronics
              </option>


              <option value="Sports">
                Sports
              </option>


              <option value="Home">
                Home
              </option>


            </select>







            <label>
              Choose Product Image
            </label>



            <input

              type="file"

              accept="image/*"

              onChange={handleImageChange}

            />





            {
              formData.image && (

                <div className="image-preview">

                  <img

                    src={formData.image}

                    alt="Product Preview"

                  />

                </div>

              )
            }








            <label>Stock Quantity</label>


            <input

              type="number"

              name="stock"

              required

              placeholder="Enter Stock Quantity"

              value={formData.stock}

              onChange={handleChange}

            />







            <label>Description</label>


            <textarea

              name="description"

              required

              placeholder="Enter Product Descriptions......"

              rows="4"

              value={formData.description}

              onChange={handleChange}

            ></textarea>








            <button
              type="submit"
              className="btn-primary"
            >

              {
                isEditMode
                  ? "Update Product"
                  : "Add Product"
              }

            </button>




          </form>



        </div>


      </div>


    </div>


  );

};


export default ProductForm;