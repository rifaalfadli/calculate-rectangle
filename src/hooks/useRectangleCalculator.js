import { useState } from "react";
import { calculateRectangleArea } from "../api/reactangleApi";

export function useRectangleCalculator() {
  const [result, setResult] = useState(null);
  const [requestPayload, setRequestPayload] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const calculate = async (formData) => {
    const payload = {
      width: Number(formData.width),
      height: Number(formData.height),
    };

    try {
      setLoading(true);
      setError("");
      setResult(null);
      setRequestPayload(payload);
      const data = await calculateRectangleArea(payload);
      setResult(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          err.response?.data?.error ||
          err.message ||
          "Failed to calculate rectangle area",
      );
    } finally {
      setLoading(false);
    }
  };

  return { result, requestPayload, loading, error, calculate };
}
