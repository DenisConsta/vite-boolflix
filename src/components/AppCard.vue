<script>
export default {
  name: "AppCard",
  props: {
    movie: Object,
  },
  data() {
    return {};
  },
  methods: {
    getImageUrl(path) {
      return "https://image.tmdb.org/t/p/w500" + path;
    },
  },
  
};
</script>


<template>

  <div class="flip-card col mb-3 ">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img :src="getImageUrl(movie.poster_path)" :alt="movie.title" v-if="movie.poster_path != null"/>
        <div v-else class="alternative">
          <h3>{{ movie.original_title }}</h3>
        </div>
      </div>
      <div class="flip-card-back">
        <h3>Titolo: {{ movie.title }}</h3>
        <h3>Titolo Originale: {{ movie.original_title }}</h3>
        <h5>Lingua: {{ movie.original_language }}</h5>
        <h6>Voto: {{ movie.vote_average }}</h6>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

.flip-card {
  background-color: transparent;
  min-height: 300px;
  cursor: pointer;
  perspective: 1000px; 

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }

  .alternative{
    width: 100%;
    height: 100%;
    background-color: #2c2c2c;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; 
  backface-visibility: hidden;
  
  text-align: left;
  h3,
  h5,
  h6{
    font-size: .85rem;
    padding: .3rem .6rem;
  }
}

.flip-card-front {
  color: black;
}

.flip-card-back {
  background-color: #2c2c2c;
  color: white;
  transform: rotateY(180deg);
}
</style>