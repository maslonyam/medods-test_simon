<template>
  <div class="game-dashboard">
    <p class="game-dashboard__round">Round: {{ round }} </p>
  </div>
</template>

<script>
export default {
  props: {
    round: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss">
  .game-dashboard {
    &__round {
      font-weight: 700;
      font-size: 40px;
    }
  }
</style>
