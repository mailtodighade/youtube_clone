import axios from "axios";
let KEY = "AIzaSyCuN0TxhKhkzq1bXh26859lzP6EcpflLBU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet",
  },
});
