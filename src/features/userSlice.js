import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  load: false,
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
      return { file, id };
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
      return { diner, userId };
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
      const user = await res.json();
      return { user, dinerId };
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
        state.load = false;
      })
      .addCase(addAvatar.fulfilled, (state, action) => {
        state.load = false;
        state.users = state.users.map((user) => {
          if (user._id === action.payload.id) {
            user.avatar = action.payload.file.name;
          }
          return user;
        });
      })
      .addCase(addLike.fulfilled, (state, action) => {
        state.load = false;
        state.users = state.users.map((user) => {
          if (user._id === action.payload.userId) {
            user.like.push(action.payload.diner);
          }
          return user;
        });
      })
      .addCase(addDislike.fulfilled, (state, action) => {
        state.load = false;
        state.users = state.users.map((user) => {
          if (user._id === action.payload.user._id) {
            user.like = user.like.filter(
              (liks) => liks._id !== action.payload.dinerId
            );
          }
          return user;
        });
      });
  },
});

export default userSlice.reducer;
