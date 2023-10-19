import catApiClient from "./api";
import { QueryParams } from "@/types/common";
import {
  GetImageResponse,
  GetOwnImageResponse,
  CreateImageResponse,
  ImageInstance,
} from "@/types/images";

export const getImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<GetImageResponse[]>(
      "/images/search",
      {
        params: queryParams,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getOwnImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<GetOwnImageResponse[]>("/images", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createImage = async (image: ImageInstance) => {
  try {
    const { data } = await catApiClient.post<CreateImageResponse>(
      "/images/upload",
      image,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
