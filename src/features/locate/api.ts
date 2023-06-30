import Coordinates from "./types/Coordinates";

export async function getLocationIP(): Promise<Coordinates> {
    const res = await fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=1ff461371eea478a9da941e993ecbbc2');
    const obj = res.json();
    return obj;
}