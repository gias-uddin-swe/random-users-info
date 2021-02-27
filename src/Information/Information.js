import React, { useState } from "react";
import "./Information.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
const Information = (props) => {
  const {
    name,
    salary,
    gender,
    email,
    phone,
    registered,
    login,
    picture,
    location,
  } = props.user;
  const [isClicked, setClick] = useState(false);
  const addClick = props.addClickhandler;
  return (
    <div>
      <div className="information">
        <div className="cart">
          <img src={picture.large} alt="" />
          <p>
            Name: {name.title}_{name.first}_{name.last}
          </p>
          <p>Gender: {gender}</p>
          <p>UserName: {login.username}</p>
          <p>
            Salary: <strong>{salary}</strong>{" "}
          </p>
          <p>Country: {location.country}</p>
          <p>City: {location.city}</p>
          <p>Email: {email}</p>
          <p>Phone: {phone}</p>
          <p>Age: {registered.age}</p>
          <button
            onClick={() => {
              addClick(props.user)
              setClick(true)
            }}
          >
            <FontAwesomeIcon icon={faUserPlus} />{" "}
            {isClicked ? "Added" : "Add me"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
