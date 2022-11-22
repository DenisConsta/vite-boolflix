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
    getFlag(country) {
      if(country === 'en' || country === 'uk')
        return "fi-gb"
      return "fi-" + country;
    },
  },
  computed: {
  
  },
};
</script>


<template>
  <div class="flip-card col mb-3">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        
        <img
          :class="{'actor' : movie.media_type == 'person'}"
          :src="getImageUrl(movie.profile_path)"
          :alt="movie.title"
          v-if="movie.profile_path != null && movie.media_type == 'person'"
        />
        <img
          :src="getImageUrl(movie.poster_path)"
          :alt="movie.title"
          v-else-if="movie.poster_path != null"
        />

        <div v-else class="alternative">
          <h3 v-if="movie.media_type == 'tv'">{{ movie.name }}</h3>
          <h3 v-else-if="movie.media_type == 'person'">{{movie.name}}</h3>
          <h3 v-else>{{ movie.title }}</h3>
        </div>

      </div>
      <div class="flip-card-back">
        <div v-if="movie.media_type == 'person'" class="actor w-100 h-100 d-flex align-items-center justify-content-center">
          <h3 class="text-center ">{{ movie.name }}</h3>
        </div>
        <h3 v-if="movie.media_type == 'tv'">Titolo: {{ movie.name }}</h3>
        <h3 v-else-if="movie.media_type != 'person'">Titolo: {{ movie.title }}</h3>

        <h3 v-if="movie.media_type == 'tv'">Titolo Originale: {{ movie.original_name }}</h3>
        <h3 v-else-if="movie.media_type != 'person'">Titolo Originale: {{ movie.original_title }}</h3>
        <h5><span class="fi" :class="getFlag(movie.original_language)"></span>{{ movie.original_language }}</h5>
        <h6 v-if="movie.media_type != 'person'">Voto: {{ movie.vote_average }}</h6>
<!--         <span class="fi fi-gr"></span>
 -->        
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
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;

    &.actor {
      
      &::after{
      }
    }

  }

  .alternative {
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
  h6 {
    font-size: 0.85rem;
    padding: 0.3rem 0.6rem;
  }

  h5{
    span{
      margin-right: .3rem;
    }
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