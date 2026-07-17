import React from "react";
import Skeleton from "react-loading-skeleton";

const ProfileSkeleton = () => {
  return (
    <div className="profile-page">

      <div className="profile-card">

        {/* Top User Section */}
        <div className="profile-top">

          <Skeleton
            circle
            width={90}
            height={90}
          />

          <div style={{ marginLeft: "20px", width: "250px" }}>

            <Skeleton height={30} />

            <Skeleton
              height={18}
              width={180}
              style={{ marginTop: "10px" }}
            />

          </div>

        </div>



        {/* Details Section */}

        <div className="profile-details">


          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>


          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>



          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>



          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>



          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>



          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>



          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>



          <div>
            <Skeleton width={80} height={18} />
            <Skeleton height={25} />
          </div>


        </div>



        {/* Buttons */}

        <Skeleton
          height={45}
          style={{
            marginTop:"20px"
          }}
        />


        <Skeleton
          height={45}
          style={{
            marginTop:"15px"
          }}
        />


      </div>

    </div>
  );
};


export default ProfileSkeleton;