import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import './AddFriends.css';
import userData from '../../user.json';
import Cart from '../Cart/Cart';

const AddFriends = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleAddBtn = (friend) => {
    const newFriend = [...friends, friend];
    setFriends(newFriend);
  };

  return (
    <div className="AddFriends container">
      <div className="friend-content">
        {users.map((user) => (
          <Friend user={user} handleAddBtn={handleAddBtn} key={user.id} />
        ))}
      </div>
      <div className="friend-count">
        <Cart friends={friends} />
      </div>
    </div>
  );
};

export default AddFriends;
