<script>
import { store } from '../data/store';
import AppCard from './AppCard.vue';

export default {
  name: 'CardsContainer',
  components:{
    AppCard,
  },
  props:{
    type: Array,
    titleSection: String,

  },
  data(){
    return{
      store,

    }
  }

}
</script>

<template>
  <div class="section pb-4">
    <div class="container ">
      <h1 class="py-3">{{titleSection}}</h1>
      <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6">
        <AppCard v-for="movie in type" :key="movie.id" :movie="movie"/>
      </div>
      
 <!--      <nav class="d-flex justify-content-center align-items-center gap-3 py-4">
        <button v-if="store.info.current_page > 1" class="btn btn-info" @click="$emit('movePageEvent', false)"><i class="fa-solid fa-chevron-left"></i></button>
        <h5 class="">{{store.info.current_page}} / {{store.info.total_pages}} pages</h5>
        <button v-if="store.info.current_page != store.info.total_pages" class="btn btn-info" @click="$emit('movePageEvent', true )"><i class="fa-solid fa-chevron-right"></i></button>
      </nav> -->
    
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixin' as *;

</style>