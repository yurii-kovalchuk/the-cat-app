import catApiClient from "./api";

export const createVote = async (vote: string) => {
  try {
    const { data } = await catApiClient.post("/votes", vote);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getVotes = async () => {
  try {
    const { data } = await catApiClient.get("/votes");
    return data;
  } catch (err) {
    console.log(err);
  }
};
