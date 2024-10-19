import { configureStore } from "@reduxjs/toolkit";
import doctorSlice from "../reducers/courseSlice";
export default configureStore({
  reducer: {
    doctors: doctorSlice,
  },
});
