<h1 align="center">E-Commerce Pro</h1>
<div align="center">
Modern React E-Commerce Platform with Admin Dashboard, Analytics & Role-Based Authentication
</div>
<p align="center">
  <img src="https://img.shields.io/badge/React-19-blue?logo=react">
  <img src="https://img.shields.io/badge/Vite-8-purple?logo=vite">
  <img src="https://img.shields.io/badge/React_Router-v7-red?logo=react-router">
  <img src="https://img.shields.io/badge/Context_API-State_Management-green">
  <img src="https://img.shields.io/badge/Responsive-Design-orange">
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel">
</p>

---

## 🌟 Project Overview

E-Commerce Pro is a fully responsive online shopping platform built using React.js and Vite. The application delivers a complete shopping experience for customers while providing a powerful Admin Dashboard for managing products, users, orders, carts, wishlists, and analytics.

Unlike basic CRUD projects, this application simulates real-world e-commerce workflows including authentication, order management, checkout processing, payment selection, role-based access control, dashboard analytics, and responsive mobile search experiences.

---

# 🎯 Why This Project?

Most beginner e-commerce projects only provide product listings and a shopping cart.

This project goes much further by implementing:

 Customer Shopping Experience
* User Registration
* User Login & Logout
* Remember Me Authentication
* User Profile Management
* Product Listing Page
* Product Details Page
* Add to Cart
* Wishlist Management
* Checkout Process
* Custom Payment Page
* Order Placement
* Order History
* Order Details Tracking
* Mobile Responsive Design

---

# 🏗️ System Architecture

```text
Customer
    │
    ▼
React Frontend
    │
    ├── Authentication
    ├── Product Management
    ├── Cart System
    ├── Wishlist System
    ├── Checkout System
    ├── Order Management
    └── Payment Module
            │
            ▼
      Local Storage
            │
            ▼
     Admin Dashboard
```

---

# ✨ Core Features

## 👤 Customer Module

| Feature           | Status |
| ----------------- | ------ |
| User Registration | Yes      |
| Login System      | Yes      |
| Remember Me       | Yes      |
| User Profile      | Yes      |
| Product Browsing  | Yes      |
| Product Details   | Yes      |
| Add To Cart       | Yes      |
| Wishlist          | Yes      |
| Checkout          | Yes      |
| Payment Page      | Yes      |
| Order Placement   | Yes      |
| Order History     | Yes      |
| Order Tracking    | Yes      |

---

## 🔐 Authentication System

The application uses a custom authentication flow built with Context API, Local Storage, and Session Storage.


| Feature                 | Description                            |
| ----------------------- | -------------------------------------- |
| Signup                  | Create a new account                   |
| Login                   | Secure user login                      |
| Remember Me             | Persistent login using Local Storage   |
| Session Login           | Auto logout when browser closes        |
| Password Strength Meter | Password validation feedback           |
| Protected Routes        | Restrict access to authenticated users |
| Role Based Access       | Separate Admin and User permissions    |

### User Roles

| Role  | Permissions            |
| ----- | ---------------------- |
| User  | Shop, Wishlist, Orders |
| Admin | Full Dashboard Access  |

---

# 🔍 Smart Search Experience

### Desktop Users

* Instant Product Search
* Live Search Results
* Fast Product Discovery

### Mobile Users

* Search History
* Popular Products
* Recent Searches
* Search Suggestions

This creates a completely different optimized experience for mobile and desktop users.

---

# 🛒 Shopping Workflow

```text
Browse Products
        │
        ▼
View Product Details
        │
        ▼
Add To Cart
        │
        ▼
Checkout
        │
        ▼
Select Payment Method
        │
        ▼
Place Order
        │
        ▼
Track Order
```

---

# 💳 Payment Module

Custom-designed payment interface built entirely using React and CSS.

### Available Payment Methods

* 💳 Credit Card
* 💳 Debit Card
* 📱 UPI
* 🏦 Net Banking
* 💵 Cash On Delivery

> This module simulates a real-world checkout experience.

---

# 👨‍💼 Admin Dashboard

The Admin Dashboard acts as the control center of the application.

---

## 📦 Product Management

* Add Product
* Edit Product
* Delete Product
* Product Listing Control

---

## 👥 User Management

* View Registered Users
* Manage User Information
* Track User Activity

---

## 📋 Order Management

* View Orders
* Track Order Status
* Order Details Monitoring

---

## 🛒 Cart Monitoring

Admins can monitor:

* User Cart Data
* Cart Activity
* Product Demand

---

## ❤️ Wishlist Monitoring

Admins can track:

* User Wishlist Activity
* Popular Wishlist Products

---

# 📊 Analytics Dashboard

Built using Recharts.

### Dashboard Insights

📈 Best Selling Products

📈 Product Performance Analysis

📈 Sales Visualization

📈 Order Statistics

This transforms the application from a simple e-commerce project into a mini business management system.

---

# 🛠️ Technology Stack

| Category         | Technology                      |
| ---------------- | ------------------------------- |
| Frontend         | React 19                        |
| Build Tool       | Vite                            |
| Routing          | React Router DOM                |
| State Management | Context API                     |
| Charts           | Recharts                        |
| Icons            | React Icons                     |
| Skeleton Loader  | React Loading Skeleton          |
| Authentication   | Local Storage + Session Storage |
| Deployment       | Vercel                          |

---


# ⚙ Installation Guide

## Clone Repository

```bash
git clone https://github.com/dharma212/React-Project.git
```

Move into project:

```bash
cd react-ecommerce-beginner
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:5173
```

---

# 📦 Build Project

Create production build:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```
---

# 📂 Project Structure

```text
src
├── assets
├── components
│   ├── Navbar
│   ├── Footer
│   ├── ProductCard
│   ├── Search
│   ├── OrderProgress
│   └── skeletons
│
├── context
├── data
├── pages
├── router
└── utils
```

---

# 📱 Responsive Design

The application is fully optimized for:

* Desktop
* Laptop
* Tablet
* Mobile Devices

Special attention has been given to the mobile search experience and responsive navigation.

---

# 🔮 Future Roadmap

### Authentication

* Google Login
* Facebook Login
* Email OTP Verification
* Two-Factor Authentication

### Shopping Features

* Product Reviews
* Product Ratings
* Coupon System
* Recently Viewed Products

### Admin Features

* Revenue Dashboard
* Inventory Tracking
* Sales Reports

### Backend Integration

* Django REST Framework
* PostgreSQL
* JWT Authentication
* Razorpay Integration

---

# 👨‍💻 Developer

### Dharm Bhalodiya

Frontend Developer | React Developer

Passionate about building responsive web applications, modern user interfaces, and scalable frontend architectures.

---

# ⭐ If You Like This Project

Give this repository a star and support the project.
