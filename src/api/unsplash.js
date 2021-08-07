import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID Utb7hLb1Gvi6tCRhfSuLFlxVs8_BpVKAgdvfGm15Rq8",
  },
});
