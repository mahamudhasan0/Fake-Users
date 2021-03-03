import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Friend = (props) => {
  const { name, username, email, phone, salary, img } = props.user;
  const handleAddBtn = props.handleAddBtn;

  return (
    <div className="Friend">
      <div className="image">
        <img src={img} alt="user-img" />
      </div>
      <div className="details">
        <h2>{name}</h2>
        <p>@{username}</p>
        <p>email: {email}</p>
        <p>{phone}</p>
        <div className="selery-btn">
          <span>${salary}</span>
          <button type="button" onClick={() => handleAddBtn(props.user)}>
            <FontAwesomeIcon icon={faUserPlus} /> Add Friend
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
