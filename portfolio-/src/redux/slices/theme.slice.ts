import { createSlice } from "@reduxjs/toolkit";

interface theme {
    theme: "light" | "dark",
}
const initialState: theme = {
    theme: "light",
}
/**THEME DETAILS SLICE */
export const ThemeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, { payload }) => {
            state.theme = payload;
        },
    },
});

/**ACTIONS FOR SLICE*/
export const { setTheme, } = ThemeSlice.actions;
