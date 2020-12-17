<template>
    <section class="container" >
        <br>
        <!-- paginacion -->
        <!-- <nav aria-label="Page navigation example text-center">
            <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                    <li class="page-item" value="1"><a class="page-link" href="#">1</a></li>
                    <li class="page-item" value="2"><a class="page-link" href="#">2</a></li>
                    <li class="page-item" value="3"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
            </ul>
        </nav>  -->
        <!-- todos los juegos -->
        <div class="row text-center">            
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviarDatosApi" :key="index">
                <!-- <div class="card" :class="{sombras : item.favorito}"> -->
                <div class="card">
                    <!-- <div v-if="">

                    </div> -->
                    <video :src="item.clip.clip" controls :poster="item.background_image"/>
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">Lanzamineto: {{item.released}}</p>
                        <button type="button" class="btn btn-primary mr-4" data-toggle="modal" :data-target="'#opinion'+item.id">Opinar</button>
                        <button type="button" class="btn btn-primary mr-4" data-toggle="modal" :data-target="'#detalles'+item.id">Ver más</button>
                    </div>
                </div>
                
                <!-- Modal Opinion--> 
                <div class="modal fade" :id="'opinion'+item.id" tabindex="-1" aria-labelledby="opinionLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content text-left">
                            <div class="modal-header">
                                <h5 class="modal-title" id="opinionLabel">{{item.name}}</h5>
                            </div>
                            <div class="modal-body">
                                <div>
                                    <p>Tu Usuario:</p>
                                    <input ref="user" type="text" placeholder="Ingresa tu nombre de Usuario" v-model="item.nombre">
                                </div>
                                <div class="mt-2">
                                    <label for="textAreaOpinion">Tu opinión:</label>
                                    <textarea ref="opinionUser" class="form-control" placeholder="Escriba su opinion" id="textAreaOpinion" v-model="item.textoArea"></textarea>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close" @click="agregarOpinion(item)">Guardar</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close" @click="cerrarModal(item)"><font-awesome-icon :icon="['far', 'window-close']"/></button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Modal detalle-->  
                <div class="modal" tabindex="-1" :id="'detalles'+item.id" aria-labelledby="opinionLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">{{item.name}}</h5>
                        </div>
                        <div class="modal-body">
                            <!-- card -->
                            <div class="card" >
                                <div class="row">
                                    <div class="col-md-5">
                                        <img class="imgDetalle" :src="item.background_image" alt="...">
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <!-- id -->
                                            <div><strong>ID: {{item.id}}</strong> </div>    
                                            <!-- genero -->
                                            <label><strong>Genero: </strong> 
                                                <div class="d-inline-block" v-for="(genero, index) in item.genres" :key="index">
                                                    <div><strong>{{genero.name}}/</strong></div>
                                                </div>
                                            </label>
                                            <!-- plataformas -->
                                            <label><strong>Plataformas: </strong> 
                                                <div class="d-inline-block" v-for="(plataforma, index) in item.stores" :key="index">
                                                    <div><strong>{{plataforma.store.name}}/</strong></div>
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal" aria-label="Close" @click="agregandoFavoritos(item)"><font-awesome-icon icon="plus"/> Favoritos</button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal" aria-label="Close"><font-awesome-icon :icon="['far', 'window-close']"/></button>
                        </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Swal from 'sweetalert2';

export default {
    name: 'ListaJuegos',
    data() {
        return {
            nombre: '',
            textoArea: '',
        }
    },
    computed: {
        ...mapGetters(['enviarDatosApi'])
    },
    methods: {
        ...mapActions(['agregandoFavoritos']),
        agregarOpinion(item){
            if (item.nombre !== null && item.textoArea !== null && item.id !== null && item.nombreGame !== null && item.nombre.length >= 5 && item.textoArea.length >= 5) {
                let opinion = {
                    id: item.id,
                    nombre: this.nombre,
                    textoArea: this.textoArea,
                    nombreGame: item.name
                }
                this.$store.dispatch('agregarOpinion', opinion);
                this.nombre =''
                this.textoArea =''
                this.$router.push({name: 'Opiniones'});

            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el Formulario..',
                    text: 'Debe rellenar ambos campos!',
                    footer: 'el nombre y la opinion deben tener minimo 5 caracteres'
                })
            }
        },
        // resetea los campos con el boron X
        cerrarModal(item){
            item.nombre =''
            item.textoArea =''
        }
    },
}
</script>

<style scoped>
    img, video {
        height: auto;
        width: auto;
    }

    .imgDetalle{
        height: auto;
        width: 300px;
    }
    /* .sombras{
        border: 2px solid red;
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(132,132,201,1) 48%, rgba(0,212,255,1) 100%); 
    } */
</style>