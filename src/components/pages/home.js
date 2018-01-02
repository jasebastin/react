import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    return (
      <div className="main">
        <img className="home-image" src="images/image1.jpg" alt="Welcome to Anto's"/>        
        <div className="welcome-text">
          Welcome to Anto's Services !!!
        </div>
      </div>
    );
  }
}

export default Homepage;
