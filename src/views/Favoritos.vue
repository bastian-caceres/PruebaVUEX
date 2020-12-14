<template>
    <section class="container my-5">
        <br>
        <h2 class="my-5 text-light">Lista de Favoritos</h2>        
        <div class="row my-5" v-if="enviarFavoritos.length > 0">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviarFavoritos" :key="index">
                <div class="card">
                    <img :src="item.background_image" class="card-img-top" :alt="item.id">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <button type="button" class="btn btn-danger" @click="borrarFavs(index)">Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
               Aun no existen favoritos seleccionados por el usuario
            </div>
        </div>        
    </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Favoritos',
    methods: {
        borrarFavs(index){
            this.$store.dispatch('borrandoFavoritos',index);
        },

    },
    computed: {
        ...mapGetters(['enviarFavoritos'])
    },
}
</script>

<style>
.imgDetalle{
    height: auto;
    width: 300px;
}
</style>