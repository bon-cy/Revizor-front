import { configureStore } from "@reduxjs/toolkit";
import users from '../features/userSlice'
import diners from '../features/dinerSlice'
import comments from '../features/commentSlice'

export const store = configureStore({
  reducer: {
    users,
    diners,
    comments,
  },
});
