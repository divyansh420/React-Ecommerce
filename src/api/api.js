import Axios from "axios";

const axios = Axios.create({
  headers: {
    contentType: "application/json",
  },
});
