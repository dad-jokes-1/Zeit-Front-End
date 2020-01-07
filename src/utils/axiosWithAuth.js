import axios from "axios";

const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://dadjokesbw.herokuapp.com/api/jokes",
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;