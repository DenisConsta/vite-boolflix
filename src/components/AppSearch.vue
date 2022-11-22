
<script>

import { store } from '../data/store';

export default {
  name: "AppSearch",
  data(){
    return{
      store,

    }
  },
  methods:{
    
  }

};

</script>

<template>
  <div class="search d-none d-sm-block">
    <input class="input toggle" type="text" placeholder="Titles, people, genres" v-model="store.titleSearch" @keyup.enter="$emit('startSearch')"/>
    <img
      class="img"
      src="https://static.vecteezy.com/system/resources/previews/000/442/657/non_2x/vector-search-icon.jpg"
      alt=""
    />
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';


.search {
  display: inline-block;
  position: relative;
  input {
    width: 0px;
    height: 34px;
    background-color: #000;
    box-shadow: none;
    color: #fff;
    border: 1px solid transparent;
    outline: none;
    padding-left: 35px;
    font-size: 16px;
    transition: 0.3s ease all;
    &.toggle {
      width: 240px;
      border-color: #fff;
    }
  }
  img {
    width: 18px;
    left: 8px;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
}
</style>