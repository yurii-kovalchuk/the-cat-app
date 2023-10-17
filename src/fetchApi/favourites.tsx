import { QueryParams } from "@/types/common";
import {
  FavouriteInstance,
  GetFavourite,
  CreateFavourite,
  DeleteFavourite,
} from "@/types/favourites";
import catApiClient from "./api";

export const getFavourites = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<GetFavourite[]>("/favourites", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createFavourite = async (favourite: FavouriteInstance) => {
  try {
    const { data } = await catApiClient.post<CreateFavourite>(
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
    const { data } = await catApiClient.get<GetFavourite>(
      `/favourites/${favouriteId}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteFavourite = async (favouriteId: string) => {
  try {
    const { data } = await catApiClient.delete<DeleteFavourite>(
      `/favourites/${favouriteId}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
