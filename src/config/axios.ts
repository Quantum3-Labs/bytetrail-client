import axiosLibrary from "axios";

const axios = axiosLibrary.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 300000,
});

export default axios;
