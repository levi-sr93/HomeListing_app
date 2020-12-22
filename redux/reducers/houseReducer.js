//reducers are pure Javascript functions
import { FETCH_HOUSES } from "../actions/houseAction";

const INITIAL_STATE = {
  houses: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_HOUSES:
      return {
        ...state,
        houses: action.payload,
      };
  }

  return state;
}
