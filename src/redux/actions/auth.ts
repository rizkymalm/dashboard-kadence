// import { axios } from "../../utils";
import { Dispatch } from "../types";

export const login = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });

    dispatch({
      type: "LOGIN_SUCCESS",
    });
    localStorage.setItem("token", "success");
    window.location.reload();
  } catch (error) {
    if (error.response) {
      alert(error.response.data.message);
      dispatch({ type: "LOGIN_ERROR" });
    }
  }
};

export const handleLogout = () => async (dispatch: Dispatch) => {
  dispatch({ type: "HANDLE_LOGOUT" });
  localStorage.removeItem("token");
  window.location.reload();
};
