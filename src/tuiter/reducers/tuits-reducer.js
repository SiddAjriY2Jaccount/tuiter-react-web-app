import tuitsArray from "../tuit-summary-list/tuits.json";
import { createSlice } from "@reduxjs/toolkit";

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuitsArray,
});

export default tuitsSlice.reducer;
