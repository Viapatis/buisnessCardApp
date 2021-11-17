import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeaderState {
    menuItems: Record<string, string>
}
const initialState = {
    menuItems: { base: 'Base Information', education: 'Education', skills: 'Skills' }
} as HeaderState;


const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setMenuItem(state, action: PayloadAction<{ [key: string]: string }>) {
            state.menuItems = { ...state.menuItems, ...action.payload };
        },
    }
})
export default headerSlice.reducer;
export const { setMenuItem } = headerSlice.actions;