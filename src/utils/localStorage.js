export const saveUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem('user');
};

export const registerUser = (email, password) => {
  // In a real app, you'd check if user exists. We simulate it here.
  const users = JSON.parse(localStorage.getItem('usersDB') || '[]');
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return { success: false, message: 'User already exists' };
  }
const newUser = {
  email,
  password,
  role: email === "admin@gmail.com" ? "admin" : "user"
};  users.push(newUser);
  localStorage.setItem('usersDB', JSON.stringify(users));
  return { success: true, user: newUser };
};

export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem('usersDB') || '[]');
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    saveUser(user);
    return { success: true, user };
  }
  return { success: false, message: 'Invalid credentials' };
};
