import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import { CartContext } from '../../context/CartContext';
import './ProductDetails.css';
import ProductDetailsSkeleton from "../../components/skeletons/ProductDetailsSkeleton";
import { FaPercent, FaTruck, FaStar, FaShoppingCart } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const { addToCart, toggleWishlist, wishlist, cart } = useContext(CartContext);

    const product = products.find(p => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState("");
    const [imageIndex, setImageIndex] = useState(0);
    useEffect(() => {

        if (product) {

            const firstImage =
                product.images?.[0] || product.image;


            setSelectedImage(firstImage);
            setImageIndex(0);

        }

    }, [product]);
    if (!product) {
        return <ProductDetailsSkeleton />;
    }

    const isWishlisted = wishlist.some(item => item.id === product.id);
    const isInCart = cart.some(item => item.id === product.id);
    const productImages =
        product.images?.length > 0
            ? product.images
            : [product.image];


    const nextImage = () => {

        let newIndex = imageIndex + 1;


        if (newIndex < productImages.length) {

            setImageIndex(newIndex);

            setSelectedImage(
                productImages[newIndex]
            );

        }

    };


    const previousImage = () => {


        let newIndex = imageIndex - 1;


        if (newIndex >= 0) {

            setImageIndex(newIndex);

            setSelectedImage(
                productImages[newIndex]
            );

        }


    };
    return (
        <div className="product-page">

            {/* LEFT IMAGE SECTION */}
            <div className="product-gallery">

                <div className="thumb-list">
                    {
                        productImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                className={
                                    selectedImage === img
                                        ? "thumb active"
                                        : "thumb"
                                }
                                onClick={() => {
                                    setSelectedImage(img);
                                    setImageIndex(index);
                                }}
                            />
                        ))
                    }
                </div>


                <div className="main-image-box">

                    <button
                        className="image-arrow left"
                        onClick={previousImage}
                        disabled={imageIndex === 0}
                    >
                        ❮
                    </button>


                    <img
                        src={selectedImage}
                        className="main-image"
                    />


                    <button
                        className="image-arrow right"
                        onClick={nextImage}
                        disabled={
                            imageIndex === productImages.length - 1
                        }
                    >
                        ❯
                    </button>

                </div>

            </div>



            {/* RIGHT DETAILS */}

            <div className="product-infos">


                <h1>{product.name}</h1>


                <div className="rating-box">

                    <FaStar className="offer-icon" />
                    {product.rating || 5}
                    <span className="reviews">({product.reviews || 2} Reviews)</span>


                </div>



                <div className="price-box">

                    <h2>
                        ₹{product.price.toLocaleString()}
                    </h2>

                    <del>
                        ₹{product.mrp || product.price + 5000}
                    </del>

                    <span>
                        ↓ 11% OFF
                    </span>

                </div>


                <div className="offer-box">

                    <h4>Available Offers</h4>

                    <p>
                        <FaPercent className="offer-icon" />
                        Bank Offer: 10% instant discount on Credit Cards
                    </p>

                    <p>
                        <FaTruck className="offer-icon" />
                        Free shipping on orders above ₹499
                    </p>

                </div>



                <div className="details-row">

                    <div>
                        <small>Category</small>
                        <b>{product.category}</b>
                    </div>


                    <div>
                        <small>Availability</small>
                        <b className="stock">
                            ● In Stock ({product.stock})
                        </b>
                    </div>

                </div>



                <div className="options">

                    <p>Available Colors</p>

                    <div className="color-box">
                        <img src={productImages[0]} />
                    </div>


                    <p>Available Sizes</p>

                    <button>
                        {product.size || "14"}
                    </button>

                </div>



                <div className="description-box">

                    <h5>
                        PRODUCT DESCRIPTION
                    </h5>

                    <p>
                        {product.description}
                    </p>

                </div>



                {/* <div className="quantity-box">

            <b>Select Quantity:</b>

            <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
            </div>

        </div> */}



                <div className="action-buttons">


                    <button
                        className="cart-btn"
                        onClick={() => addToCart(product)}
                    >
                        <FaShoppingCart /> {isInCart ? "Go To Cart" : "Add To Cart"}
                    </button>


                    <button
                        className={`wishlist-btn ${isWishlisted ? "wishlisted" : ""
                            }`
                        }
                        onClick={() => toggleWishlist(product)}
                    >
                        {isWishlisted ? "❤️ Wishlisted" : "🤍 Add To Wishlist"}
                    </button>


                </div>



                <div className="service-box">

                    <div>
                        🚚
                        <b>Fast Delivery</b>
                        <small>Ships within 24 hours</small>
                    </div>


                    <div>
                        🔒
                        <b>Secure Payment</b>
                        <small>100% Safe Checkout</small>
                    </div>


                    <div>
                        ↩
                        <b>Easy Returns</b>
                        <small>7 Days Return Policy</small>
                    </div>

                </div>


            </div>


        </div>
    )
};

export default ProductDetails;