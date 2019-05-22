// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from "redux";
import { puppyReducer } from "./puppy";
import { partyReducer } from "./party";

// const initialState = {}

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state
//   }
// }

const rootReducer = combineReducers({ puppyReducer, partyReducer });

export default rootReducer;
