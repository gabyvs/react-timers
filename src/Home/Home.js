import React from 'react';
import List from '../List/List';
import Create from '../Create/Create';

import './Home.css';

const Home = () => (
  <div className="home">
    <fieldset>
      <legend>Home</legend>
      <List />
      <Create />
    </fieldset>
  </div>
);

export default Home;