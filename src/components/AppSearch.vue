<script>
import { store } from '../data/store';
export default {
  name: 'AppSearch',
  data(){
    return{
      store,

    }
  }
}
</script>

<template>
  <div class="container py-3">
    <input type="text" v-model="store.titleSearch" placeholder="search"  @keyup.enter="$emit('startSearch')">
    <button @click="$emit('startSearch')" class="btn bg-danger"><i class="fa-solid fa-magnifying-glass"></i></button>
  </div>
</template>

<style lang="scss" scoped>

</style>