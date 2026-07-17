import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="product-card">
      <Skeleton height={220} />

      <div style={{ padding: "10px" }}>
        <Skeleton height={25} />

        <div style={{ marginTop: "10px" }}>
          <Skeleton width={80} />
        </div>

        <div style={{ marginTop: "10px" }}>
          <Skeleton width={120} height={25} />
        </div>

        <div style={{ marginTop: "15px" }}>
          <Skeleton height={40} />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;