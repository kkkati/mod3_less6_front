import { ACTION_TYPE } from "./action-types";

export const setRequestData = (requestData) => ({
  type: ACTION_TYPE.SET_REQUEST_DATA,
  payload: requestData,
});
