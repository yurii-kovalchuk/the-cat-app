import { QueryParams } from "@/types/common";
import catApiClient from "./api";

export const getBreeds = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get("/breeds", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getBreed = async (breedId: string) => {
  try {
    const { data } = await catApiClient.get(`/favourites/${breedId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
