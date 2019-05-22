import axios from "axios";

//ACTION
const GET_PARTIES = "GET_PARTIES";

//ACTION CREATOR
const getParties = parties => {
  return {
    type: GET_PARTIES,
    parties
  };
};

//THUNK
export function getPartiesThunk() {
  return async dispatch => {
    try {
      const { data } = await axios.get("/api/parties");
      dispatch(getParties(data));
    } catch (err) {
      console.log("error in thunk");
    }
  };
}

//REDUCER

export const partyReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PARTIES:
      return action.parties;
    default:
      return state;
  }
};
