import axios from "axios";

import errorResponseHandler from "./errorResponseHandler";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}/api/v1/member`,
});

instance.interceptors.response.use(
  (response) => response,
  errorResponseHandler
);

export default instance;
