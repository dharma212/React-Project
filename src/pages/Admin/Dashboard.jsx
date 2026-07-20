import React, { useContext, useMemo } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Cell } from "recharts";

import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";

import Sidebar from "./Sidebar";
import "./Dashboard.css";


const Dashboard = () => {


  const { products } = useContext(ProductContext);
  const { cart, wishlist } = useContext(CartContext);



  const users = JSON.parse(
    localStorage.getItem("usersDB") || "[]"
  ).map((user) => {

    let userEmail = "-";
    let userName = "Guest";
    let userPhone = "-";


    // email fix
    if (typeof user.email === "object" && user.email !== null) {
      userEmail = user.email.email || "-";
    } else {
      userEmail = user.email || "-";
    }


    // username fix
    if (typeof user.username === "object" && user.username !== null) {
      userName = user.username.name || "Guest";
    }
    else if (typeof user.name === "object" && user.name !== null) {
      userName = user.name.name || "Guest";
    }
    else {
      userName =
        user.username ||
        user.name ||
        userEmail ||
        "Guest";
    }


    // phone fix
    if (typeof user.phone === "object" && user.phone !== null) {
      userPhone = user.phone.phone || "-";
    }
    else {
      userPhone = user.phone || "-";
    }


    return {
      ...user,
      username: userName,
      email: userEmail,
      phone: userPhone
    };

  });

  const orders = JSON.parse(
    localStorage.getItem("orders") || "[]"
  );





  const pendingOrders = orders.filter(
    order =>
      order.status?.toLowerCase() === "pending"
  );



  const completedOrders = orders.filter(
    order =>
      order.status?.toLowerCase() === "completed"
  );



  const totalRevenue = orders.reduce(
    (sum, order) => {
      return sum + Number(order.total || 0);
    },
    0
  );





  const bestSellingProducts = useMemo(() => {


    let sales = {};



    orders.forEach(order => {


      (order.products || []).forEach(product => {


        const name =
          product.name ||
          product.productName ||
          "Unknown";



        const qty =
          Number(
            product.quantity ||
            product.qty ||
            1
          );



        sales[name] =
          (sales[name] || 0) + qty;



      });


    });



    return Object.keys(sales)
      .map(name => ({

        name,
        sold: sales[name]

      }))
      .sort(
        (a, b) => b.sold - a.sold
      )
      .slice(0, 5);



  }, [orders]);







  return (

    <div className="dashboard-layout">


      <Sidebar />


      <div className="dashboard-content">



        <h1>
          Admin Dashboard
        </h1>





        {/* CARDS */}

        <div className="dashboard-cards">



          <div className="dash-card blue">
            <h2>{products.length}</h2>
            <p>Total Products</p>
          </div>



          <div className="dash-card green">
            <h2>{users.length}</h2>
            <p>Total Users</p>
          </div>



          <div className="dash-card orange">
            <h2>{orders.length}</h2>
            <p>Total Orders</p>
          </div>



          <div className="dash-card red">
            <h2>{pendingOrders.length}</h2>
            <p>Pending Orders</p>
          </div>



          <div className="dash-card purple">
            <h2>
              ₹{totalRevenue.toLocaleString()}
            </h2>
            <p>Total Revenue</p>
          </div>



          <div className="dash-card dark">
            <h2>{cart.length}</h2>
            <p>Cart Items</p>
          </div>



        </div>








        <div className="dashboard-two-column">


          {/* BEST SELLING CHART */}

          <div className="chart-box">

            <h2>
              Best Selling Products
            </h2>


            <ResponsiveContainer
              width="100%"
              height={400}
            >

              <BarChart
                data={bestSellingProducts}
                margin={{
                  top: 20,
                  right: 20,
                  left: 10,
                  bottom: 60
                }}
              >

                <CartesianGrid
                  strokeDasharray="4 4"
                />

                <XAxis
                  dataKey="name"
                  angle={-35}
                  textAnchor="end"
                  interval={0}
                  tickFormatter={(name) =>
                    name.length > 10
                      ? name.substring(0, 10) + "..."
                      : name
                  }
                />

                <YAxis />

                <Tooltip />

                <Bar
                  dataKey="sold"
                  radius={[8, 8, 0, 0]}
                >
                  {
                    bestSellingProducts.map((item, index) => (
                      <Cell
                        key={index}
                        fill={
                          [
                            "#2563eb",
                            "#16a34a",
                            "#f97316",
                            "#9333ea",
                            "#dc2626"
                          ][index]
                        }
                      />
                    ))
                  }
                </Bar>

              </BarChart>


            </ResponsiveContainer>


          </div>





          {/* PENDING ORDER TABLE */}


          <div className="table-card pending-box">


            <h2>
              Pending Orders
            </h2>



            <table className="dashboard-table">


              <thead>

                <tr>

                  <th>
                    ID
                  </th>

                  <th>
                    Customer
                  </th>

                  <th>
                    Amount
                  </th>

                  <th>
                    Status
                  </th>

                </tr>

              </thead>



              <tbody>


                {
                  pendingOrders.length > 0 ?

                    pendingOrders.map(order => (

                      <tr key={order.id}>


                        <td>
                          {order.id}
                        </td>


                        <td>

                          {
                            typeof order.user?.name === "object"
                              ? order.user.name?.name
                              : order.user?.name ||
                              order.user?.username ||
                              order.user?.email ||
                              "Guest"
                          }

                        </td>


                        <td>
                          ₹{order.total}
                        </td>


                        <td>

                          <span className="pending-status">
                            {order.status}
                          </span>

                        </td>


                      </tr>

                    ))

                    :

                    <tr>
                      <td colSpan="4">
                        No Pending Orders
                      </td>
                    </tr>


                }


              </tbody>


            </table>


          </div>


        </div>


        {/* USERS */}



        <div className="table-card">


          <h2>
            Recent Users
          </h2>



          <table>


            <thead>

              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>


            </thead>



            <tbody>

              {
                users
                  .slice()
                  .reverse()
                  .map((user, index) => (

                    <tr key={index}>


                      <td>
                        {index + 1}
                      </td>


                      <td>
                        {user.username}
                      </td>


                      <td>
                        {user.email}
                      </td>


                    </tr>

                  ))
              }


            </tbody>
          </table>



        </div>









        {/* ORDERS */}


      </div>


    </div>


  )

}


export default Dashboard;