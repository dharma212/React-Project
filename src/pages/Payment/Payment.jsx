import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";
import { useToast } from "../../context/ToastContext";
import PaymentSkeleton from "../../components/skeletons/PaymentSkeleton";
import {
    FaMobileAlt,
    FaCreditCard
} from "react-icons/fa";

import {
    FaBuildingColumns,
    FaMoneyBillTransfer
} from "react-icons/fa6";
const Payment = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 800);


        return () => clearTimeout(timer);


    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const { showToast } = useToast();
    const {
        cart = [],
        address,
        total,
        user
    } = location.state || {};

    const [paymentMethod, setPaymentMethod] = useState("");
    const [upiId, setUpiId] = useState("");

    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: ""
    });

    const [bankDetails, setBankDetails] = useState({
        bankName: "",
        accountNumber: ""
    });

    const handlePlaceOrder = () => {

        if (!paymentMethod) {
            showToast("Please select a payment method", "error");
            return;
        }

        if (paymentMethod === "UPI") {
            if (!upiId.trim() || !upiId.includes("@")) {
                showToast("Please enter a valid UPI ID", "error");
                return;
            }
        }

        if (paymentMethod === "Card") {

            if (cardDetails.cardNumber.length !== 16) {
                showToast("Card number must be 16 digits", "error");
                return;
            }

            if (!cardDetails.cardName.trim()) {
                showToast("Enter card holder name", "error");
                return;
            }

            if (cardDetails.expiry.length !== 5) {
                showToast("Enter valid expiry date", "error");
                return;
            }

            if (cardDetails.cvv.length !== 3) {
                showToast("CVV must be 3 digits", "error");
                return;
            }
        }

        if (paymentMethod === "Net Banking") {

            if (!bankDetails.bankName) {
                showToast("Select a bank", "error");
                return;
            }

            if (bankDetails.accountNumber.length < 8) {
                showToast("Enter valid account number", "error");
                return;
            }
        }

        const newOrder = {
            id: Date.now(),
            products: cart,
            total,
            address,
            paymentMethod,
            paymentInfo:
                paymentMethod === "UPI"
                    ? {
                        upiId
                    }
                    : paymentMethod === "Card"
                        ? {
                            cardNumber:
                                "**** **** **** " +
                                cardDetails.cardNumber.slice(-4)
                        }
                        : paymentMethod === "Net Banking"
                            ? {
                                bankName: bankDetails.bankName,
                                accountNumber:
                                    "XXXXXX" +
                                    bankDetails.accountNumber.slice(-4)
                            }
                            : {},
            status: "Pending",
            date: new Date().toLocaleDateString(),
            user
        };

        const orders =
            JSON.parse(localStorage.getItem("orders")) || [];

        orders.push(newOrder);

        localStorage.setItem(
            "orders",
            JSON.stringify(orders)
        );

        localStorage.removeItem("cartDB");

        showToast("Payment Successful!", "success");

        navigate("/orders");
    };

    if (loading) {

        return <PaymentSkeleton />;

    }
    return (

        <div className="payment-container">

            <h1 className="payment-title">
                Payment & Order Review
            </h1>

            <div className="payment-layout">

                {/* LEFT SIDE */}

                <div className="payment-left">

                    <div className="payment-card">

                        <h2>Order Summary</h2>

                        {
                            cart.map((item) => (

                                <div
                                    className="payment-product"
                                    key={item.id}
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                    />

                                    <div className="payment-product-info">


                                        <h3>
                                            {item.name.length > 70
                                                ? item.name.substring(0, 70) + "..."
                                                : item.name}
                                        </h3>

                                        <p>
                                            Quantity: {item.quantity}
                                        </p>

                                        <p>
                                            Price: ₹{item.price}
                                        </p>

                                        <p className="subtotal">
                                            Subtotal:
                                            ₹{item.price * item.quantity}
                                        </p>

                                    </div>

                                </div>

                            ))
                        }

                    </div>



                    <div className="payment-card">

                        <h2>Delivery Address</h2>

                        <p>
                            {address}
                        </p>

                    </div>

                </div>



                {/* RIGHT SIDE */}

                <div className="payment-right">

                    <div className="payment-card">
                        <h2>Select Payment Method</h2>

                        <div className="payment-methods-grid">

                            <div
                                className={`payment-method-card ${paymentMethod === "UPI" ? "active" : ""
                                    }`}
                                onClick={() => setPaymentMethod("UPI")}
                            >
                                <div className="payment-icon">    <FaMobileAlt />
                                </div>
                                <h3>UPI</h3>
                                <p>Google Pay, PhonePe, Paytm</p>
                            </div>

                            <div
                                className={`payment-method-card ${paymentMethod === "Card" ? "active" : ""
                                    }`}
                                onClick={() => setPaymentMethod("Card")}
                            >
                                <div className="payment-icon">    <FaCreditCard />
                                </div>
                                <h3>Credit / Debit Card</h3>
                                <p>Visa, MasterCard, RuPay</p>
                            </div>

                            <div
                                className={`payment-method-card ${paymentMethod === "Net Banking" ? "active" : ""
                                    }`}
                                onClick={() => setPaymentMethod("Net Banking")}
                            >
                                <div className="payment-icon">            <FaBuildingColumns />

                                </div>
                                <h3>Net Banking</h3>
                                <p>All Major Banks</p>
                            </div>

                            <div
                                className={`payment-method-card ${paymentMethod === "Cash On Delivery"
                                    ? "active"
                                    : ""
                                    }`}
                                onClick={() =>
                                    setPaymentMethod("Cash On Delivery")
                                }
                            >
                                <div className="payment-icon">        <FaMoneyBillTransfer />
                                </div>
                                <h3>Cash On Delivery</h3>
                                <p>Pay when order arrives</p>
                            </div>

                        </div>
                        {paymentMethod === "UPI" && (
                            <div className="payment-form">
                                <h3>UPI Payment</h3>

                                <input
                                    type="text"
                                    placeholder="example@paytm"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                />
                            </div>
                        )}
                        {paymentMethod === "Card" && (
                            <div className="payment-form">

                                <h3>Card Details</h3>

                                <input
                                    type="text"
                                    placeholder="Card Number"
                                    maxLength={16}
                                    value={cardDetails.cardNumber}
                                    onChange={(e) =>
                                        setCardDetails({
                                            ...cardDetails,
                                            cardNumber: e.target.value.replace(/\D/g, "")
                                        })
                                    }
                                />

                                <input
                                    type="text"
                                    placeholder="Card Holder Name"
                                    value={cardDetails.cardName}
                                    onChange={(e) =>
                                        setCardDetails({
                                            ...cardDetails,
                                            cardName: e.target.value
                                        })
                                    }
                                />

                                <div className="card-row">

                                    <input
                                        type="text"
                                        placeholder="MM/YY"
                                        maxLength={5}
                                        value={cardDetails.expiry}
                                        onChange={(e) =>
                                            setCardDetails({
                                                ...cardDetails,
                                                expiry: e.target.value
                                            })
                                        }
                                    />

                                    <input
                                        type="password"
                                        placeholder="CVV"
                                        maxLength={3}
                                        value={cardDetails.cvv}
                                        onChange={(e) =>
                                            setCardDetails({
                                                ...cardDetails,
                                                cvv: e.target.value.replace(/\D/g, "")
                                            })
                                        }
                                    />

                                </div>

                            </div>
                        )}
                        {paymentMethod === "Net Banking" && (
                            <div className="payment-form">

                                <h3>Bank Details</h3>

                                <select
                                    value={bankDetails.bankName}
                                    onChange={(e) =>
                                        setBankDetails({
                                            ...bankDetails,
                                            bankName: e.target.value
                                        })
                                    }
                                >
                                    <option value="">Select Bank</option>
                                    <option>State Bank of India</option>
                                    <option>HDFC Bank</option>
                                    <option>ICICI Bank</option>
                                    <option>Axis Bank</option>
                                </select>

                                <input
                                    type="text"
                                    placeholder="Account Number"
                                    value={bankDetails.accountNumber}
                                    onChange={(e) =>
                                        setBankDetails({
                                            ...bankDetails,
                                            accountNumber: e.target.value.replace(/\D/g, "")
                                        })
                                    }
                                />

                            </div>
                        )}
                    </div>


                    <div className="payment-card">

                        <h2>Price Details</h2>

                        <div className="price-row">

                            <span>
                                Products Total
                            </span>

                            <span>
                                ₹{Number(total).toFixed(2)}
                            </span>

                        </div>

                        <div className="price-row">

                            <span>
                                Delivery Charges
                            </span>

                            <span>
                                FREE
                            </span>

                        </div>

                        <hr />

                        <div className="total-row">

                            <span>
                                Total Amount
                            </span>

                            <span>
                                ₹{Number(total).toFixed(2)}
                            </span>

                        </div>

                        <button
                            className="place-order-btn"
                            onClick={handlePlaceOrder}
                        >

                            PLACE ORDER

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
};

export default Payment;