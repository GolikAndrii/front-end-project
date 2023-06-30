import React, { useEffect } from 'react';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FaThumbsUp, FaMapMarker } from 'react-icons/fa';
import { useSelector } from "react-redux";


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Tooltip } from "./tools/Tooltip/Tooltip";
import Locate from "./features/locate/Locate";
import { selectLocateIP } from "./features/locate/selectors";
import { getlocationIP } from "./features/locate/locateSlice";
import { useAppDispatch } from "./store";
import MapComponent from './features/map/Map';
import { NavLink } from 'react-router-dom';
import { getWeather } from './features/weather/weatherSlice';
import { selectWeather } from './features/weather/selectors';


function App() {

    const value = useSelector(selectLocateIP);
    const weather = useSelector(selectWeather)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getlocationIP());

    }, [dispatch]);

    useEffect(() => {
        dispatch(getWeather({ latitude: value.latitude, longitude: value.longitude }));
    }, [dispatch, value]);

    const obj = {
        latitude: 0,
        longitude: 0
    };

    function getfromNavigator(): { latitude: number, longitude: number } {
        let latitude = 0;
        let longitude = 0;

        navigator.geolocation.getCurrentPosition(
            function (position): { latitude: number, longitude: number } {
                obj.latitude = position.coords.latitude;
                obj.longitude = position.coords.longitude;
                console.log(position.coords.longitude)
                // const hhh = document.getElementById("h1");
                //   // @ts-ignore
                // hhh.innerHTML = Math.round(obj.longitude) + "&#176;";
                return obj;
            });
        console.log("OBJ: " + obj)
        console.log(latitude, longitude)
        return { latitude, longitude }
    }


    function weatherSubscription(weathercode: number): any {
        switch (weathercode) {
            case 0:
                return "Clear sky"
                break;
            case 1:
                return "Mainly clear"
                break;
            case 2:
                return "partly cloudy"
                break;
            case 3:
                return "Mainly clear and overcast"
                break;
            case 45:
                return "Fog"
                break;
            case 48:
                return "Depositing rime fog"
                break;
            case 51:
                return "Drizzle: Light"
                break;
            case 53:
                return "Drizzle: Moderate"
                break;
            case 55:
                return "55	Drizzle: Dense intensity"
                break;
            case 56:
                return "Freezing Drizzle: Light"
                break;
            case 57:
                return "Freezing Drizzle: Dense intensity"
                break;
            case 61:
                return "Rain: Slight intensity"
                break;
            case 63:
                return "Rain: Moderate intensity"
                break;
            case 65:
                return "Rain: Heavy intensity"
                break;
            case 66:
                return "Freezing Rain: Light intensity"
                break;
            case 67:
                return "Freezing Rain: Heavy intensity"
                break;
            case 71:
                return "Snow fall: Slight intensity"
                break;
            case 73:
                return "Snow fall: Moderate intensity"
                break;
            case 75:
                return "Snow fall: Heavy intensity"
                break;
            case 77:
                return "Snow grains"
                break;
            case 80:
                return "Rain showers: Slight"
                break;
            case 81:
                return "Rain showers: Moderate"
                break;
            case 82:
                return "Rain showers: Violent"
                break;
            case 85:
                return "Snow showers slight"
                break;
            case 86:
                return "Snow showers heavy"
                break;
            case 95:
                return "Thunderstorm: Slight or moderate"
                break;
            case 96:
                return "Thunderstorm with slight hail"
                break;
            case 99:
                return "Thunderstorm with heavy hail"
                break;
            default:
                return "incorrect code"
                break;
        }
    }


    getfromNavigator()

    const coord = getfromNavigator()
    // getWeather()

    function transparent() {
        const myClass = document.getElementById("wrapper");
        // @ts-ignore
        myClass.classList.add("newMap");
        const cloud1 = document.getElementById("cloud1")
        // @ts-ignore
        cloud1.classList.add("newMap");
        const cloud2 = document.getElementById("cloud2")
        // @ts-ignore
        cloud2.classList.add("newMap");
        const cloud3 = document.getElementById("cloud3")
        // @ts-ignore
        cloud3.classList.add("newMap");
        const cloud4 = document.getElementById("cloud4")
        // @ts-ignore
        cloud4.classList.add("newMap");

        const myMap = document.getElementById("map");
        // @ts-ignore
        myMap.classList.add("map_new")

    }


    // @ts-ignore
    // @ts-ignore
    return (
        <>
            <Locate />

            <div className="cloud">
                <img id="cloud1" className="cloud1" src="img/cloud-01.png" alt="cloud_1" />
                <img id="cloud2" className="cloud2" src="img/cloud-02.png" alt="cloud_2" />
                <img id="cloud3" className="cloud3" src="img/cloud-03.png" alt="cloud_3" />
                <img id="cloud4" className="cloud4" src="img/cloud-04.png" alt="cloud_4" />
            </div>
            <div className="wrapper" id="wrapper">
                {/*              <div className="shape shape-1"></div>
              <div className="shape shape-2"></div>*/}

                <div className="container">
                    <div id="result">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>{value.city}</h2>
                            <NavLink to="/map">
                                <FontAwesomeIcon className="icon_map" icon={faLocationDot} />
                            </NavLink>
                        </div>
                        <h1 id="h1">{weather.current_weather.temperature + ""} &#176;</h1>

                        <div className="temperature-img">
                            <div>
                                <h4 className="weather">RAIN</h4>
                                <h4 className="desc">MODERATE RAIN</h4>
                            </div>

                        </div>

                        <div className="temp-container d-flex">
                            <div className="wind-speed d-flex">
                                <h4 className="temp"><span className="wind">wind speed:</span> 0.89 km/h</h4>
                                <h4 className="temp"><span className="humidity">humidity:</span> 80 %</h4>
                            </div>
                            <div className="d-flex min-max justify-content-between">
                                <div className="min-max__grad">
                                    <h4 className="title">min</h4>
                                    <h4 className="temp">19 &#176;</h4>
                                </div>
                                <div>
                                    <h4 className="title">max</h4>
                                    <h4 className="temp">20 &#176;</h4>
                                </div>
                            </div>

                        </div>

                        <div className="warm d-flex align-items-center justify-content-between">
                            <div>
                                <img onClick={() => { console.log("WARM") }} src="img/palma.png" width="100px" />
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p className="arrow">←</p>
                                <p className="i-want">I want to</p>
                                <p className="arrow">→</p>
                            </div>
                            <div>
                                <img onClick={() => { console.log("KALT") }} src="img/sneg.png" width="100px" />
                            </div>
                        </div>
                        <p className="ip">Your IP is: {value.ip_address}</p>
                    </div>
                </div>
            </div>

            <div id="map" className="map">
                <MapComponent />
                <div className="popUp">
                    <h1 className="temperature">20 &#176;</h1>

                    <div className="temperature-img">
                        <div>
                            <h4 className="weather">RAIN</h4>
                            <h4 className="desc">MODERATE RAIN</h4>
                        </div>
                    </div>
                    <hr />

                    <div className="temp-container-mini d-flex">
                        <div>
                            <h4 className="temp"><span className="wind">wind speed:</span></h4>
                            <h4>0.89 km/h</h4>
                        </div>
                        <div className="humidity_mini">
                            <h4 className="temp"><span className="humidity">humidity:</span></h4>
                            <h4> 80%</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
