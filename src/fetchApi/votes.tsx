import { QueryParams } from "@/types/common";
import {
  VoteInstance,
  GetVoteResponse,
  CreateVoteResponse,
} from "@/types/votes";
import catApiClient from "./api";

export const getVotes = async (queryParams: QueryParams = {}) => {
  try {
    const { data } = await catApiClient.get<GetVoteResponse[]>("/votes", {
      params: queryParams,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const createVote = async (vote: VoteInstance) => {
  try {
    const { data } = await catApiClient.post<CreateVoteResponse>(
      "/votes",
      vote
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
