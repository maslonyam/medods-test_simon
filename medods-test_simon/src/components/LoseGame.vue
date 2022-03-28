<template>
  <div class="lose-game" :class="loseClass">
    <p class="lose-game__message">Game over</p>
  </div>
</template>

<script>
export default {
  props: {
    loseClass: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$white: #ffffff;
$black: #000000;
  .lose-game {
    position: absolute;
    top: 0;
    left: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: rgba($black, 0.5);
    backdrop-filter: blur(3px);
    border: 1px solid rgba($black, 0.1);
    border-radius: 50px;

    &.show {
      display: flex;
    }

    &__message {
      color: $white;
      font-weight: 700;
      font-size: 40px;
    }
  }
</style>
