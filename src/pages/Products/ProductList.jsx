import React, { useContext, useState, useEffect } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/ProductCard/ProductCard';
import './ProductList.css';
import ProductCardSkeleton from '../../components/skeletons/ProductCardSkeleton';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductList = () => {
  const { getFilteredAndSortedProducts, searchQuery, setSearchQuery, categoryFilter, setCategoryFilter, sortOrder, setSortOrder } = useContext(ProductContext);
  const products = getFilteredAndSortedProducts();

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  
  const currentProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="product-list-page">
      <div className="filters-sidebar">

{
loading ? (

<>
  <Skeleton width={150} height={25} />

  <div style={{marginTop:"20px"}}>
    <Skeleton height={40}/>
  </div>


  <div style={{marginTop:"20px"}}>
    <Skeleton width={80}/>
    <Skeleton height={40} style={{marginTop:"10px"}}/>
  </div>


  <div style={{marginTop:"20px"}}>
    <Skeleton width={80}/>
    <Skeleton height={40} style={{marginTop:"10px"}}/>
  </div>

</>

) : (

<>

<h3>Filters & Search</h3>

<input 
  type="text" 
  placeholder="Search products..." 
  value={searchQuery}
  onChange={(e)=>{ 
      setSearchQuery(e.target.value); 
      setCurrentPage(1); 
  }}
  className="search-input"
/>


<div className="filter-group">
<label>Category</label>

<select 
value={categoryFilter}
onChange={(e)=>{
setCategoryFilter(e.target.value);
setCurrentPage(1);
}}
>

<option value="All">All Categories</option>
<option value="Electronics">Electronics</option>
<option value="Sports">Sports</option>
<option value="Home">Home</option>

</select>

</div>


<div className="filter-group">

<label>Sort By</label>

<select 
value={sortOrder}
onChange={(e)=>setSortOrder(e.target.value)}
>

<option value="Name A-Z">Name A-Z</option>
<option value="Price Low to High">Price Low to High</option>
<option value="Price High to Low">Price High to Low</option>

</select>

</div>

</>

)

}

</div>

      <div className="products-main">
        <h2>Our Products</h2>
        {
          loading ? (
            
  <div className="products-grid">
    {
      Array(8).fill(0).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))
    }
  </div>

) : currentProducts.length === 0 ? (

  <p>No products found.</p>

) : (

  <div className="products-grid">
    {
      currentProducts.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
        />
      ))
    }
  </div>

)
}

        {totalPages > 1 && (
          <div className="pagination">
            <button disabled={currentPage === 1} onClick={() => setCurrentPage(prev => prev - 1)}>Prev</button>
            <span>Page {currentPage} of {totalPages}</span>
            <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(prev => prev + 1)}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
