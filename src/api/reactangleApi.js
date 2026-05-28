import axios from "axios";

const API_BASE_URL = "http://192.168.18.151:5000";

export const calculateRectangleArea = async (payload) => {
  const response = await axios.post(`${API_BASE_URL}/rectangle/area`, {
    width: Number(payload.width),
    height: Number(payload.height),
  });

  return response.data;
};
