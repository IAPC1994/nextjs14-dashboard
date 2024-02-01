import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
    count: number;
    isReady: boolean;
}

const initialState: CounterState = {
    count: 5,
    isReady: false
}

const counterSlite = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    initCounterState( state, action:PayloadAction<number>){
      if( state.isReady ) return;

      state.count = action.payload;
      state.isReady = true;
    },
    
    increment( state ){
      state.count++;
    },

    decrement( state ){
      if( state.count === 0 ) return;
      state.count--;
    },

    reset( state, action:PayloadAction<number> ){
      if( action.payload < 0 ) action.payload = 0;
      state.count = action.payload;
    },

  }
});

export const { increment, decrement, reset, initCounterState } = counterSlite.actions;

export default counterSlite.reducer;