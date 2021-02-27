import React from "react";

const Cart = (props) => {
  const users = props.count;
  return (
    <div>
      <div className="cart">
        <h2>Total Addded: {props.count.length}</h2>
        {users.map((user) => (
          <li>
            {user.name.title} {user.name.first} Salary :{" "}
            <strong>{user.salary}</strong>
          </li>
        ))}
        {<h1>Total: {users.reduce((total, pd) => total + pd.salary, 0)}</h1>}
      </div>
    </div>
  );
};

export default Cart;
