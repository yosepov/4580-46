import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "firebase/auth";
import { RootState } from "../../app/store";


interface UserState {
    currentUser: User | null;
}

const initialState: UserState = {
    currentUser: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    // The reducers, field that define and generates the actions
    reducers: {
        setCurrentUser: (state, action: PayloadAction<User>) => {
            state.currentUser = action.payload;
        },
        logoutUser: (state) => {
            state.currentUser = null;
        },
    }
})

export const { setCurrentUser, logoutUser } = userSlice.actions;
export const selectCurrentUser = (state: RootState) => state.user.currentUser;
export default userSlice.reducer;