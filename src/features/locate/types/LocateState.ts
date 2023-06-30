import Coordinates from "./Coordinates";
import Weather from "../../weather/types/Weather";

export default interface LocateState {
    coordinates: Coordinates,
    error?: string,
    current_weather: Weather
}
