import { reactive } from "vue";

export const store = reactive({
  apiUrl:'https://api.themoviedb.org/3/search/multi?',
  popular: 'https://api.themoviedb.org/3/movie/popular?',
  currentUrl: '',
  titleSearch: '',
  resultList: [],
  info:{
    current_page: null,
    total_pages: null,
    total_results: null,
  },
/*   tv:[],
  movies:[], */

  


});