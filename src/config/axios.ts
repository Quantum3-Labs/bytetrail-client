import axiosLibrary from "axios";

const axios = axiosLibrary.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 3000000,
});

export default axios;
