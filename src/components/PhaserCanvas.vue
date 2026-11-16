  <script setup>
  import { ref, watch, onMounted, onUnmounted } from 'vue';
  import Phaser from 'phaser';
  import { MainScene } from '../game/MainScene';
  const props = defineProps(['nomUsuari', 'colorAvatar', 'estadoAvatar']);
  const contenidor = ref(null);
  
  
  let game = null;
  onMounted(() => {
    game = new Phaser.Game({ type: Phaser.AUTO, width: 640, height: 400,
      backgroundColor: '#1e293b', parent: contenidor.value, scene: [MainScene] });
   game.events.once('ready', () => {
     game?.scene.getScene('MainScene')?.actualitzarNom(props.nomUsuari);
     game?.scene.getScene('MainScene')?.canviarColor(props.colorAvatar);
     game?.scene.getScene('MainScene')?.actualitzarEstat(props.estadoAvatar);
   });
  });
onUnmounted(() => game?.destroy(true));
 
watch(() => props.nomUsuari, (nouNom) => {
   const escena = game?.scene.getScene('MainScene');
   escena?.actualitzarNom(nouNom);
});

watch(() => props.colorAvatar, (nouColor) => {
  const escena = game?.scene.getScene('MainScene');
  escena?.canviarColor(nouColor);
});

watch(() => props.estadoAvatar, (nouEstat) => {
  const escena = game?.scene.getScene('MainScene');
  escena?.actualitzarEstat(nouEstat);
});

</script>
  <template><div ref="contenidor"></div></template>
