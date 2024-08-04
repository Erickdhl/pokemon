<script src="./PokemonPage.ts" />

<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>

    <div v-else>
        <h1>¿Quién es este pokémon?</h1>
        
        <PokemonPicture 
            :pokemon-id="pokemon.id" 
            :show-pokemon="showPokemon" 
        />

        <PokemonOptions 
            :pokemons="pokemonArr"
            @selection-pokemon="checkAnswer"
        />

        <template v-if="showAnswer">
            <h2 class="fade-in">{{ message }}</h2>
            <button class="styled-button" @click="newGame">
                Nuevo Juego
            </button>
        </template>

    </div>
    
</template>
<style scoped>
    h1 {
    font-family: 'Verdana', sans-serif;; /* Tipo de letra para h1 */
    font-size: 2rem; /* Tamaño de fuente para h1 */
    font-weight: 700; /* Peso de fuente para h1 */
    color: #333; /* Color del texto para h1 */
    margin-bottom: 20px; /* Espaciado debajo de h1 */
    }

    h2 {
    font-family: 'Verdana', sans-serif; /* Tipo de letra para h2 */
    font-size: 2rem; /* Tamaño de fuente para h2 */
    font-weight: 400; /* Peso de fuente para h2 */
    color: #333; /* Color del texto para h2 */
    margin-bottom: 30px; /* Espaciado debajo de h2 */
    }
    .styled-button {
    background-color: #4CAF50; /* Color de fondo */
    border: none;              /* Sin borde */
    color: white;              /* Color del texto */
    padding: 10px 20px;        /* Espaciado interno */
    text-align: center;        /* Alineación del texto */
    text-decoration: none;     /* Sin subrayado */
    display: inline-block;     /* Mostrar en línea */
    font-size: 16px;           /* Tamaño de fuente */
    margin: 4px 2px;           /* Margen */
    cursor: pointer;           /* Cursor de mano */
    border-radius: 12px;       /* Bordes redondeados */
    transition: background-color 0.3s ease; /* Animación de transición */
    }
</style>

