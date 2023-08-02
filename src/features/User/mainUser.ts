import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { UserType } from "../../Types/UserType";


interface UserState {
    mainUser: UserType | null;
}

const initialState: UserState = {
    mainUser: null
}

export const mainUserSlice = createSlice({
    name: "mainUser",
    initialState,
    // The reducers, field that define and generates the actions
    reducers: {
        setMainUser: (state, action: PayloadAction<UserType>) => {
            state.mainUser = action.payload;
        },
        logoutMainUser: (state) => {
            state.mainUser = null;
        },
    }
})

export const { setMainUser, logoutMainUser } = mainUserSlice.actions;
export const selectmainUser = (state: RootState) => state.mainUser.mainUser;
export default mainUserSlice.reducer;