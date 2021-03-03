import React from 'react';
import './App.css';
import AddFriends from './components/AddFriends/AddFriends';
import Header from './components/Header/Header';

const App = () => {
  return (
    <div>
      <Header />
      <AddFriends />
    </div>
  );
};

export default App;
