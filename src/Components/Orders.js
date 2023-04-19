import React from "react";
import "../Style/Orders.css";

const Orders = (props) => {
  const { orders, handleOrderPicked, status, orderTotal } = props;

  return (
    <div className="container">
      <h1>Orders</h1>
      {status && <span className="status">Order Ready !</span>}
      <div className="ordersList">
        {orders.map((order, i) => {
          return (
            <div
              key={i}
              className="order"
              onClick={() => {
                handleOrderPicked(i);
              }}
              style={
                i === 0
                  ? {
                      backgroundColor: "rgb(170, 227, 182)",
                      border: "1.3px solid green",
                    }
                  : {
                      backgroundColor: "rgb(255, 218, 148",
                      border: "1.3px solid orange",
                    }
              }
            >
              <span>
                {i + 1} <input type="checkbox" checked={i === 0 && true} />
              </span>
              <p>{order.name}</p>
            </div>
          );
        })}
        <div className="amount">
          <span>Amount</span>
          <p>{orderTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Orders;
