import { store } from "./store";
import axios from "axios";

/* ? get direct */

function getDirectApi(url) {
  axios
    .get(url, {
      params: {
        api_key: '1516e402ee3167eca46dc8b19a9b1dc8',
        language: 'it-IT',
        query: store.titleSearch,
      }
    })
    .then((res) => {
      if (url === store.urlGenresMovie) {
        store.genresMovie = res.data;
      }
      else
        out = res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}
/* 
function getSpecificApi(type) {
  if (type === null || type === '') {
    type = 'movie';
    store.currentUrl = 'https://api.themoviedb.org/3/' + type + '/popular?';
  } else {
    store.currentType = type;
    store.currentUrl = store.basic + "search/" + store.currentType + "?";
  }
}

function checkGenres(url, res) {
  if (url === store.urlGenresMovie)
    store.genresMovie = res.data;
  else if (url === store.urlGenresTv)
    store.genresTv = res.data;

}
 */



function getImageUrl(path) {
  return "https://image.tmdb.org/t/p/w500" + path;
}

function getFlag(country) {
  if (country === "en" || country === "uk") return "fi-gb";
  else if (country === "ko") return "fi-kr";
  else if (country === 'ja') return 'fi-jp';
  return "fi-" + country;
}

function getStars(number) {
  let n = 1,
    num = [];
  if (number > 2) n = Math.floor(number / 2);
  for (let i = 0; i < n; i++) num.push("x");

  return num;
}

export { getImageUrl, getFlag, getStars, getDirectApi };