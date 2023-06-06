import axios from "axios";

export default axios.create({
  baseURL: `https://api.rawg.io/api`,
  params: {
    key: `91a0d6f3de66455ba05f6e17c6af6389`,
  },
});
