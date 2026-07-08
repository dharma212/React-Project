import React, { useState, useContext, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import { useNavigate, useParams } from 'react-router-dom';
import './ProductForm.css';
import { AuthContext } from "../../context/AuthContext";
const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct } = useContext(ProductContext);
  const { currentUser } = useContext(AuthContext);

if (!currentUser || currentUser.role !== "admin") {
  return <h2>Access Denied</h2>;
}

  const [formData, setFormData] = useState({
    name: '', price: '0', category: 'Electronics', image: '', description: '', stock: '', rating: 5
  });

  const isEditMode = Boolean(id);

  useEffect(() => {
    if (isEditMode) {
      const existingProduct = products.find(p => p.id === parseInt(id));
      if (existingProduct) setFormData(existingProduct);
    }
  }, [id, products, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productToSave = {
      ...formData,
      price: parseInt(formData.price),
      stock: parseInt(formData.stock),
      rating: parseFloat(formData.rating)
    };

    if (isEditMode) {
      updateProduct({ ...productToSave, id: parseInt(id) });
    } else {
      addProduct(productToSave);
    }
    navigate('/products');
  };

  return (
    <div className="product-form-container">
      <h2>{isEditMode ? 'Edit Product' : 'Add New Product'}</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>Name</label>
        <input type="text" name="name" required placeholder="Enter Product Name" value={formData.name} onChange={handleChange} />

        <label>Price ($)</label>
        <input type="number" name="price" required placeholder="Enter Product Price" value={formData.price} onChange={handleChange} />

        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Electronics">Electronics</option>
          <option value="Sports">Sports</option>
          <option value="Home">Home</option>
        </select>

        <label>Image URL</label>
        <input type="url" name="image" required placeholder="Enter Image URL" value={formData.image} onChange={handleChange} />

        <label>Stock Quantity</label>
        <input type="number" name="stock" required placeholder="Enter Stock Quantity" value={formData.stock} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" required placeholder="Enter Product Descriptions......" rows="4" value={formData.description} onChange={handleChange}></textarea>

        <button type="submit" className="btn-primary">{isEditMode ? 'Update Product' : 'Add Product'}</button>
      </form>
    </div>
  );
};

export default ProductForm;
