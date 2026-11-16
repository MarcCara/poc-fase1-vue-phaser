<script setup>
import { ref } from 'vue';
// Importem el component pont que conté el <canvas> de Phaser
import PhaserCanvas from './components/PhaserCanvas.vue';

const colorAvatar = ref('#10b981');


const estadoAvatar = ref('Disponible');

const nom = ref('MarcCara');
const mostrarJoc = ref(true);
const juegoEnPausa = ref(false);
</script>

<template>
  <main class="contenidor-app">
    <div class="controls">
      
      <label>
        <input type="color" v-model="colorAvatar" />
      </label>
      <input v-model="nom" placeholder="Escriu el teu nom d'usuari..." />
      <button @click="mostrarJoc = !mostrarJoc">
        {{ mostrarJoc ? 'Amaga el llenç' : 'Mostra el llenç' }}
      </button>
      <button @click="juegoEnPausa = !juegoEnPausa">
        {{ juegoEnPausa ? 'Reprèn' : 'Pausa' }}
      </button>
      <select v-model="estadoAvatar">
        <option>Disponible</option>
        <option>Ocupado</option>
        <option>Absent</option>
      </select>
    </div>

    <PhaserCanvas v-if="mostrarJoc" :nomUsuari="nom" :colorAvatar="colorAvatar" :estadoAvatar="estadoAvatar" :juegoEnPausa="juegoEnPausa"/>
  </main>
</template>
