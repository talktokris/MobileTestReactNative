import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.254.4:9000/api",
  //baseURL: "http://192.168.1.68:9000/api",
});

export default apiClient; 
