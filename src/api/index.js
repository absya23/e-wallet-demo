import axios from "axios";
import queryString from "query-string";

const apiConfig = {
    baseUrl: "https://student-management-indol.vercel.app/api/v1/",
  };

const axiosClient = axios.create({
  baseURL: apiConfig.baseUrl,
  //url gốc
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify({ ...params }),
});

axiosClient.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    throw error;
  }
);

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    throw error;
  }
);

const api = {
    //GET
    getAStudentInfo: (ID, params) => {
        const url = "student/" + String(ID);
        return axiosClient.get(url, params);
    },
    
    //POST******************************************************
    postStudentInfo: (payload) => {
        const url = "student";
        return axiosClient.post(url, payload);
    },
    
    //PUT***************************
    putSubject: (id, payload) => {
        const url = "subject/" + String(id);
        return axiosClient.put(url, payload);
    },

    //DELETE*****************************
    deleteSubject: (id) => {
        const url = "subject/" + String(id);
        return axiosClient.delete(url);
    },
};

export default api;