import { QueryParams } from "@/types/common";
import catApiClient from "./api";

type Favourite = {
  image_id: string;
  sub_id?: string;
};

export const getFavourites = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get("/favourites", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createFavourite = async (favourite: Favourite) => {
  try {
    const { data } = await catApiClient.post("/favourites", favourite);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getFavourite = async (favouriteId: string) => {
  try {
    const { data } = await catApiClient.get(`/favourites/${favouriteId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteFavourite = async (favouriteId: string) => {
  try {
    const { data } = await catApiClient.delete(`/favourites/${favouriteId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
