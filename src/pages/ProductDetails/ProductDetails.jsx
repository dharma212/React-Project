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
    const [showFullName, setShowFullName] = useState(false);
    const [pageLoading, setPageLoading] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    useEffect(() => {
        if (product) {
            setPageLoading(true);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            const timer = setTimeout(() => {
                const firstImage =
                    product.images?.[0] || product.image;
                setSelectedImage(firstImage);
                setImageIndex(0);
                setPageLoading(false);
            }, 700);
            return () => clearTimeout(timer);
        }
    }, [product]);
    if (!product) {
        return <ProductDetailsSkeleton />;
    }

    const isWishlisted = wishlist.some(item => item.id === product.id);
    const isInCart = cart.some(item => item.id === product.id);
    const relatedProducts = products.filter(
        item =>
            item.id !== product.id &&
            item.category === product.category
    ).slice(0, 5);
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
    if (pageLoading) {

        return (

            <div className="product-loader-container">


                <div className="loader-gallery">


                    <div className="loader-thumbnails">

                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>

                    </div>


                    <div className="loader-main-image">

                    </div>


                </div>



                <div className="loader-details">


                    <div className="loader-title"></div>

                    <div className="loader-title short"></div>


                    <div className="loader-rating"></div>


                    <div className="loader-price"></div>


                    <div className="loader-offer"></div>

                    <div className="loader-offer"></div>


                    <div className="loader-buttons">

                        <span></span>
                        <span></span>

                    </div>


                </div>


            </div>

        )

    }
    return (
        <>
            <div className="page-heading">

                <h2>
                    Product Details
                </h2>

                <p>
                    Home / Products / {product.name}
                </p>

            </div>
            <div className="product-page">

                {/* LEFT IMAGE SECTION */}
               <div className="product-gallery">

    <div className="thumb-list">
        {productImages.map((img, index) => (
            <div
                key={index}
                className={`thumb-item ${
                    selectedImage === img ? "active-thumb" : ""
                }`}
                onClick={() => {
                    setSelectedImage(img);
                    setImageIndex(index);
                }}
            >
                <img src={img} alt="" />
            </div>
        ))}
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
            alt={product.name}
            className="main-image"
        />

        <button
            className="image-arrow right"
            onClick={nextImage}
            disabled={imageIndex === productImages.length - 1}
        >
            ❯
        </button>

    </div>

</div>



                {/* RIGHT DETAILS */}

                <div className="product-infos">


                    <div className="product-headers">


                        <h1 className="product-title">

                            {
                                showFullName
                                    ?
                                    product.name
                                    :
                                    product.name.length > 100
                                        ?
                                        product.name.substring(0, 100) + "..."
                                        :
                                        product.name
                            }

                        </h1>


                        {
                            product.name.length > 100 && (

                                <button
                                    className="title-toggle-btn"
                                    onClick={() =>
                                        setShowFullName(!showFullName)
                                    }
                                >

                                    {
                                        showFullName
                                            ?
                                            "View Less"
                                            :
                                            "View More"
                                    }

                                </button>

                            )
                        }



                        <div className="product-rating-section">


                            <div className="rating-badge">

                                <FaStar />

                                {product.rating || 5}

                            </div>


                            <span className="review-count">

                                {product.reviews || 2} Reviews

                            </span>


                            <span className="verified-text">

                                ✔ Verified Product

                            </span>


                        </div>




                        <div className="modern-price-box">


                            <h2>

                                ₹{product.price.toLocaleString()}

                            </h2>



                            <del>

                                ₹{(product.mrp || product.price + 5000).toLocaleString()}

                            </del>



                            <span className="discount-text">

                                {
                                    Math.round(
                                        (
                                            ((product.mrp || product.price + 5000)
                                                -
                                                product.price)
                                            /
                                            (product.mrp || product.price + 5000)
                                        )
                                        *
                                        100
                                    )
                                }
                                % OFF

                            </span>


                        </div>


                    </div>


                    <div className="modern-offer-box">

                        <h3>
                            Available Offers
                        </h3>


                        <div className="offer-item">

                            <div className="offer-icon-box">
                                <FaPercent />
                            </div>

                            <div>
                                <b>Bank Offer</b>
                                <p>
                                    10% instant discount on Credit Cards
                                </p>
                            </div>

                        </div>



                        <div className="offer-item">

                            <div className="offer-icon-box truck">
                                <FaTruck />
                            </div>

                            <div>
                                <b>Free Delivery</b>
                                <p>
                                    Free shipping on orders above ₹499
                                </p>
                            </div>

                        </div>


                    </div>



                    <div className="modern-details-row">


                        <div className="detail-card">

                            <span>
                                Category
                            </span>

                            <strong>
                                {product.category}
                            </strong>

                        </div>



                        <div className="detail-card">

                            <span>
                                Availability
                            </span>

                            <strong className="stock">
                                ● In Stock ({product.stock})
                            </strong>

                        </div>


                    </div>

                    <div className="modern-description-box">


                        <div className="description-header">

                            <h3>
                                Product Description
                            </h3>

                        </div>



                        <p>

                            {
                                showFullDescription
                                    ?
                                    product.description
                                    :
                                    product.description?.length > 200
                                        ?
                                        product.description.substring(0, 200) + "..."
                                        :
                                        product.description
                            }

                        </p>



                        {
                            product.description?.length > 200 && (

                                <button
                                    className="description-toggle"
                                    onClick={() =>
                                        setShowFullDescription(!showFullDescription)
                                    }
                                >

                                    {
                                        showFullDescription
                                            ?
                                            "View Less"
                                            :
                                            "View More"
                                    }

                                </button>

                            )
                        }


                    </div>

                    <div className="modern-action-buttons">

                        <button
                            className="modern-cart-btn"
                            onClick={() => addToCart(product)}
                        >

                            <FaShoppingCart />

                            {isInCart ? "Go To Cart" : "Add To Cart"}

                        </button>



                        <button
                            className={`modern-wishlist-btn ${isWishlisted ? "wishlisted-active" : ""
                                }`}
                            onClick={() => toggleWishlist(product)}
                        >

                            {isWishlisted ? "❤️ Wishlisted" : "🤍 Wishlist"}

                        </button>

                    </div>



                    <div className="modern-service-box">


                        <div className="service-card">

                            <span className="service-icon">
                                🚚
                            </span>

                            <div>

                                <b>
                                    Fast Delivery
                                </b>

                                <small>
                                    Ships within 24 hours
                                </small>

                            </div>

                        </div>



                        <div className="service-card">

                            <span className="service-icon">
                                🔒
                            </span>

                            <div>

                                <b>
                                    Secure Payment
                                </b>

                                <small>
                                    100% Safe Checkout
                                </small>

                            </div>

                        </div>



                        <div className="service-card">

                            <span className="service-icon">
                                ↩
                            </span>

                            <div>

                                <b>
                                    Easy Returns
                                </b>

                                <small>
                                    7 Days Return Policy
                                </small>

                            </div>

                        </div>


                    </div>


                </div>


            </div>
            <div className="related-product-section">

                <div className="related-header">

                    <h2>
                        Related Products
                    </h2>


                    <div className="related-slider-buttons">

                        <button
                            onClick={() => {
                                document
                                    .querySelector(".related-product-slider")
                                    .scrollLeft -= 250
                            }}
                        >
                            ❮
                        </button>


                        <button
                            onClick={() => {
                                document
                                    .querySelector(".related-product-slider")
                                    .scrollLeft += 250
                            }}
                        >
                            ❯
                        </button>


                    </div>


                </div>



                <div className="related-product-slider">


                    {
                        relatedProducts.map(item => (

                            <Link
                                to={`/products/${item.id}`}
                                className="related-product-card"
                                onClick={() => {
                                    window.scrollTo({
                                        top: 0,
                                        behavior: "smooth"
                                    })
                                }}
                            >

                                <img
                                    src={
                                        item.images?.[0] || item.image
                                    }
                                />


                                <h4>
                                    {
                                        item.name.length > 35
                                            ?
                                            item.name.substring(0, 35) + "..."
                                            :
                                            item.name
                                    }
                                </h4>


                                <div className="related-product-rating">
                                    ⭐ {item.rating || 5}
                                </div>


                                <h3>
                                    ₹{item.price.toLocaleString()}
                                </h3>


                            </Link>


                        ))
                    }


                </div>


            </div>
        </>
    )
};

export default ProductDetails;