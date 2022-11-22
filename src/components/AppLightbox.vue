<script>
import { store } from "../data/store";

export default {
  name: "AppLightbox",
  components: {},
  props: {
    movie: Object,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getImageUrl(path) {
      return "https://image.tmdb.org/t/p/w500" + path;
    },
    getImageUrl(path) {
      return "https://image.tmdb.org/t/p/w500" + path;
    },
    getFlag(country) {
      if (country === "en" || country === "uk") return "fi-gb";
      else if (country === "ko") return "fi-kr";
      return "fi-" + country;
    },
    getStars(number) {
      let n = 1,
        num = [];
      if (number > 2) n = Math.floor(number / 2);
      for (let i = 0; i < n; i++) num.push("x");

      return num;
    },
  },
};
</script>

<template>
  <section @click.self="store.infoViewer = !store.infoViewer" class="d-flex justify-content-center align-items-center">
    <div class="my-lightbox">
      <div class="container w-100 h-100">
        <div class="row h-100">
          <div
            class="col-auto d-flex justify-content-center align-items-center"
          >
            <img
              class=""
              :src="getImageUrl(movie.poster_path)"
              alt=""
              v-if="movie.poster_path != null"
            />

            <div v-else class="alternative">
              <h3 v-if="movie.name != null">{{ movie.name }}</h3>
              <h3 v-else-if="movie.title">{{ movie.title }}</h3>
            </div>

          </div>
          <div class="col textMovie">
            <i
              @click="store.infoViewer = !store.infoViewer"
              class="fa-solid fa-xmark"
            ></i>

            <!-- ? Info -->
            <div class="info">
              <!-- ? Title -->
              <h3 class="display-6 text-center py-5" v-if="movie.name != null">
                {{ movie.name }}
              </h3>
              <h3
                class="display-6 text-center py-5"
                v-else-if="movie.title != null"
              >
                {{ movie.title }}
              </h3>

              <!-- ? Original title -->
              <h4 v-if="movie.original_name != null">
                <strong>Original:</strong> {{ movie.original_name }}
              </h4>
              <h4 v-else-if="movie.original_title != null">
                <strong>Original:</strong> {{ movie.original_title }}
              </h4>

              <!-- ? flag -->
              <h5 class="">
                <span
                  class="fi"
                  :class="getFlag(movie.original_language)"
                ></span>
                ({{ movie.original_language }})
              </h5>

              <!-- <h6>Voto: {{ movie.vote_average }}</h6> -->
              <div class="stars pb-4">
                <i
                  v-for="(x, index) in getStars(movie.vote_average)"
                  :key="index"
                  class="fa-solid fa-star"
                ></i>
              </div>

              <p>
                {{ movie.overview }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

section {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: 100;
}
.my-lightbox {
  width: 60vw;
  height: 80vh;
  background-color: #2c2c2c;

  .row,
  .col{
    max-height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    overflow: hidden;
  }

  .textMovie {
    position: relative;

    .fa-xmark {
      position: absolute;
      top: 0;
      right: 0;
      padding: 0.5rem;
      cursor: pointer;
      font-size: 2rem;
    }
  }

  .info {
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    p{
      overflow: auto;
      max-height: 350px;
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
</style>