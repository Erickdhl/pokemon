import { DefineComponent } from 'vue';

declare module './PokemonPage.vue' {
  const PokemonPage: DefineComponent<{}, {}, any>;
  export default PokemonPage;
}