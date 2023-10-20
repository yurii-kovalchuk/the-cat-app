import catApiClient from "./api";

export const createFavourite = async (imageId: string) => {
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

export const deleteFavourite = async (favouriteId: number) => {
  try {
    const { data } = await catApiClient.delete(`/favourites/${favouriteId}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
