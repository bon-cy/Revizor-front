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
  "put/users",
  async ({ file, id }, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch(`http://localhost:4000/user/${id}`, {
        method: "POST",
        body: formData
      });
      const user = res.json();
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
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    })
    .addCase(addAvatar.fulfilled, (state, action) => {
        state.users = state.users.map(elem => {
            if( elem._id === action.payload._id ){
                elem.avatar = action.payload.avatar
            }
            return elem
        })
    })
  },
});

export default userSlice.reducer;
