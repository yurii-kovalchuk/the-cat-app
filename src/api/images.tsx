import catApiClient from "./api";
import { QueryParams } from "@/types/common";

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
