import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { GameType }  from "../../Types/GameType";
import { RootState } from "../../app/store";


interface GameState {
    currentGame: GameType | null;
}

const initialState: GameState = {
    currentGame: null
}

export const gameSlice = createSlice({
    name: "game",
    initialState,
    // The reducers, field that define and generates the actions
    reducers: {
        setCurrentGame: (state, action: PayloadAction<GameType>) => {
            state.currentGame = action.payload;
        },
        clearGame: (state) => {
            state.currentGame = null;
        },
    }
})

export const { setCurrentGame, clearGame } = gameSlice.actions;
export const selectCurrentGame = (state: RootState) => state.game.currentGame;
export default gameSlice.reducer;