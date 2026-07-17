import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Profile.css";
import { Link } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import ProfileSkeleton from "../../components/skeletons/ProfileSkeleton";

const Profile = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{

    const timer=setTimeout(()=>{

        setLoading(false);

    },800);


    return ()=>clearTimeout(timer);


},[]);
  const { currentUser, login } = useContext(AuthContext);
  const { showToast } = useToast();

  const [userData, setUserData] = useState(currentUser);


  useEffect(() => {

    const users = JSON.parse(
      localStorage.getItem("usersDB") || "[]"
    );


    const latestUser = users.find(
      user => user.email === currentUser.email
    );


    if (latestUser) {
      setUserData(latestUser);
    }


  }, [currentUser]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({

    username: userData.username || "",
    email: userData.email || "",
    password: "",
    phone: userData.phone || "",
    address: userData.address || "",
    city: userData.city || "",
    state: userData.state || "",
    pincode: userData.pincode || ""

  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const users = JSON.parse(
      localStorage.getItem("usersDB") || "[]"
    );

    const updatedUsers = users.map(user => {
      if (user.email === userData.email) {
        return {
          ...user,
          username: formData.username,
          email: formData.email,
          password: formData.password || user.password,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode
        }
      }
      return user;
    });
    localStorage.setItem(
      "usersDB",
      JSON.stringify(updatedUsers)
    );
    const updatedUser = updatedUsers.find(
      user => user.email === userData.email
    );
    localStorage.setItem(
      "user",
      JSON.stringify(updatedUser)
    );
    login(updatedUser);
    showToast("Profile updated successfully!");
    setShowModal(false);
  }
  if(loading){

    return <ProfileSkeleton/>;

}
  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-avatar">
            {
              userData.username
                ?
                userData.username.charAt(0).toUpperCase()
                :
                "U"
            }
          </div>
          <div>
            <h2>
              {userData.username || "User"}
            </h2>
            <p>
              {userData.email}
            </p>
          </div>
        </div>
        <div className="profile-details">
          <div>
            <label>Username</label>
            <p>{userData.username || "--"}</p>
          </div>
          <div>
            <label>Email</label>
            <p>{userData.email}</p>
          </div>
          <div>
            <label>Phone</label>
            <p>{userData.phone || "--"}</p>
          </div>
          <div>
            <label>Address</label>
            <p>{userData.address || "--"}</p>
          </div>
          <div>
            <label>City</label>
            <p>{userData.city || "--"}</p>
          </div>
          <div>
            <label>State</label>
            <p>{userData.state || "--"}</p>
          </div>
          <div>
            <label>Pincode</label>
            <p>{userData.pincode || "--"}</p>
          </div>
          <div>
            <label>Joined Date</label>
            <p>
              {
                userData.joinedAt
                  ? new Date(userData.joinedAt).toLocaleDateString()
                  : "--"
              }
            </p>
          </div>
          <div>
            <label>Account Type</label>
            <p>
              {userData.role}
            </p>
          </div>
        </div>
        <button
          className="update-profile-btn"
          onClick={() => setShowModal(true)}
        >
          Update Profile
        </button>
        <Link to="/">
          <button className="back-btn">
            Back
          </button>
        </Link>
      </div>
      {
        showModal &&
        <div className="modal-overlay">
          <div className="profile-modal">
            <h2>
              Update Profile
            </h2>
            <form onSubmit={handleUpdate}>
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="New Password"
              />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
              />
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
              />
              <input
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
              />
              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
              />
              <input
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                placeholder="Pincode"
              />
              <div className="modal-buttons">
                <button type="submit">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>

            </form>

          </div>
        </div>
      }
    </div>
  );
};

export default Profile;