import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserInformation } from '../../lib/interfaces'
import api from '../../lib/api'
export interface MainState {
    userInfo: UserInformation | null
    requestInfo: {
        status: string,
        err: string,
        curId: string
    }
}
const initialState = {
    userInfo: null,
    requestInfo: {
        status: '',
        err: '',
        curId: ''
    }
} as MainState;

export const getUserInfo = createAsyncThunk<
    UserInformation,
    undefined,
    { rejectValue: string }
>(
    'main/getUserInfo',
    async (param, thunkAPI) => {
        try {
            return await api.getUserInfo();
        }
        catch (err) {
            return thunkAPI.rejectWithValue((err as Error).message);
        }
    }
)
const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getUserInfo.fulfilled, (state, action) => {
            state.userInfo = action.payload;
            state.requestInfo = {
                status: action.meta.requestStatus,
                err: '',
                curId: action.meta.requestId
            };
        })
        builder.addCase(getUserInfo.pending, (state, action) => {
            state.requestInfo = {
                status: action.meta.requestStatus,
                err: '',
                curId: action.meta.requestId
            }
        })
        builder.addCase(getUserInfo.rejected, (state, action) => {
            state.requestInfo = {
                status: action.meta.requestStatus,
                err: action.payload ? action.payload : action.error.message + '',
                curId: action.meta.requestId
            }
        })
    }
})
export default mainSlice.reducer;