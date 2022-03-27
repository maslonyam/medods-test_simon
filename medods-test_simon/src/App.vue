<template>
  <div id="app">
    <div class="game-area">
    <QuaterButton @checkClick="checkClick" id="button-1"/>
    <QuaterButton @checkClick="checkClick" id="button-2"/>
    <QuaterButton @checkClick="checkClick" id="button-3"/>
    <QuaterButton @checkClick="checkClick" id="button-4"/>
  </div>
    <StartButton @startGame="startGame" />
  </div>
</template>

<script>
import QuaterButton from './components/QuaterButton.vue';
import StartButton from './components/StartButton.vue';

export default {
  name: 'App',
  data() {
    return {
      buttonsArray: [],
      clientButtonsArray: [],
    };
  },
  components: {
    QuaterButton,
    StartButton,
  },
  methods: {
    startGame() {
      this.$buttonsArray = [];
      this.newRound();
    },
    newRound() {
      const buttons = document.querySelectorAll('.game-area__button');
      this.$buttonsArray.push(buttons[this.getRandomNum()]);
      console.log(this.$buttonsArray);
    },
    checkClick($event) {
      this.clientButtonsArray.push($event.target);
      console.log(this.clientButtonsArray);
    },
    getRandomNum() {
      return Math.floor(Math.random() * 4);
    },

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
