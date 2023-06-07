import fullTuits from "../tuits/full-tuits.json"
import { createSlice } from "@reduxjs/toolkit"

const fullTuitsSlice = createSlice({
    name: "homeTuits",
    initialState: fullTuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.splice(index, 1);
          },
        addTuit(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                userName: "NASA",
                tuit: action.payload,
                liked: false,
                image: "nasa.png",
                replies: 67,
                retuits: 2,
                likes: 25,
                handle: "@nasa",
                time: "1m"
            })
        }
    }
})

export const {addTuit, deleteTuit} = fullTuitsSlice.actions
export default fullTuitsSlice.reducer