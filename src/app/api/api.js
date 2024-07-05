import axios from "axios";
import config from "../../../config.json";


const headers = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    
  },
};

export const registerCandidate = async (data) => {
        
    try {
      const res = await axios.post(
        `${config.api_url}candidate/register`,
        data,
        headers
      );
      return res;
    } catch (e) {
      return e;
    }
  };