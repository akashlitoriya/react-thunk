import axios from "axios";

const axiosInstance = axios.create({});

const apiConnecter = async (
  method,
  url,
  body = {},
  headers = {},
  params = {}
) => {
  return await axiosInstance({
    method: method,
    url: url,
    data: body,
    headers: headers,
    params: params,
  });
};

export default apiConnecter;
