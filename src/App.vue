<script>
import axios from 'axios';
import { store } from "./data/store";

import AppHeader from "./components/AppHeader.vue";
import AppSearch from './components/AppSearch.vue';
import CardsContainer from "./components/CardsContainer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    CardsContainer,
    AppSearch,

  },
  data(){
    return{
      store,

    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl,{
        params:{
          query: store.titleSearch,

        }
      })
      .then((result) => {
        store.resultList = result.data;
        console.log(store.resultList);
      })
      .catch((error) =>{
        console.log(error);
      })
    }
  }
};
</script>

<template>
  <AppHeader />
  <main>
    <AppSearch @startSearch="getApi()"/>
    <CardsContainer />
  </main>
</template>

<style lang="scss">
@use "./styles/general.scss";


</style>