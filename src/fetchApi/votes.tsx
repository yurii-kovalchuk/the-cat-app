import { QueryParams } from "@/types/common";
import { Vote, VoteResp, CreateVoteResp } from "@/types/votes";
import catApiClient from "./api";

export const getVotes = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<VoteResp[]>("/votes", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createVote = async (vote: Vote) => {
  try {
    const { data } = await catApiClient.post<CreateVoteResp>("/votes", vote);
    return data;
  } catch (err) {
    console.log(err);
  }
};
