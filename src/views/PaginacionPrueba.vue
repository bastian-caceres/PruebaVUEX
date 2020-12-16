<template>
      <section class="container" >
        <br>
        <!-- paginacion -->
        <div class="bg-light text-center">
          <b-pagination class="justify-content-center" v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="my-table" ></b-pagination>
          <p class="mt-3">Current Page: {{ currentPage }}</p>
          <b-table id="my-table" :items="items" :per-page="perPage" :current-page="currentPage" small ></b-table>
        </div>
        <!-- todos los juegos -->
        <div class="row text-center">            
            <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-3" v-for="(item,index) in enviarDatosApi" :key="index">
                <div class="card">
                    <img :src="item.background_image" alt="imagen juego">
                    <div class="card-body">
                        <h5 class="card-title">{{item.name}}</h5>
                        <p class="card-text">Lanzamineto: {{item.released}}</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: 'PaginacionPrueba',
    data() {
        return {
          perPage: 3,
          currentPage: 1,
          items: [
            { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
            { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
            { id: 3, first_name: 'Barney', last_name: 'Rubble' },
            { id: 4, first_name: 'Betty', last_name: 'Rubble' },
            { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
            { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
            { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
            { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
            { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
          ]
        }
    },
    computed: {
      ...mapGetters(['enviarDatosApi']),
      rows() {
        return this.items.length
      }
    },
}
</script>