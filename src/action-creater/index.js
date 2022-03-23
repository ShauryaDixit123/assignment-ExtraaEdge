export const actionAdd = () => {
  return (dispatch) => {
    dispatch({
      type: "ADD_USER",
      count: 2,
    });
  };
};
