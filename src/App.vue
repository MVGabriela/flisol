<template>
  <div class="app">
    <ul>
      <li><router-link to="/inicio">Inicio</router-link></li>
      <li><router-link to="/conferenciasYtalleres">Conferencias y Talleres</router-link></li>
      <li><router-link to="/extras">Extra</router-link></li>
      <li><router-link to="/login">Iniciar Sesión</router-link></li>
    </ul>
    <h1>{{ msg }}</h1>
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data (){
    return {
      msg: 'Flisol 2020'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1, h2 {
  font-weight: normal;
} 
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
