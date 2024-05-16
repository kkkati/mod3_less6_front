import { ACTION_TYPE } from "../actions";

const InitialUserState = {
  id: null,
  login: null,
  session: null,
};

export const userReducer = (state = InitialUserState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    case ACTION_TYPE.LOGOUT:
      return InitialUserState;
    default:
      return state;
  }
};
