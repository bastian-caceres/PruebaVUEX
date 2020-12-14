<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">   
  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">    -->
    <router-link to="/"><img class="ml-5" src="https://images.vexels.com/media/users/3/135991/isolated/lists/ee03f76ed0711b770c0c797d83bd2ea0-icono-del-controlador-de-juego.png" alt="icono_juego"> </router-link>
    <router-link tag="div" class="navbar-brand" to="/">The Games Bits</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse mr-5" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Opiniones'}">Opiniones</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Favoritos'}">Favoritos</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Administracion'}">Administración</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'PaginacionPrueba'}">pruebas paginacion</router-link>
        </li>
      </ul>
    </div>

  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style scoped>
img{
  width: 70px;
  height: 70px;
}
</style>
