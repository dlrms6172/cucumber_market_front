<template>
  <nav>
    <router-link to="/"></router-link>
    <router-link to="/about"></router-link>
    <router-link to="/company"></router-link>
    <router-link to="/culture"></router-link>
  </nav>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
