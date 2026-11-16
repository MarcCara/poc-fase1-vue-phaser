<script setup>
import { ref } from 'vue';
// Importem el component pont que conté el <canvas> de Phaser
import PhaserCanvas from './components/PhaserCanvas.vue';

// Selector de COLOR
const colorAvatar = ref('#10b981');
//

// Variable reactiva que guarda el nom escrit a la caixa de text
const nom = ref('MarcCara');
// Booleà per muntar/desmuntar el joc i verificar onMounted / onUnmounted
const mostrarJoc = ref(true);
</script>

<template>
  <main class="contenidor-app">
    <!-- Tota la interfície d'usuari (inputs, botons) es fa en HTML/CSS dins de Vue -->
    <div class="controls">
      
// Selector de COLOR
      <label>
        <input type="color" v-model="colorAvatar" />
      </label>
//
      <input v-model="nom" placeholder="Escriu el teu nom d'usuari..." />
      <button @click="mostrarJoc = !mostrarJoc">
        {{ mostrarJoc ? 'Amaga el llenç' : 'Mostra el llenç' }}
      </button>
    </div>

    <!-- Passem 'nom' cap avall amb :nomUsuari i controlem el cicle amb v-if -->
    <PhaserCanvas v-if="mostrarJoc" :nomUsuari="nom" :colorAvatar?="colorAvatar"/>
  </main>
</template>
