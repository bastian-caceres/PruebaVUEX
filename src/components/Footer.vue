<template>
    <footer class="bg-dark text-center p-2">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto ">
                <ul class="list-inline text-center">
                    <a class="list-inline-item text-light" href="https://github.com/bastian-caceres" target="_blank"><font-awesome-icon class="fa-3x" :icon="['fab', 'github-square']"/></a>
                    <a class="list-inline-item text-light" href="https://cl.linkedin.com/" target="_blank"><font-awesome-icon class="fa-3x" :icon="['fab', 'linkedin']"/></a>
                    <a class="list-inline-item text-light" href="https://es-la.facebook.com/" target="_blank"><font-awesome-icon class="fa-3x" :icon="['fab', 'facebook-square']"/></a>
                    <a class="list-inline-item text-light" href="https://www.instagram.com/" target="_blank"><font-awesome-icon class="fa-3x" :icon="['fab', 'instagram']"/></a>
                </ul>
                <p class="text-muted"> Pagina Web Creada por: Bastián Cáceres</p>
                <p class="text-muted">Copyright&nbsp;©&nbsp;The Games Bits - 2020</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
    footer{
        text-align:center;
        width:100%;
    }
</style>