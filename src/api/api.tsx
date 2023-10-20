import axios from "axios";

type Filter = {
  limit?: number;
  order?: "RAND" | "ASC" | "DESC";
  breed_ids?: string;
};

const config = {
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_Q0Uw4sGl7oMw7erB3J0GRLfwQRQhmt10i55IfCyZvKVekZSlk4S2IoiVeAOakJQi",
  },
};

export const catApiClient = axios.create(config);

export const getRandomCat = async () => {
  try {
    const { data } = await catApiClient.get("/images/search");
    return data[0];
  } catch (err) {
    console.log(err);
  }
};

export const getCats = async (filter: Filter) => {
  try {
    const { data } = await catApiClient.get("/images/search", {
      params: filter,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getBreeds = async () => {
  try {
    const { data } = await catApiClient.get("/breeds");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const makeUpVote = async (imageId: string) => {
  const voteInfo = {
    image_id: imageId,
    value: 1,
  };

  try {
    const { data } = await catApiClient.post("/votes", voteInfo);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const makeDownVote = async (imageId: string) => {
  const voteInfo = {
    image_id: imageId,
    value: -1,
  };

  try {
    const { data } = await catApiClient.post("/votes", voteInfo);
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

export const makeFavourite = async (imageId: string) => {
  const favouriteInfo = { image_id: imageId };

  try {
    const { data } = await catApiClient.post("/favourites", favouriteInfo);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getFavourites = async () => {
  try {
    const { data } = await catApiClient.get("/favourites");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const removeFavourite = async (favouriteId: number) => {
  try {
    const { data } = await catApiClient.delete(`/favourites/${favouriteId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
