// 反向代理
import axios from "axios";
let httpAxios = axios.create();
// Add a request interceptor
httpAxios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // console.log(config,"config")
    return {
        ...config,
        headers:{
            ...config.headers,
            'Authorization':'Bearer ' +window.localStorage.token
        }
    };
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
httpAxios.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  export default httpAxios;