<template>
  <div class="game-settings">
    <label for="time-1500" class="game-settings__label">
      <input type="radio" name="game-level"
      id="time-1500" value="1500" checked
      @input="$emit('setLevel', $event)"/>
      <span>Легкий</span>
    </label>
    <label for="time-1000" class="game-settings__label">
      <input type="radio" name="game-level"
      id="time-1000" value="1000"
      @input="$emit('setLevel', $event)"/>
      <span>Средний</span>
    </label>
    <label for="time-400" class="game-settings__label">
      <input type="radio" name="game-level"
      id="time-400" value="400"
      @input="$emit('setLevel', $event)"/>
      <span>Сложный</span>
    </label>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
