import Vue from 'vue';
import Vuex from 'vuex';
import router from '../router/router';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // almacenan los datos de la api
    datosApi: [],
    favorito: [],
    opiniones:[],
    NumPag: []
  },
  getters: {
    // envia los datos de la api
    enviarDatosApi(state){
      return state.datosApi;
    },
    enviarFavoritos(state){
      return state.favorito;
    },
    enviarOpiniones(state){
      return state.opiniones;
    },
  },
  mutations: {
    // datos generales
    mutandoDatosApi(state,datos){
      for (let i = 0; i < datos.length; i++) {
        datos[i].favorito = false;
      }
      state.datosApi = datos;
    },
    // agregar favoritos
    mutandoFavoritos(state,valor){
      let resultado = state.datosApi.find(result => result.id == valor.id);
      // resultado.favorito = true;
      state.favorito.push(resultado)
    },
    // elminar favoritos
    mutandoEliminarFavorito(state, index){
      state.favorito.splice(index, 1);
    },
    // agregar opinion
    mutandoOpcion(state, opinion){      
      state.opiniones.push(opinion);
    },
    // eliminar opinion
    mutandoEliminarOpinion(state, index){
      state.opiniones.splice(index, 1);
    },
    // editar opinion
    mutandoEditarOpnion(state, juego){
      if (juego != undefined) {
        let item = state.opiniones.find(result => result.id == juego.id)
        if (item != undefined) {
          item.id = juego.id;
          item.nombre = juego.nombreUsuario;
          item.textoArea = juego.opinionJuego;
          item.nombreGame = juego.nombreJuego;          
        }else {
          console.log("el juego no exisste")
        }
      } else {
        console.log("no se encuntra la carga del juego")
      }
    }
  },
  actions: {
    // conecta con la api y lo transforma en un json
    async llamadoAPI({commit}){
      try {
        let result = await fetch('https://api.rawg.io/api/games?page=2')
        // let result = await fetch(`https://api.rawg.io/api/games?page=${this.state.NumPag[0]}`)
        let datos = await result.json();
        commit('mutandoDatosApi',datos.results);
      } catch (error) {
        console.error(error);
      }
    },
    // agregar favorito
    agregandoFavoritos({commit},valor){
      commit('mutandoFavoritos',valor)
      router.push({name: 'Favoritos'})
    },
    // borrar favorito
    borrandoFavoritos({commit}, index){
      commit('mutandoEliminarFavorito', index);
    },
    // agregar tarea
    agregarOpinion({commit}, opinion){
      commit('mutandoOpcion', opinion)
    },
    // eliminar opcion adminstracion
    eliminarOpinion({commit}, index){
      commit('mutandoEliminarOpinion', index)
    },
    // guardar juego
    guardarOpinion({commit},juego){
      commit('mutandoEditarOpnion',juego)
    },

  }
})
