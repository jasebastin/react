import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="main">
        <div className="contact-us">
            <div className="inner-box">
                <div>
                    Contact Us
                </div>
                <div className="address">
                    <div>12A/1, Senthil Nagar</div>
                    <div>Palayamkottai</div>
                    <div>Tirunelveli - 627002</div>
                </div>
                <div className="phone">
                    9842173930
                </div>
                <div className="email">
                    antoservices@gmail.com
                </div>
            </div>
            <div className="user-details">
                <form>
                    Your Name
                    <input type="text"/>
                </form>
            </div>
        </div>        
      </div>
    );
  }
}

export default Contact;
