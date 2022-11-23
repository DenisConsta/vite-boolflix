import { reactive } from "vue";

export const store = reactive({

  currentUrl: '',
  api_key: '1516e402ee3167eca46dc8b19a9b1dc8',
  popular: 'https://api.themoviedb.org/3/movie/popular?',
  basic: 'https://api.themoviedb.org/3/',
  type: ['movie', 'tv'],
  global_language: 'it-IT',


  tv: [],  
  movie: [],

  /*-------------------------------------- */

/*   tvData: {
    //movies
    movies: {
      info: {
        currentPage: null,
        totalPages: null,
        totalResults: null,

      },
      data: {},
    },
    //tvseries
    tvseries: {
      info: {},
      data: [],
    }
  },
 */

  /* basic_params: {
    api_key: store.api_key,
    query: store.titleSearch,
    language: store.global_language,
  }, */

  /*-------------------------------------- */


  titleSearch: '',

  infoViewer: false,
  lastMovie: {},
  currentCat: 'movies, tv series, genres, ...',
  urlGenresMovie: 'https://api.themoviedb.org/3/genre/movie/list?api_key=1516e402ee3167eca46dc8b19a9b1dc8&language=it-IT',
  urlGenresTv: 'https://api.themoviedb.org/3/genre/tv/list?api_key=1516e402ee3167eca46dc8b19a9b1dc8&language=it-IT',
  genresMovie: [],
  genresTv: [],
  isGenres: false,
  
});