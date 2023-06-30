import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Weather from '../weather/types/Weather';


import * as api from './api';
import LocateState from './types/LocateState';

const initialState: LocateState = {
    coordinates: {
        ip_address: "no ip",
        latitude: 0,
        longitude: 0,
        city: "no city",
    },
    error: undefined
};

export const getlocationIP = createAsyncThunk(
    'locate/getlocationIP',
    () => api.getLocationIP()

);

const locateSlice = createSlice({
    name: 'locate',
    initialState,

    reducers: {
        // getIP(state, action: PayloadAction<LocateState>) {
        //     state = action.payload;
        // },
        resetError: (state) => {
            state.error = undefined;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getlocationIP.fulfilled, (state, action) => {
                // в action.payload придет результат из thunk
                state.coordinates = action.payload;
                // state = {
                //     ip_address: "work it?",
                //     latitude: 0,
                //     longitude: 0,
                //     city: "no city",
                // }
                console.log("slice");

            })
            .addCase(getlocationIP.rejected, (state) => {
                state.error = 'Error: products fetch rejected';
            });
    }
});

export const { resetError } = locateSlice.actions;
export default locateSlice.reducer;
