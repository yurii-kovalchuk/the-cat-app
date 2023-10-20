import axios from "axios";

const config = {
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_Q0Uw4sGl7oMw7erB3J0GRLfwQRQhmt10i55IfCyZvKVekZSlk4S2IoiVeAOakJQi",
  },
};

const instance = axios.create(config);
