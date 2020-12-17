import Vue from 'vue'
import VueRouter from 'vue-router'
import VistaPrincipal from '../views/VistaPrincipal.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'VistaPrincipal',
    component: VistaPrincipal
  },
  {
    path: '/favoritos',
    name: 'Favoritos',
    component: () => import(/* webpackChunkName: "Favoritos" */ '../views/Favoritos.vue')
  },
  {
    path: '/opiniones',
    name: 'Opiniones',
    component: () => import(/* webpackChunkName: "Opiniones" */ '../views/Opiniones.vue')
  },
  {
    path: '/administracion',
    name: 'Administracion',
    component: () => import(/* webpackChunkName: "Administracion" */ '../views/Administracion.vue')
  },
  {
    path: '/editarOpinion/:idLista',
    name: 'EditarOpinion',
    component: () => import(/* webpackChunkName: "EditarOpinion" */ '../views/EditarOpinion.vue'),
    props: true
  },
  {
    path: '/paginacionprueba',
    name: 'PaginacionPrueba',
    component: () => import(/* webpackChunkName: "PaginacionPrueba" */ '../views/PaginacionPrueba.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */'../views/NotFound')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

