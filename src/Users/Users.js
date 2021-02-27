import React, { useState } from "react";
import fakeData from "../fakeData/fakeUser.json";
import "./Users.css";
import Information from "./../Information/Information";
import Cart from "./../Cart/Cart";

const Users = (props) => {
  const [users, setUsers] = useState(fakeData);
  const [count, setCount] = useState([]);
  console.log(count);
  const addClickhandler = (props) => {
    const newCart = [...count, props];
    setCount(newCart);
  };

  return (
    <div className="users-main-div">
      <div className="user-info">
        {users.map((user) => (
          <Information
            user={user}
            key={user.email}
            addClickhandler={addClickhandler}
          ></Information>
        ))}
      </div>
      <div className="user-cart">
        <Cart count={count}></Cart>
      </div>
    </div>
  );
};

export default Users;
