<template>
  <div class="game-dashboard">
    <p class="game-dashboard__round">Round: <span class="round-color"> {{ round }} </span></p>
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
$purple: #CF92FF;
  .game-dashboard {
    &__round {
      font-weight: 400;
      font-size: 40px;

      .round-color {
        color: $purple;
        font-weight: 700;
      }
    }
  }
</style>
