import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: null,
  load: false,
  signingUp: false,
  signingIn: false,
  token: localStorage.getItem("token"),
  id: localStorage.getItem('id'),
  login: localStorage.getItem('login'),
  avatar: localStorage.getItem('avatar')
};

export const authSignUp = createAsyncThunk(
  "auth/signup",
  async ({ login, password, mail }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user/registr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password, mail }),
      });

      const json = await res.json();
      if (json.error) {
        return thunkAPI.rejectWithValue(json.error);
      }
      return json;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const authSignIn = createAsyncThunk(
  "auth/signin",
  async ({ login, password, mail }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password, mail }),
      });
      const token = await res.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      localStorage.setItem("token", token.token);
      localStorage.setItem("id", token.id);
      localStorage.setItem("login", token.login);
      localStorage.setItem('avatar', token.avatar)
      

      return token;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const appliactionSlice = createSlice({
  name: "application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authSignUp.pending, (state) => {
        state.signingUp = true;
        state.error = null;
        state.load = true;
      })
      .addCase(authSignUp.rejected, (state, action) => {
        state.signingUp = false;
        state.load = false
        state.error = action.payload;
      })
      .addCase(authSignUp.fulfilled, (state, action) => {
        state.signingUp = false;
        state.load = false
        state.error = null;
      })
      .addCase(authSignIn.pending, (state, action) => {
        state.signingIn = true;
        state.error = null;
        state.load = true;
      })
      .addCase(authSignIn.rejected, (state, action) => {
        state.signingIn = false;
        state.load = false
        state.error = action.payload;
      })
      .addCase(authSignIn.fulfilled, (state, action) => {
        state.signingIn = false;
        state.error = null;
        state.load = false
        state.token = action.payload.token;
      });
  },
});

export default appliactionSlice.reducer;
