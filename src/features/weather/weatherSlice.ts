import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Weather from '../weather/types/Weather';
import * as api from './api';
import CoordinatesWeather from './types/CoordinatesWeather';
import WeatherState from './types/WeatherState';

const initialState: WeatherState = {
    weather: {
        current_weather: {
            temperature: 0,
            windspeed: 0,
            weathercode: 0
        }
    },
    error: undefined
};

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    ({ latitude, longitude }: CoordinatesWeather) => api.getWeather(latitude, longitude)
);

const weatherSlice = createSlice({
    name: 'weather',
    initialState,

    reducers: {
        resetError: (state) => {
            state.error = undefined;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.fulfilled, (state, action) => {
                // в action.payload придет результат из thunk
                state.weather = action.payload;
            })
            .addCase(getWeather.rejected, (state) => {
                state.error = 'Error: products fetch rejected';
            });
    }
});

export const { resetError } = weatherSlice.actions;
export default weatherSlice.reducer;
