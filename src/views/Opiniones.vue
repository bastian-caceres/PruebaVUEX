<template>
    <section class="container my-5 text-light" >
        <br>
        <h2 class="my-5">Lista de opiniones</h2>
        <div v-if="enviarOpiniones.length > 0">
            <!-- acordion -->
            <div class="accordion" id="accordionExample" v-for="(item,index) in enviarOpiniones" :key="index">
                <div class="accordion-item">
                    <h4 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-toggle="collapse" :data-target="'#collapseOne'+item.id" aria-expanded="false" aria-controls="collapseOne">
                            Opinión Sobre: {{item.nombreGame}}. Realizado por: {{item.nombre}}
                        </button>
                    </h4>
                    <div :id="'collapseOne'+item.id" class="accordion-collapse collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>{{item.textoArea}}.</strong>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
               Aun no existen opiniones de los usuarios
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
// import { mapGetters } from "vuex";
export default {
    name: 'Opiniones',
    computed: {
        ...mapGetters(['enviarOpiniones'])
    },
}
</script>

<style>

</style>