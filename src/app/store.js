import { configureStore } from "@reduxjs/toolkit";
import users from '../features/userSlice'
import diners from '../features/dinerSlice'
import comments from '../features/commentSlice'
import application from "../features/applicationSlice";

export const store = configureStore({
  reducer: {
    application,
    users,
    diners,
    comments,
  },
});
