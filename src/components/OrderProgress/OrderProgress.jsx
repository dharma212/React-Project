import React from "react";
import "./OrderProgress.css";

import {
    FaClipboardList,
    FaCog,
    FaTruck,
    FaBoxOpen,
    FaTimesCircle
} from "react-icons/fa";

const OrderProgress = ({ status }) => {

    const isCancelled = status === "Cancelled";

    const steps = isCancelled
        ? [
            {
                name: "Pending",
                icon: <FaClipboardList />
            },
            {
                name: "Processing",
                icon: <FaCog />
            },
            {
                name: "Shipped",
                icon: <FaTruck />
            },
            {
                name: "Cancelled",
                icon: <FaTimesCircle />
            }
        ]
        : [
            {
                name: "Pending",
                icon: <FaClipboardList />
            },
            {
                name: "Processing",
                icon: <FaCog />
            },
            {
                name: "Shipped",
                icon: <FaTruck />
            },
            {
                name: "Delivered",
                icon: <FaBoxOpen />
            }
        ];

    const currentIndex = steps.findIndex(
        step => step.name === status
    );

    const progressWidth =
        currentIndex <= 0
            ? "0%"
            : `${(currentIndex / (steps.length - 1)) * 100}%`;

    return (
        <div className="tracking-container">

            <div className="progress-line">
                <div
                    className="progress-fill"
                    style={{
                        width: progressWidth,
                        background: isCancelled
                            ? "#dc3545"
                            : "#28a745"
                    }}
                />
            </div>

            <div className="tracking-steps">

                {steps.map((step, index) => (

                    <div
                        className="tracking-step"
                        key={step.name}
                    >

                        <div
                            className={
                                index <= currentIndex
                                    ? isCancelled
                                        ? "tracking-circle cancelled"
                                        : "tracking-circle active"
                                    : "tracking-circle"
                            }
                        >
                            {
                                index < currentIndex
                                    ? "✓"
                                    : step.icon
                            }
                        </div>

                        <h4
                            className={
                                index <= currentIndex
                                    ? isCancelled
                                        ? "cancelled-text"
                                        : "active-text"
                                    : ""
                            }
                        >
                            {step.name}
                        </h4>

                    </div>

                ))}

            </div>

        </div>
    );
};

export default OrderProgress;