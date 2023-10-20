import { Breed } from "./breeds";
import { Categorie } from "./common";

export type Image = {
  id: string;
  url: string;
  width: string;
  height: string;
  categories?: Categorie[] | [];
  breeds: Breed[] | [];
  pending: string;
  approved: string;
  original_filename: string;
  sub_id?: string | null;
  created_at: string;
  breed_ids?: string;
};

export type GetImageResponse = Pick<
  Image,
  "breeds" | "categories" | "id" | "url" | "width" | "height"
>;

export type GetOwnImageResponse = Omit<
  Image,
  "categories" | "pending" | "approved" | "breeds"
> & {
  breeds: Pick<Breed, "id" | "name" | "wikipedia_url">[] | [];
};

export type CreateImageResponse = Omit<
  Image,
  "categories" | "breeds" | "created_at"
>;

export type ImageInstance = Pick<Image, "sub_id"> & {
  file: Blob;
};
