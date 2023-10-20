import { Breed } from "./breeds";
import { Categorie } from "./common";

export type Image = {
  id: string;
  url: string;
  width: string;
  height: string;
  mime_type: string;
  entities?: [];
  animals?: [];
  categories?: Categorie[];
  breeds: Breed[];
  pending: string;
  approved: string;
};

export type GetImage = Pick<
  Image,
  "breeds" | "categories" | "id" | "url" | "width" | "height"
>;

export type GetOwnImage = Omit<Image, "pending" | "approved" | "breeds"> & {
  breeds: {
    id: string;
    name: string;
    wikipedia_url: string;
  }[];
};

export type CreateImageResp = {
  id: string;
  url: string;
  pending: string;
  approved: string;
};
