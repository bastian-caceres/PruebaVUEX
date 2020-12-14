<template>
    <section class="container text-light my-5">
        <br>
        <h2 class="my-5">Lista de opiniones a administrar</h2>
        <div v-if="enviarOpiniones.length > 0">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Juego</th>
                        <th>Usuario</th>
                        <th>opinion</th>
                        <th colspan="2" class="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody class="text-light">
                    <tr v-for="(item,index) in enviarOpiniones" :key="index">
                        <td>{{index+1}}</td>
                        <td>{{item.nombreGame}}</td>
                        <td>{{item.nombre}}</td>
                        <td>{{item.textoArea}}</td>
                        <td><button type="button" class="btn btn-danger" @click="eliminarOpinion(index)"><font-awesome-icon icon="trash-alt"></font-awesome-icon> Eliminar</button></td>
                        <td><button type="button" class="btn btn-info" @click="modificarOpinion(item)"><font-awesome-icon icon="edit"/> Editar</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
               Aun no existen datos para administrar
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    name: 'Administracion',
    computed: {
        ...mapGetters(['enviarOpiniones'])
    },
    methods: {
        ...mapActions(['eliminarOpinion']),
        modificarOpinion(item){
            this.$router.push({name:'EditarOpinion', params:{idLista:item.id}})
        }
    },
}
</script>

<style>

</style>