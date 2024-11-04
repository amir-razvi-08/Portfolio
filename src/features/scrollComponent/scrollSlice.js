import { createSlice } from '@reduxjs/toolkit';

const scrollSlice = createSlice({
    name: 'activeSection',
    initialState: { currentSection: '' },
    reducers: {
        updateSection: (state, action) => {
         
            state.currentSection = action.payload;
        },
        scrollToSection: (state, action) => {
            const sectionId = action.payload;
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                state.currentSection = sectionId;
                
            }
        },
    },
});

export const { updateSection, scrollToSection } = scrollSlice.actions;
export default scrollSlice.reducer;
