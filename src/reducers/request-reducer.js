import { ACTION_TYPE } from "../actions";

const initialRequestState = {
  id: "",
  FIO: "",
  telephone: "",
  descriptions: "",
};

export const requestReducer = (state = initialRequestState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_REQUEST_DATA:
      return { ...state, ...action.payload };

    case ACTION_TYPE.RESET_REQUEST_DATA:
      return initialRequestState;

    default:
      return state;
  }
};
