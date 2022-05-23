import axios from "axios";

const apiHotel = axios.create({
  baseURL: "https://api-hotel-caps.herokuapp.com/",
});

export default apiHotel