import { reactive } from "vue";

export const store = reactive({

  api_key: '1516e402ee3167eca46dc8b19a9b1dc8',
  currentUrl: '',
  popular: 'https://api.themoviedb.org/3/movie/popular?',
  basic: 'https://api.themoviedb.org/3/',
  type: ['movie', 'tv'],
  
  tv:[],
  movie:[],

  titleSearch: '',
  
  infoViewer: false,
  lastMovie: {},



});