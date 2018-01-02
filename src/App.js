import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
//components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/home";
import Servicespage from "./components/pages/services";
import Menupage from "./components/pages/menu";
import Gallerypage from "./components/pages/gallery";
import Contactpage from "./components/pages/contact";

//includes
import "./Assets/css/app.min.css";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App"> 
        <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/services" component={Servicespage} />
          <Route exact path="/menu" component={Menupage} />
          <Route exact path="/gallery" component={Gallerypage} />
          <Route exact path="/contact" component={Contactpage} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
