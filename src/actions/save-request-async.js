import { requestServer } from "../utils/request_server";
import { setRequestData } from "./set-request-data";

export const saveRequstAsync = (requestData) => (dispatch) => {
  const saveRequest = requestServer(`/requests`, "POST", requestData);
  saveRequest.then((request) => {
    dispatch(setRequestData(request.data));
    console.log(request.data);

    return request.data;
  });
};
