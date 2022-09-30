const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    diners: []
}

export const fetchDiners = createAsyncThunk(
    'diner/get',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/diner')
            const diners = res.json()
            return diners
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
)

const dinerSlice = createSlice({
    name: 'diner',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchDiners.fulfilled, (state, action) => {
            state.diners = action.payload
        })
    }
})

export default dinerSlice.reducer