import axios from "axios";

//ACTION TYPES
const GET_PUPPIES = "GET_PUPPIES";

//ACTION CREATOR
const getPuppies = puppies => {
  return {
    type: GET_PUPPIES,
    //payload
    puppies
  };
};

//THUNK

export function getPuppiesThunk() {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/puppies");
      dispatch(getPuppies(data));
    } catch (err) {
      console.log("error in thunk");
    }
  };
}

//REDUCER

export const puppyReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PUPPIES:
      return action.puppies;
    default:
      return state;
  }
};
