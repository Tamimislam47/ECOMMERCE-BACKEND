import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const checkAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return false;
  }

  const isExpired: number = jwtDecode(accessToken).exp;
  const currentTime: number = Math.floor(Date.now() / 1000);

  if (isExpired < currentTime) {
    return {
      isExpired: true,
    };
  }
};

export const newRefreshTokenGen = async () => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    return false;
  }

  const response = await axios.get(
    "http://localhost:3000/api/protected-route",
    { withCredentials: true },
  );

  console.log(document.cookie);
  
  localStorage.removeItem("accessToken");
  localStorage.removeItem("accessToken");

  localStorage.setItem("accessToken", response.data.newAccessToken);
  localStorage.setItem("refreshToken", response.data.newRefreshAccessToken);


};
