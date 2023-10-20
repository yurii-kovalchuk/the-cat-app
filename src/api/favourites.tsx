import { QueryParams } from "@/types/common";
import {
  Favourite,
  FavouriteResp,
  CreateFavouriteResp,
  DeleteResp,
} from "@/types/favourites";
import catApiClient from "./api";

export const getFavourites = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<FavouriteResp[]>("/favourites", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createFavourite = async (favourite: Favourite) => {
  try {
    const { data } = await catApiClient.post<CreateFavouriteResp>(
      "/favourites",
      favourite
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getFavourite = async (favouriteId: string) => {
  try {
    const { data } = await catApiClient.get<FavouriteResp>(
      `/favourites/${favouriteId}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteFavourite = async (favouriteId: string) => {
  try {
    const { data } = await catApiClient.delete<DeleteResp>(
      `/favourites/${favouriteId}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
