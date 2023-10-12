import catApiClient from "./api";
import { QueryParams } from "@/types/common";
import { ImagesResp, OwnImagesResp, CreateImageResp } from "@/types/images";

type Image = {
  file: Blob;
  sub_id?: string;
};

export const getImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<ImagesResp[]>("/images/search", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getOwnImages = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<OwnImagesResp[]>("/images", {
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
