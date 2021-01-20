<template>
  <div id="app" class ="container">
    <div id="nav">
      <router-link class="btn btn-outline-info" to="/">Home</router-link> |
      <router-link class="btn btn-outline-danger" to="/about">About</router-link> |
      <router-link  class="btn btn-outline-warning" to="/servicios">Services</router-link> |
      <router-link  class="btn btn-outline-dark" to="/fotos/fotos">Images</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
