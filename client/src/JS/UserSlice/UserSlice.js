import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userRegister = createAsyncThunk('user/register', async user => {
  try {
    let result = await axios.post('http://localhost:5000/user/register', user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const userLogin = createAsyncThunk('user/login', async user => {
  try {
    let result = await axios.post('http://localhost:5000/user/login', user);
    return result;
  } catch (error) {
    console.log(error);
  }
});
export const currentUser = createAsyncThunk('user/current', async () => {
  try {
    let result = await axios.get('http://localhost:5000/user/current', {
      headers: { authorization: localStorage.getItem('token') },
    });
    return result;
  } catch (error) {
    console.log(error);
  }
});
const initialState = {
  user: null,
  isAuth: false,
  current: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogout: (state, action) => {
      localStorage.removeItem('token');
      state.user = null;
      state.isAuth = false;
      localStorage.removeItem('role');
    },
  },
  extraReducers: {
    [userRegister.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userRegister.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload.data.user;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.data.token);
    },
    [userRegister.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [userLogin.pending]: (state, action) => {
      state.status = 'loading';
    },
    [userLogin.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload.data.user;
      localStorage.setItem('token', action.payload.data.token);
      state.isAuth = true;
      localStorage.setItem('role', action.payload.data.user.role);
    },
    [userLogin.rejected]: (state, action) => {
      state.status = 'failed';
    },
    [currentUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [currentUser.fulfilled]: (state, action) => {
      state.status = 'success';
      state.user = action.payload?.data.user;
      // localStorage.setItem('token', action.payload.data.token);
      // state.isAuth = true;
    },
    [userLogin.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogout } = userSlice.actions;

export default userSlice.reducer;
