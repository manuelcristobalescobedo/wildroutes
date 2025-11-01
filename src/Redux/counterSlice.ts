import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",

    initialState: 1,

    reducers: {
        reset: (state) => {
            state = 0
            return state
        },
        increment: (state) => {
            return state++
        },
        decrement: (state) => {
            return state--
        },
        updateByNumber: (state, action: PayloadAction<number>) => {
            return state + action.payload
        }
    }
})

export const { reset, increment, decrement, updateByNumber } = counterSlice.actions;
export default counterSlice.reducer;

    