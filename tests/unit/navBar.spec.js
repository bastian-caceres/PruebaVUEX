import { shallowMount } from '@vue/test-utils';
import NavBar from '@/components/NavBar.vue';

describe('Prueba NavBar', () => {
    it('Tercer Testing', () => {
      const wrapper = shallowMount(NavBar);

    expect(wrapper.find("li").text("Opiniones"));
    })
})