import { createSlice } from '@reduxjs/toolkit';


export const USER_INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState: USER_INITIAL_STATE,
  reducers: {
    setCurrentUser(state,action){
      state.currentUser = action.payload
    }
  }
})

export const { setCurrentUser } = userSlice.actions
export const userReducer = userSlice.reducer