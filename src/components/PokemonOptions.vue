<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" 
          :key="pokemon.id"
          @click="$emit( 'selectionPokemon', pokemon.id )">
          {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Pokemon } from '../interfaces/pokemon';

defineProps<{
  pokemons: Pokemon[]
}>();

</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li {
    background-color: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px;
    padding: 10px;
    font-size: 16px; /* Tamaño de letra mejorado */
    font-weight: 500; /* Peso de letra para mejorar la legibilidad */
    color: #333; /* Color del texto para un mejor contraste */
    transition: background-color 0.3s, box-shadow 0.3s; /* Transiciones suaves */
}

li:hover {
    background-color: rgba(0, 0, 0, 0.05);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Añadir sombra para profundidad */
}

.options-container {
    display: flex;
    justify-content: center;
    padding: 10px; /* Espaciado adicional alrededor del contenedor */
}
</style>