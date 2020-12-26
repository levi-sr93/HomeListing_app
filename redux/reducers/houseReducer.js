//reducers are pure Javascript functions
import { CREATE_HOUSES, FETCH_HOUSES } from "../actions/houseAction";

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

    case CREATE_HOUSES:
      console.log(action.payload);
    return {
      ...state,
      houses: state.houses.concat(action.payload.data),
    };
  }

  return state;
}
