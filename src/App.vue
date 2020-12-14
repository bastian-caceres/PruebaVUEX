<template>
    <div class="principal">
      <div id="nav">
        <NavBar/>
      </div>
      <router-view/>
    <Footer/>
    </div>
</template>

<script>
import NavBar from './components/NavBar';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  },
  created() {
    this.$store.dispatch('llamadoAPI');
  },
}
</script>

<style>
/* fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

.principal{
  font-family: 'Orbitron', sans-serif;
  font-weight: 400;
  background-image: url('https://i.pinimg.com/originals/6d/5e/37/6d5e37b7e2f72577fa8c9eb8b98e74c8.jpg');
  background-size: cover;
  height: 100%;
}
/* navbar */
#nav{
  margin-bottom: 80px;
}
#nav a {
  font-weight: bold;
  color: #f0f3f7;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>

