import React from "react";
import { HashRouter as Router,Route,Switch } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import MainScreen from './screens/MainScreen'
import BlogScreen from './screens/BlogScreen'
import Header from "./Header";
import Footer from "./Footer";
import Particles from 'react-particles-js';



function App() {
  return (
    <div>     
        <Particles
          style={{ position: "absolute" }}
          height="95%"
          width="95%"
          params={{
            particles: {
              color: {
                value: "#99ccff"
              },
              line_linked: {
                color: {
                  value: "#ffffff"
                }
              },
              number: {
                value: 200
              },
              size: {
                value: 4
              }
            }
          }}
        />

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
