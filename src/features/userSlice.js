import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const fetchUsers = createAsyncThunk("get/users", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/users");
    const users = res.json();
    return users;
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});
export const addAvatar = createAsyncThunk(
  "post/avatar",
  async ({ file, id }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`http://localhost:4000/user/${id}`, {
        method: "POST",
        body: formData,
      });
      const user = await res.json();
      return {file, id};
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const addLike = createAsyncThunk(
  "post/like",
  async ({ dinerId, userId }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/like", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dinerId, userId }),
      });
      const user = await res.json();
      return user;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addAvatar.fulfilled, (state, action) => {
        state.users = state.users.map((user) => {
          if (user._id === action.payload.id) {
            user.avatar = action.payload.file.name;
          }
          return user;
        });
      })
  },
});

export default userSlice.reducer;
