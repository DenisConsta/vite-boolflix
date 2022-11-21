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
  <div class="container">
    <input type="text" v-model="store.titleSearch" placeholder="search">
    <button @click="$emit('startSearch')" class="btn btn-info">cerca</button>
  </div>
</template>

<style lang="scss" scoped>

</style>