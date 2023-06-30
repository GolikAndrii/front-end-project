import Weather from "./types/Weather";

export async function getWeather(latitude: number, longitude: number): Promise<Weather> {
    const linkWeather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    const response = await fetch(linkWeather);
    return response.json();
}
