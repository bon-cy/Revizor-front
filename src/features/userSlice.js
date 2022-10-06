import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: []
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
      const diner = await res.json();
      return {diner, userId};
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);
export const addDislike = createAsyncThunk(
  "post/dislike",
  async ({ dinerId, userId }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/dislike", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dinerId, userId }),
      });
      const diner = await res.json();
      return {diner, userId};
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
      .addCase(addLike.fulfilled, (state, action) => {
        state.users.map(user => {
          if(user._id === action.payload.userId){
            user.like.push(action.payload.diner)
          }
          return user
        })
      })
      .addCase(addDislike.fulfilled, (state, action) => {
        state.users.map(user => {
          if(user._id === action.payload.userId){
            user.like.filter(likes => {
              return likes === action.payload.diner._id
            })
          }
          return user
        })
      })
  },
});

export default userSlice.reducer;
