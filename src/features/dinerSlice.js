const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  diners: [],
  filterDiners: [],
  load: false,
};

export const fetchDiners = createAsyncThunk(
  "diner/get",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/diner");
      const diners = res.json();
      return diners;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  }
);

export const rateDiner = createAsyncThunk(
  "rate/diner",
  async ({ rating, dinerId }, thunkAPI) => {
    try {
      const res = await fetch(`http://localhost:4000/rating`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${thunkAPI.getState().application.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, dinerId }),
      });
      const data = await res.json();

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const dinerSlice = createSlice({
  name: "diner",
  initialState,
  reducers: {
    type(state, action) {
      state.filterDiners = state.diners.filter((diner) => {
        return diner.type === action.payload;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDiners.fulfilled, (state, action) => {
        state.load = false;
        state.diners = action.payload;
        state.filterDiners = action.payload;
      })
      .addCase(fetchDiners.pending, (state, action) => {
        state.load = true;
      })
      .addCase(rateDiner.fulfilled, (state, action) => {
        state.load = false;
        state.diners = state.diners.map((item) => {
          if (item._id === action.payload._id) {
            item.rating = action.payload.rating;
          }
          return item;
        });
      });
  },
});

export default dinerSlice.reducer;

export const { type, middlePrice } = dinerSlice.actions;
