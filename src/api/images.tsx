import catApiClient from "./api";
import { QueryParams } from "@/types/common";

type Image = {
  file: File;
  sub_id?: string;
};

export const getImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get("/images/search", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getCreatedImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get("/images", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createImage = async (image: Image) => {
  try {
    const { data } = await catApiClient.post("/images/upload", image, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
