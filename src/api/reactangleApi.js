import axios from "axios";

// const API_BASE_URL = "http://192.168.18.151:5000";
const API_BASE_URL =
  "https://tutorial-flask-backend-production.up.railway.app/";

export const calculateRectangleArea = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/rectangle/area`, {
    width: Number(payload.width),
    height: Number(payload.height),
  });

  return response.data;
};
