<template>
    <div class="container text-light">
        <h2 class="mt-5">Editado opinion de: {{nombreJuego}}</h2>
        <form @submit.prevent="guardarEditar">
            <div class="mb-3">
                <label for="codigo" class="form-label">Nombre Usuario</label>
                <input type="text" class="form-control" v-model="nombreUsuario">
            </div>
            <div class="mb-3">
                <label for="nombre" class="form-label">Opinion sobre el juego</label>
                <input type="text" class="form-control" v-model="opinionJuego">
            </div>
            <button type="submit" class="btn btn-success">Guardar</button>
            <button type="button" class="btn btn-primary mx-4" @click="$router.go(-1)">Regresar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'EditarOpinion',
    data() {
        return {
            nombreJuego: '',
            nombreUsuario: '',
            opinionJuego: '',
        }
    },
    props: {
        idLista: {
            type: String,
            required: true
        }
    },
    mounted() {
        // carga los datos correspondientes a la opinion a editar
        let item = this.$store.getters.enviarOpiniones.find(result => result.id == this.idLista);
        // variables
        this.nombreJuego = item.nombreGame;
        this.nombreUsuario = item.nombre;
        this.opinionJuego = item.textoArea
        this.idJuego = item.id;
       
    },
    methods: {
        guardarEditar(){
            if (this.nombreJuego && this.nombreUsuario && this.opinionJuego) {
                let juego = {
                    nombreJuego : this.nombreJuego,
                    nombreUsuario : this.nombreUsuario,
                    opinionJuego : this.opinionJuego,
                    id: this.idJuego
                };
                // envia los datos al store para poder compararlo con los datos a pedir
                this.$store.dispatch('guardarOpinion',juego);

                // una vez terminda la accion te envia a la pagina que le digas
                this.$router.push({name: 'Administracion'});
                
            } else {
                console.log('malo')
            }
        }
    },
}
</script>

<style>

</style>