import { QueryParams } from "@/types/common";
import { Breed } from "@/types/breeds";
import catApiClient from "./api";

export const getBreeds = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<Breed[]>("/breeds", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getBreed = async (breedId: string) => {
  try {
    const { data } = await catApiClient.get<Breed>(`/breeds/${breedId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
