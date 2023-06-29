import React from 'react';
import {Badge, Button} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <>
          <div className="wrapper">
              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>
                <div className="container">
                            <div id="result">
                                      <h2>KYIV</h2>
                                      <div className="temperature-img">
                                          <div>
                                              <h4 className="weather">RAIN</h4>
                                              <h4 className="desc">MODERATE RAIN</h4>
                                          </div>
                                          <img src="https://openweathermap.org/img/w/" alt="img_weather" />
                                      </div>
                                      <h1>20 &#176;</h1>
                                      <div className="temp-container">
                                          <div>
                                              <h4 className="temp"><span className="wind">wind speed:</span> 0.89 km/h</h4>
                                              <h4 className="temp"><span className="humidity">humidity:</span> 80 %</h4>
                                          </div>
                                          <div>
                                              <h4 className="title">min</h4>
                                              <h4 className="temp">19 &#176;</h4>
                                          </div>
                                          <div>
                                              <h4 className="title">max</h4>
                                              <h4 className="temp">20 &#176;</h4>
                                          </div>

                                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default App;
