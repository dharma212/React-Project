export const saveUser = (user, rememberMe = false) => {

  if (rememberMe) {

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

  } 
  else {

    sessionStorage.setItem(
      "user",
      JSON.stringify(user)
    );

  }

};

export const getUser = () => {

  const user =
    localStorage.getItem("user") ||
    sessionStorage.getItem("user");


  return user 
    ? JSON.parse(user) 
    : null;

};

export const removeUser = () => {

  localStorage.removeItem("user");

  sessionStorage.removeItem("user");

};

export const registerUser = (user) => {

  const users = JSON.parse(
    localStorage.getItem('usersDB') || '[]'
  );


  const existingUser = users.find(
    u => u.email === user.email
  );


  if (existingUser) {

    return {
      success: false,
      message: "User already exists"
    };

  }


console.log("REGISTER USER DATA:", user);
  const newUser = {

    id: Date.now(),

    username: user.name,

    email: user.email,

    password: user.password,

    phone: user.phone,

    address: "",

    city: "",

    state: "",

    pincode: "",

    joinedAt: new Date().toISOString(),

    role:
      user.email === "admin@gmail.com"
        ? "admin"
        : "user"

  };



  users.push(newUser);



  localStorage.setItem(
    "usersDB",
    JSON.stringify(users)
  );



  return {

    success: true,

    user: newUser

  };


};
export const loginUser = (email, password) => {

  const users = JSON.parse(
    localStorage.getItem('usersDB') || '[]'
  );


  const user = users.find(
    u =>
      u.email === email &&
      u.password === password
  );



  if (user) {

    return {
      success: true,
      user
    };

}



  return {
    success: false,
    message: "Invalid credentials"
  };


};