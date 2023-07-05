import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionType";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: "",
};

export const reducer = (initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...State, isLoading: true };
    case LOGIN_FAILURE:
      return { ...state, isError: true };
    case LOGIN_SUCCESS:
      return { ...state };
    case dafault:
      return state;
  }
};
