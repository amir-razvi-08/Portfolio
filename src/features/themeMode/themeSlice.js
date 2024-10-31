import { createSlice } from "@reduxjs/toolkit";
 
const themeSlice = createSlice({
    name:'theme',
    initialState:{
        darkMode:true,
    },
    reducers:{
        toggleTheme:(state)=>{
            state.darkMode=!state.darkMode;
            console.log("hello");
        },
    },
});

export const {toggleTheme} =themeSlice.actions;
export default themeSlice.reducer;