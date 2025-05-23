import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userId: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      return { ...state, userId: action.payload.userId }; 
    },
    
    logout: (state) => {
      state.userId = null;
      state.isAuthenticated = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUser, logout, setError } = userSlice.actions;
export default userSlice.reducer;


