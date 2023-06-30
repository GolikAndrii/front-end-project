import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "./rootSlice";
import "leaflet/dist/leaflet.css";
import L from "leaflet"

const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png"
});

const zoom = 12;

function ChangeView() {

    const coords = useSelector((state: any) => state.root.userData);

    const map = useMap();
    map.setView([coords.latitude, coords.longitude], zoom);

    return null;
}

const MapComponent = () => {
    const dispatch = useDispatch();
    // @ts-ignore
    const coord = useSelector((state: any) => state.root.userData);

    useEffect(() => {
        if (navigator?.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                if (location) dispatch(getUserData(location.coords));
            });
        }
    }, []);



    // getWeather()
    function weatherSubscription(weathercode: any) {
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
                return "and overcast"
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

    // const { latitude, longitude } = coord


    // getWeather({[coord.latitude, coord.longitude})



    if (!coord) return null;
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <>
            {/*<p id="lat">{[coord.latitude]}</p>*/}
            {/*<p id="long">{[coord.longitude]}</p>*/}
            {/*<p id="weather">weather</p>*/}

            <MapContainer
                // @ts-ignore
                center={[51.6, -0.09]}
                zoom={zoom}
                style={{ height: "100vh" }}
            >
                <TileLayer
                    // @ts-ignore
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[coord.latitude, coord.longitude]} icon={icon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <ChangeView />
            </MapContainer>
        </>
    );
};

export default MapComponent;
