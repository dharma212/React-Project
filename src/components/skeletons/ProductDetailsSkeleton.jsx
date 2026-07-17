import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailsSkeleton = () => {
  return (

    <div className="product-page">


      {/* LEFT IMAGE SKELETON */}

      <div className="product-gallery">


        <div className="thumb-list">

          {
            [1, 2, 3, 4].map((item) => (

              <Skeleton
                key={item}
                width={70}
                height={70}
              />

            ))
          }

        </div>



        <div className="main-image-box">

          <Skeleton
            width={450}
            height={450}
          />

        </div>


      </div>





      {/* RIGHT DETAILS SKELETON */}


      <div className="product-infos">


        {/* Title */}

        <Skeleton
          width={350}
          height={35}
        />



        {/* Rating */}

        <div style={{ marginTop: "15px" }}>

          <Skeleton
            width={150}
            height={25}
          />

        </div>





        {/* Price */}

        <div style={{ marginTop: "20px" }}>

          <Skeleton
            width={180}
            height={40}
          />


          <Skeleton
            width={100}
            height={20}
          />


        </div>





        {/* Offers */}

        <div style={{ marginTop: "25px" }}>

          <Skeleton
            width={180}
            height={25}
          />


          <Skeleton
            count={2}
            height={20}
          />


        </div>





        {/* Category + Stock */}


        <div
          style={{
            display: "flex",
            gap: "30px",
            marginTop: "25px"
          }}
        >

          <Skeleton
            width={120}
            height={50}
          />


          <Skeleton
            width={150}
            height={50}
          />


        </div>





        {/* Color and Size */}

        <div style={{ marginTop: "25px" }}>

          <Skeleton
            width={150}
            height={25}
          />


          <Skeleton
            width={70}
            height={70}
          />


          <Skeleton
            width={100}
            height={40}
          />

        </div>






        {/* Description */}

        <div style={{ marginTop: "25px" }}>


          <Skeleton
            width={200}
            height={25}
          />


          <Skeleton
            count={3}
          />


        </div>






        {/* Buttons */}


        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "25px"
          }}
        >

          <Skeleton
            width={180}
            height={50}
          />


          <Skeleton
            width={200}
            height={50}
          />


        </div>






        {/* Services */}


        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px"
          }}
        >


          <Skeleton
            width={120}
            height={70}
          />


          <Skeleton
            width={120}
            height={70}
          />


          <Skeleton
            width={120}
            height={70}
          />


        </div>


      </div>


    </div>

  );
};


export default ProductDetailsSkeleton;