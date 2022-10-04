import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

export const fetchUsers = createAsyncThunk(
    'get/users',
    async (_, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/users')
            const users = res.json()
            return users
        } catch (e) {
            thunkAPI.rejectWithValue(e)
        }
    }
    )

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
    }
})

export default userSlice.reducer