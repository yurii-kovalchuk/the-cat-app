import { QueryParams } from "@/types/common";
import catApiClient from "./api";

type Vote = {
  image_id: string;
  sub_id?: string;
  value: 1 | -1;
};

export const getVotes = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get("/votes", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createVote = async (vote: Vote) => {
  try {
    const { data } = await catApiClient.post("/votes", vote);
    return data;
  } catch (err) {
    console.log(err);
  }
};
