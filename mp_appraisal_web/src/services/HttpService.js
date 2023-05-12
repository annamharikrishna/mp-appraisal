import axios from "axios";
// import { jwtTokenFetch } from "../redux/reducers/authenticationSlice";
// import Store from "../redux/Store";
import {saveAs} from "file-saver";

export class HttpAxiosService {
  axiosInstance;
  baseURL;
  axiosMuliPartInstance;
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(url, params, responseType='json', contentType='application/json') {
    // const userToken = localStorage.getItem("userToken")
    //   ? localStorage.getItem("userToken")
    //   : null;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
      responseType: responseType,
      headers: {
        "Content-Type": contentType,
        Accept: "application/json",
        // Authorization: `Bearer ${userToken}`,
      },
    });
    return {
      axiosInstance: this.axiosInstance,
      method: "get",
      url: url,
      requestConfig: {
        params: params,
      },
    };
  }

  post(url, data) {
    // const userToken = localStorage.getItem("userToken")
    //   ? localStorage.getItem("userToken")
    //   : null;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${userToken}`,
      },
    });
    return {
      axiosInstance: this.axiosInstance,
      method: "post",
      url: url,
      requestConfig: data,
    };
  }

  delete(url, params) {
    // const userToken = localStorage.getItem("userToken")
    //   ? localStorage.getItem("userToken")
    //   : null;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        // Authorization: `Bearer ${userToken}`,
      },
    });
    return {
      axiosInstance: this.axiosInstance,
      method: "delete",
      url: url,
      requestConfig: {
        params: params,
      },
    };
  }

  getFileDownloaded(url, params){
    return this.get(url, params, 'blob', 'application/blob')
  }

  fileActivator(data, type, fileName) {
    const blob = new Blob([data], { type });
    return saveAs(blob, fileName);
  }

  multiPartFormData(url, data) {
    // const userToken = localStorage.getItem("userToken")
    // ? localStorage.getItem("userToken")
    // : null;
    this.axiosMuliPartInstance = axios.create({
      baseURL: this.baseURL,
      withCredentials: true,
      xsrfHeaderName: 'X-CSRFToken',
      xsrfCookieName: 'csrftoken',
      headers: {
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json',
        //   Authorization: `Bearer ${userToken}`,
      }
  });
    return {
      axiosInstance: this.axiosMuliPartInstance,
      method: "post",
      url: url,
      requestConfig: data
    };
  }

}
