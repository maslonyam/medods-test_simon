<template>
  <button class="start-button" type="button" @click="$emit('startGame')">Start Game</button>
</template>

<script>
export default {

};
</script>

<style lang="scss">
$purple: #CF92FF;
$white: #ffffff;

  .start-button {
    padding: 20px;
    font-size: 1.5em;
    color: $white;
    background-color: $purple;
    border-radius: 20px;
    border: none;

    &:hover {
      cursor: pointer;
      filter: contrast(120%);
    }
  }
</style>
