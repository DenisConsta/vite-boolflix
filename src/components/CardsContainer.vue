<script>
import { store } from '../data/store';
import AppCard from './AppCard.vue';

export default {
  name: 'CardsContainer',
  components:{
    AppCard,

  },
  data(){
    return{
      store,

    }
  }

}
</script>

<template>
  <div class="section">
    <div class="container ">
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
        <AppCard v-for="movie in store.resultList" :key="movie.id" :movie="movie"/>

      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixin' as *;
.container{
  min-height: 800px;
}
</style>