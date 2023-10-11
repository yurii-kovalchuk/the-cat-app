import axios from "axios";
import config from "./config";

const catApiClient = axios.create(config);

export default catApiClient;

// generic with arr type for getVotes, getFavourites

// solid
// rest-api architecture
