import React from 'react';

const Cart = ({ friends }) => {
  const totalSalary = friends.reduce((acc, salary) => acc + salary.salary, 0);
  console.log(friends);
  return (
    <div>
      <h3>Added Friends: {friends.length}</h3>
      <p>Added friends salary: ${totalSalary}</p>
    </div>
  );
};

export default Cart;
