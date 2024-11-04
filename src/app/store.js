import {configureStore} from '@reduxjs/toolkit';
import themeReducer from '../features/themeMode/themeSlice';
import activeSectionReducer from '../features/scrollComponent/scrollSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        activeSection: activeSectionReducer,
    },
});