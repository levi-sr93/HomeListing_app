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

export const createHome = ({
  title,
  image,
  homeType,
  price,
  yearBuilt,
  address,
  description,
}) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/api/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        image,
        homeType,
        price,
        yearBuilt,
        address,
        description,
      }),
    });

    const responseData = await response.json();
    // console.log(responseData);

    dispatch({
      type: CREATE_HOUSES,
      payload: responseData,
    });
  };
};
