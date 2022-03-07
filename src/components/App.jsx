import React from "react";
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import MainScreen from './screens/MainScreen'
import BlogScreen from './screens/BlogScreen'
import Header from "./Header";
import Footer from "./Footer";
import Snowfall from 'react-snowfall'
// import Particles from 'react-particles-js';
// import Particles from "react-tsparticles";
// import { tsParticles } from "tsparticles";
// import Particles from "react-tsparticles";

function App() {
  return (
    <div>     
        <div   style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}>
          <Snowfall color="#dee4fd" snowflakeCount={230}  />
        </div>
        
        <Router>
          <Header />
          <Switch>
            {/* <Route path="/blog" component = {BlogScreen}/> */}
            <Route  path="/" component = {MainScreen} />
          </Switch>
          <Footer />
        </Router> 
    </div>
  );
}

export default App;
