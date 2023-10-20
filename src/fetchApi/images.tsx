import catApiClient from "./api";
import { QueryParams } from "@/types/common";
import { GetImage, GetOwnImage, CreateImageResp } from "@/types/images";

type Image = {
  file: Blob;
  sub_id?: string;
};

export const getImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<GetImage[]>("/images/search", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getOwnImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<GetOwnImage[]>("/images", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createImage = async (image: Image) => {
  try {
    const { data } = await catApiClient.post<CreateImageResp>(
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
