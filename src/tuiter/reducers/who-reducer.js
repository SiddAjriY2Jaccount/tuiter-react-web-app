import { createSlice } from "@reduxjs/toolkit";
import whos from "../who-to-follow-list/who";

const whoSlice = createSlice({
    name: "who",
    initialState: whos
})

export default whoSlice.reducer