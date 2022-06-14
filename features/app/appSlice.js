import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import appService from './appService';

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create app
export const createApp = createAsyncThunk(
  'app/create',
  async (appData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await appService.createApp(appData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createApp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createApp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.goals.push(action.payload);
      })
      .addCase(createApp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = appSlice.actions;
export default appSlice.reducer;
