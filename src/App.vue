<script>
import axios from "axios";
import { store } from "./data/store";
import { getDirectApi } from "./data/methods";

import AppHeader from "./components/AppHeader.vue";
import CardsContainer from "./components/CardsContainer.vue";
import AppSearch from "./components/AppSearch.vue";
import AppLightbox from "./components/AppLightbox.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    CardsContainer,
    AppSearch,
    AppLightbox,
  },
  data() {
    return {
      store,
      getDirectApi,
    };
  },
  methods: {
    getApi(type) {
      if (store.titleSearch === null || store.titleSearch === "") {
        if (type === null || type === "" || type === "all") {
          type = "movie";
          store.tv = [];
          store.movie = [];
        }
        store.currentUrl = store.basic + type + "/popular?";
      } else store.currentUrl = store.basic + "search/" + type + "?";

      console.log(store.currentUrl);
      store.genresMovie = getDirectApi(store.urlGenresMovie);
      
      if (type === "all") {
        store.type.forEach((el) => {
          store.currentUrl = store.basic + "search/" + el + "?";
          console.log(el);
          this.callApi(el.toString());
        });
      } else this.callApi(type);
    },

    callApi(type) {
      axios
        .get(store.currentUrl, {
          params: {
            api_key: store.api_key,
            query: store.titleSearch,
            language: store.global_language,
          },
        })
        .then((res) => {
          store[type] = res.data.results;
        })
        .catch((error) => {
          console.log(error);
        });

      console.log('XXXX', store[type]);
    },
  },
  /*   watch:{
    storeGenres(newGenre){
      newGenre = store.genresMovie;
    },
  }, */

  mounted() {
    this.getApi(null);
  },
};
</script>

<template>
  <div class="container d-flex justify-content-between align-items-center">
    <AppHeader />
    <!-- ? AppSearch -->
    <AppSearch @startSearch="getApi('all')" />
  </div>

  <main>
    <AppLightbox :movie="store.lastMovie" v-if="store.infoViewer" />


    <CardsContainer
      v-if="store.movie.length != 0"
      :type="store.movie"
      :titleSection="'Movies'"
    />

    <CardsContainer
      v-if="store.tv.length != 0"
      :type="store.tv"
      :titleSection="'TV Series'"
    />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>