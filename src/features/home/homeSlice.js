import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurants: [],
  loading: false,
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        updateRestaurants: (state, action) => {
            console.log(action)
            state.restaurants = action.payload;
        },
        updateLoading: (state) => {
            state.loading = !state.loading
        }
    }
})

export const restaurantsList = (state) => state.restaurants;

export const { updateLoading, updateRestaurants } = homeSlice.actions;

export default homeSlice.reducer;
