import catApiClient from "./api";

export const getBreeds = async () => {
  try {
    const { data } = await catApiClient.get("/breeds");
    return data;
  } catch (err) {
    console.log(err);
  }
};
