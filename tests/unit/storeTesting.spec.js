import Vue from 'vue';
import Vuex from 'vuex';
import store from '@/store/store';

describe('Prueba store.vue', () => {
  beforeAll(() => {
    Vue.use(Vuex);
    store = new Vuex.Store(store);
  })
});

describe('Testing 1', () => {
  it('Action', () => {

  store.dispatch('agregandoFavoritos', 'Prueba Action 1')
  expect(typeof store.state.favorito).toBe("object");

  })
}),

describe('Testing 2', () => {
  it('Testing a Mutation', () => {

    store.dispatch('mutandoFavoritos', 'Prueba Mutation 1')
    expect(store.mutations).toBe(undefined);
    
  })
})
  