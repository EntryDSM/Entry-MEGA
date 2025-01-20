import { axios } from "axios";
const INTERNSHIP_BASE_URL = import.meta.env.VITE_INTERNSHIP_BASE_URL;

export const instance = axios.create({
  baseURL: INTERNSHIP_BASE_URL,
});
