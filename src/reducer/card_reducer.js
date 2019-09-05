import { ADD_CARD } from "../Actions/types";

const state = {
  addProileList: []
};

function cardReducer(mState = { ...state }, action) {
  switch (action.type) {
    case ADD_CARD:
      console.log("Reducer");
      console.log(action.payload);
      mState.addProileList.push(action.payload);
      console.log(mState.addProileList);
      return mState;

    default:
      return mState;
  }
}

export default cardReducer;
