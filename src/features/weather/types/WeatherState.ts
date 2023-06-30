import Weather from "../../weather/types/Weather";

export default interface WeatherState {
    error?: string,
    weather: Weather
}