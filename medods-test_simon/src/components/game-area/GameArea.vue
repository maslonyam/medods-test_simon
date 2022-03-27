<template>
  <div class="game-area">
    <QuaterButton id="button-1"/>
    <QuaterButton id="button-2"/>
    <QuaterButton id="button-3"/>
    <QuaterButton id="button-4"/>
  </div>
</template>

<script>
import QuaterButton from './QuaterButton.vue';

export default {
  components: {
    QuaterButton,
  },
};
</script>

<style lang="scss">
$white: #ffffff;
$black: #000000;
  .game-area {
    display: grid;
    grid-template-columns: 200px 200px;
    grid-template-rows: 200px 200px;
    gap: 20px;
    width: fit-content;
    padding: 20px;

    background-color: $white;
    border: 1px solid rgba($black, 0.5);
    border-radius: 50px;
  }
</style>
