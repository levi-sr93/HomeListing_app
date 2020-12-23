export const FETCH_HOUSES = "FETCH_HOUES";
export const CREATE_HOUSES = "CREATE_HOUSES";

export const fetchHouses = () => {
  return async (dispatch) => {
    //logic to fetch the houses data from the API
    const result = await fetch("http://localhost:3000/api/houses");
    const resultData = await result.json();

    console.log("result", result);
    console.log(resultData);

    dispatch({
      type: FETCH_HOUSES,
      payload: resultData,
    });
  };
};
