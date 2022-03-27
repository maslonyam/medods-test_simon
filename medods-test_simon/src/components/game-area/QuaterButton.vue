<template>
  <button class="game-area__button" :id="id"></button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
$red: #F53434;
$yellow: #FFD74B;
$green: #21D954;
$blue: #459FF2;

  .game-area {
    &__button {
      width: 200px;
      height: 200px;

      border: none;
      border-radius: 50px;

      &:hover {
        filter: brightness(1.1);
        cursor: pointer;
      }

      &:active {
        filter: contrast(200%);
      }
    }

    #button {
      &-1 {
        background-color: $red;
      }

      &-2 {
        background-color: $yellow;
      }

      &-3 {
        background-color: $green;
      }

      &-4 {
        background-color: $blue;
      }
    }
  }
</style>
