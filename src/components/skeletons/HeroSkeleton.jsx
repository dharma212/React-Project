import React from "react";
import Skeleton from "react-loading-skeleton";

const HeroSkeleton = () => {
  return (
    <div
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <Skeleton
        height={50}
        width={350}
        style={{ margin: "0 auto" }}
      />

      <div style={{ marginTop: "20px" }}>
        <Skeleton
          height={20}
          width={500}
          style={{ margin: "0 auto" }}
        />
      </div>

      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Skeleton width={150} height={45} />
      </div>
    </div>
  );
};

export default HeroSkeleton;