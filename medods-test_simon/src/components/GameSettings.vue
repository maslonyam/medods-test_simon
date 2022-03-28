<template>
  <div class="game-settings">
    <label for="time-1500" class="game-settings__label">
      <input type="radio" name="game-level"
      id="time-1500" value="1500" checked
      @input="$emit('setLevel', $event)"/>
      <span class="input-icon"></span>
      <span class="input-label">Легкий</span>
    </label>
    <label for="time-1000" class="game-settings__label">
      <input type="radio" name="game-level"
      id="time-1000" value="1000"
      @input="$emit('setLevel', $event)"/>
      <span class="input-icon"></span>
      <span class="input-label">Средний</span>
    </label>
    <label for="time-400" class="game-settings__label">
      <input type="radio" name="game-level"
      id="time-400" value="400"
      @input="$emit('setLevel', $event)"/>
      <span class="input-icon"></span>
      <span class="input-label">Сложный</span>
    </label>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
$purple: #CF92FF;
$white: #ffffff;
$black: #000000;
  .game-settings {
    display: flex;
    flex-direction: column;
    gap: 15px;

    margin: 30px 0;

    &__label {
      display: flex;
      align-items: center;
      font-size: 20px;

      input {
        position: absolute;
        opacity: 0;

        &:checked + .input-icon {
          background-color: $purple;
        }

        &:checked ~ .input-label {
          color: $purple;
          font-weight: 700;
        }
      }

      .input-icon {
        display: inline-block;
        width: 20px;
        height: 20px;

        margin-right: 10px;

        background-color: $white;
        border: 2px solid $purple;
        border-radius: 50%;
      }
    }
  }
</style>
