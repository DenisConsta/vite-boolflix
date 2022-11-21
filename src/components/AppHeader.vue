<script>

export default {
  name: 'AppHeader',

}
</script>

<template>
  <header>
    <div class="container py-3">
      <div class="logo">
        <img src="../assets/logo-boolflix.png" alt="boolflix">
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixin' as *;

.logo img{
  max-height: 3rem;
}


</style>