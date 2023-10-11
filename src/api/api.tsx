import axios from "axios";
import config from "./config";

const catApiClient = axios.create(config);

export default catApiClient;

// add type for vote, favourite

// add queryparams for all get requests

// getFavourite 1, Image 1

// generic with arr type for getVotes, getFavourites

// solid
// rest-api architecture
