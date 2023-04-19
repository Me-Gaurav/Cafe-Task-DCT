import React from "react";
import "../Style/Menu.css";

const Menu = (props) => {
  const { menuItems } = props;

  return (
    <div className="container">
      <h1>Cafe Order Management</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, i) => {
            return (
              <tr key={i}>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Menu;
