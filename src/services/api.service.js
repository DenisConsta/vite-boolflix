/* import axios from "axios";
import { store } from "../data/store";

export class ApiService {

  static getApi() {
    return axios
      .get(url, {
        params: {
          api_key: store.api_key,
          language: store.global_language,
          query: store.titleSearch,
        }
      })
      .then((res) => {
        console.log(res.data);
        return res;
      })
      .catch((error) => {
        console.log(error);
      });
  }


} */