import { createSlice } from "@reduxjs/toolkit";

export interface FocusScenarioState {
  focusScenarioState: boolean;
}

const initialState: FocusScenarioState = {
  focusScenarioState: false,
};

export const FocusScenarioSlice = createSlice({
  name: "focusScenario",
  initialState,
  reducers: {
    toggleFocusScenario: (state) => {
      state.focusScenarioState = !state.focusScenarioState;
    },
  },
});

export const { toggleFocusScenario } = FocusScenarioSlice.actions;

export default FocusScenarioSlice.reducer;
