import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Redux/ShowMenu";
import focusScenarioReducer from "./Redux/FocusScenario";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    focusScenario: focusScenarioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AddDispatch = typeof store.dispatch;
