const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    diners: [],
    filterDiners: []
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
    reducers: {
        type(state, action) {
            state.filterDiners = state.diners.filter((diner) => {
                return diner.type === action.payload
            })
        },
        middlePrice(state, action){
            state.filterDiners = state.filterDiners.filter((diner) => {
                return diner.middlePrice >= action.payload
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDiners.fulfilled, (state, action) => {
            state.diners = action.payload
            state.filterDiners = action.payload
        })
    }
})

export default dinerSlice.reducer

export const { type, middlePrice } = dinerSlice.actions