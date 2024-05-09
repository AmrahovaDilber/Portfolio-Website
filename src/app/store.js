import { configureStore } from "@reduxjs/toolkit";
import { educationReducer } from "../app/reducers/education/timelineSlice";
import { skillsReducer } from "../app/reducers/skills/skillSlice";

export const store = configureStore({
  reducer: {
    educationReducer,
    skillsReducer,
  },
});
