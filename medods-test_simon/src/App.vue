/* eslint-disable no-param-reassign */
<template>
  <div id="app">
    <div class="game-area">
    <QuaterButton @checkClick="checkClick" id="button-1"/>
    <QuaterButton @checkClick="checkClick" id="button-2"/>
    <QuaterButton @checkClick="checkClick" id="button-3"/>
    <QuaterButton @checkClick="checkClick" id="button-4"/>
    <LoseGame :loseClass="loseGameClass"/>
  </div>
    <StartButton @startGame="startGame" />
  </div>
</template>

<script>
import QuaterButton from './components/QuaterButton.vue';
import StartButton from './components/StartButton.vue';
import LoseGame from './components/LoseGame.vue';

export default {
  name: 'App',
  data() {
    return {
      buttonsArray: [],
      tempArray: [],
      round: 0,
      loseGameClass: '',
    };
  },
  components: {
    QuaterButton,
    StartButton,
    LoseGame,
  },
  methods: {
    startGame() {
      this.buttonsArray = [];
      this.tempArray = [];
      this.loseGameClass = '';
      this.newRound();
    },
    newRound() {
      const buttons = document.querySelectorAll('.game-area__button');

      if (this.tempArray.length > 0) {
        this.buttonsArray = this.tempArray.slice(0);
      }

      this.buttonsArray.push(buttons[this.getRandomNum()]);
      this.tempArray = this.buttonsArray.slice(0);
      this.animateButtons(this.buttonsArray);
      console.log(this.buttonsArray);
    },
    checkClick($event) {
      if ($event.target === this.buttonsArray.shift()) {
        if (this.buttonsArray.length === 0) {
          this.round += 1;
          this.newRound();
        } else {
          console.log('continue');
        }
      } else {
        this.loseGame();
      }
    },
    loseGame() {
      this.loseGameClass = 'show';
    },
    getRandomNum() {
      return Math.floor(Math.random() * 4);
    },
    animateButtons(array) {
      let index = 0;
      const interval = setInterval(() => {
        const button = array[index];
        console.log(index, button, this.buttonsArray.length);
        this.lightButton(button);
        index += 1;
        if (index >= this.buttonsArray.length) {
          clearInterval(interval);
        }
      }, 1500);
    },
    lightButton(button) {
      const but = button;
      setTimeout(() => {
        but.classList.add('light-up');
        setTimeout(() => {
          but.classList.remove('light-up');
        }, 500);
      }, 500);
    },
  },
};
</script>

<style lang="scss">
$white: #ffffff;
$black: #000000;
  .game-area {
    position: relative;
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
