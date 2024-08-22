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
        `${config.api_url}candidate/register?is_retake=${data.is_retake}&id=${data?.id ? data?.id : 0}`,
        data,
        headers
      );
      return res;
    } catch (e) {
      return e;
    }
  };

  export const getAllCandidates = async (data) => {
        
    try {
      const res = await axios.get(
        `${config.api_url}candidate/cand/getAllCandidates`,
        headers
      );
      return res;
    } catch (e) {
      return e;
    }
  };

  export const getWorkerFileteredData = async (data) => {
        
    try {
      const res = await axios.post(
        `${config.api_url}candidate/workerFilteredData`,
        data,
        headers,
        
      );
      return res;
    } catch (e) {
      return e;
    }
  };

  export const getCandidateData = async (id) => {
        
    try {
      const res = await axios.get(
        `${config.api_url}candidate/getCandidateTest/${id}`,
        headers
      );
      return res;
    } catch (e) {
      return e;
    }
  };

  export const signup = async (data) => {
        
    try {
      const res = await axios.post(
        `${config.api_url}users/register`,
        data,
        headers,
        
      );
      return res;
    } catch (e) {
      return e;
    }
  };

  export const userLogin = async (data) => {
        
    try {
      const res = await axios.post(
        `${config.api_url}users/login`,
        data,
        headers,
        
      );
      return res;
    } catch (e) {
      return e;
    }
  };

  export const handleRetakeQuiz = async (id) => {
        
    try {
      const res = await axios.get(
        `${config.api_url}candidate/retake/${id}`,
        headers
      );
      return res;
    } catch (e) {
      return e;
    }
  };

 export  function removeDashes(word) {
    if (word) {
      return word?.replaceAll("-", "")?.replace(/_/g, "");
    }
    return "";
  }

  
  export const sinCheck = async (data) => {
        
    try {
      const res = await axios.post(
        `${config.api_url}candidate/sinCheck`,
        data,
        headers,
        
      );
      return res;
    } catch (e) {
      return e;
    }
  };
