const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  reviews: [],
  load: false,
};

export const fetchReviews = createAsyncThunk(
  "reviews/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/review");
      const reviews = res.json();
      return reviews;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const addReview = createAsyncThunk(
  "post/review",
  async ({ text, plus, minus, rating, dinerId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/diner`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text, plus, minus, rating, dinerId }),
      });
      const data = await res.json();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.load = false;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.load = false;
      });
  },
});

export default reviewSlice.reducer;
