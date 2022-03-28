<template>
  <button
    class="game-area__button"
    :id="id" type="button"
    @click="$emit('checkClick', $event)">
  </button>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  methods: {

  },
};
</script>

<style lang="scss">
$red: #F5347A;
$yellow: #FFD74B;
$green: #21D954;
$blue: #459FF2;

  .game-area {
    &__button {
      width: 200px;
      height: 200px;

      border: none;
      border-radius: 50px;

      &.light-up {
        transform: scale(1.02);
        filter: contrast(300%);
      }

      &:hover {
        transform: scale(1.02);
        filter: brightness(1.1);
        cursor: pointer;
      }

      &:active {
        filter: contrast(300%);
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
