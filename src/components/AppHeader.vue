<script>
export default {
  name: "AppHeader",
  components: {},
};
</script>

<template>
  <header>
    <div class="py-4 d-flex align-items-center">
      <!-- ? Logo -->
      <div class="logo">
        <img src="../assets/logo-boolflix.png" alt="boolflix" />
      </div>

      <div class="links d-none d-md-block">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">TV Series</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixin" as *;

.logo {

  padding-right: 3rem;
  img {
    max-height: 3rem;
  }
}

.links{

  ul{
    margin: 0;
    padding: 0;
    display: flex;
    gap: 1rem;

    li{
    list-style: none;

    a{
      text-decoration: none;
      color: white;
      font-size: 1rem;
    }
  }
  }
 
}
</style>