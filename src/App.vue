<script>
import axios from "axios";
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppSearch from "./components/AppSearch.vue";
import CardsContainer from "./components/CardsContainer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    CardsContainer,
    AppSearch,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getApi(url) {
      //! rivedere
      if (url == null || url == "" || store.titleSearch == "") {
        url = store.popular;
      } 
      else {
        store.currentUrl = url;
        //store.info.current_page = 1;
      }
      console.log(store.info);

      axios
        .get(url, {
          params: {
            api_key : '1516e402ee3167eca46dc8b19a9b1dc8',
            query: store.titleSearch,
            page: store.info.current_page,
          },
        })
        .then((result) => {
          store.resultList = result.data.results;
          store.info.current_page = result.data.page;
          store.info.total_pages = result.data.total_pages;
          store.info.total_results = result.data.total_results;

          console.log(store.resultList);
          console.log(store.info);

      
        })
        .catch((error) => {
          console.log(error);
        });
    },
    movePage(dir) {
      if (dir) store.info.current_page++;
      else store.info.current_page--;
      this.getApi(store.currentUrl);
      console.log(store.info.current_page);
    },
    /*  getImage(url){
      axios.get('https://image.tmdb.org/t/p/w300'+url).then((result))
    } */
  },
  mounted() {
    this.getApi();
  },
};
</script>

<template>
  <AppHeader />
  <main>
    <AppSearch @startSearch="getApi(store.apiUrl)" />
    <CardsContainer @movePageEvent="movePage" />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>