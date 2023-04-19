import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Components/Menu";
import Search from "./Components/Search";
import Orders from "./Components/Orders";

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);
  const [status, setStatus] = useState(false);

  console.log(orders);

  const orderTotal = orders.reduce((pv, cv) => {
    return pv + cv.price;
  }, 0);

  console.log(orderTotal);

  const handleAddItem = (searchedItem) => {
    setOrders((current) => [...current, ...searchedItem]);
    setShowOrders(true);
  };

  const handleOrderPicked = (i) => {
    const newOrders = orders.filter((index, order) => {
      return order !== i;
    });
    setStatus(true);
    setOrders(newOrders);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3085/api/menuItems")
      .then((res) => {
        setMenuItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="appContainer">
      <Menu menuItems={menuItems} />
      <Search
        handleAddItem={handleAddItem}
        handleOrderPicked={handleOrderPicked}
      />
      {showOrders && (
        <Orders
          orders={orders}
          handleOrderPicked={handleOrderPicked}
          status={status}
          orderTotal={orderTotal}
        />
      )}
    </div>
  );
};

export default App;
