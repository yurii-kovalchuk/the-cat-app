const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://api.thecatapi.com/v1",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-api-key": process.env.NEXT_PUBLIC_X_API_KEY,
  },
};

export default config;
