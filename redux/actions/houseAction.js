export const FETCH_HOUSES = "FETCH_HOUES";
export const CREATE_HOUSES = "CREATE_HOUSES";

export const fetchHouses = () => {
  return async (dispatch) => {
    //logic to fetch the houses data from the API

    dispatch({
      type: FETCH_HOUSES,
      payload: 1,
    });
  };
};
