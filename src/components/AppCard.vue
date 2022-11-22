<script>
export default {
  name: "AppCard",
  components: {},
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
      if (country === "en" || country === "uk") return "fi-gb";
      else if (country === "ko") return "fi-kr";
      return "fi-" + country;
    },
  },
  computed: {},
};
</script>


<template>
  <div class="flip-card col mb-3">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img
          :src="getImageUrl(movie.poster_path)"
          :alt="movie.title"
          v-if="movie.poster_path != null"
        />

        <div v-else class="alternative">
          <h3 v-if="movie.name != null">{{ movie.name }}</h3>
          <h3 v-else-if="movie.title">{{ movie.title }}</h3>
        </div>
      </div>
      <div class="flip-card-back">
        <!-- ? Title -->
        <h3 v-if="movie.name != null">{{ movie.name }}</h3>
        <h3 v-else-if="movie.title != null">{{ movie.title }}</h3>

        <!-- ? Original title -->
        <h4 v-if="movie.original_name != null">
          Original: {{ movie.original_name }}
        </h4>
        <h4 v-else-if="movie.original_title != null">
          Original: {{ movie.original_title }}
        </h4>
        
        <!-- ? flag -->
        <h5 class="">
          <span class="fi" :class="getFlag(movie.original_language)"></span> ({{
            movie.original_language
          }})
        </h5>

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
  position: relative;
  transition: transform 0.2s;

  .myFlag {
    height: 25px;
    width: 25px;
  }

  &:hover {
    transform: scale(1.1);
    z-index: 1000;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
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

  h3 {
    font-weight: 600;
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }

  h4,
  h5,
  h6 {
    font-size: 0.85rem;
    padding: 0.3rem 0.6rem;
  }

  h5 {
    span {
      margin-right: 0.3rem;
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