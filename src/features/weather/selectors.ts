import { RootState } from '../../store';
import Weather from './types/Weather';

import WeatherState from './types/WeatherState';

export const selectWeather = (state: RootState): Weather => state.weather.weather;
