import { reactive } from "vue";

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/movie?api_key=1516e402ee3167eca46dc8b19a9b1dc8&query=',
  titleSearch: '',
  resultList: [],
  


});