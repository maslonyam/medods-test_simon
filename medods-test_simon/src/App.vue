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
  <div class="game-panel">
    <GameDashboard :round="round" />
    <GameSettings @setLevel="setLevel" />
    <StartButton @startGame="startGame" />
  </div>
  </div>
</template>

<script>
import QuaterButton from './components/QuaterButton.vue';
import StartButton from './components/StartButton.vue';
import LoseGame from './components/LoseGame.vue';
import GameSettings from './components/GameSettings.vue';
import GameDashboard from './components/GameDashboard.vue';

export default {
  name: 'App',
  data() {
    return {
      buttonsArray: [],
      tempArray: [],
      round: 0,
      level: 1500,
      loseGameClass: '',
    };
  },
  components: {
    QuaterButton,
    StartButton,
    LoseGame,
    GameSettings,
    GameDashboard,
  },
  methods: {
    startGame() {
      this.buttonsArray = [];
      this.tempArray = [];
      this.loseGameClass = '';
      this.round = 1;
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
    },
    checkClick($event) {
      this.playSound($event.target.getAttribute('id'));
      if ($event.target === this.buttonsArray.shift()) {
        if (this.buttonsArray.length === 0) {
          setTimeout(() => {
            this.round += 1;
            this.newRound();
          }, 1500);
        }
      } else {
        this.loseGame();
      }
    },
    loseGame() {
      this.loseGameClass = 'show';
    },
    setLevel($event) {
      if (this.round > 0) {
        this.startGame();
      }
      this.level = Number($event.target.value);
    },
    getRandomNum() {
      return Math.floor(Math.random() * 4);
    },
    animateButtons(array) {
      let index = 0;
      const interval = setInterval(() => {
        const button = array[index];
        this.lightButton(button);
        this.playSound(button.getAttribute('id'));
        index += 1;
        if (index >= this.buttonsArray.length) {
          clearInterval(interval);
        }
      }, this.level);
    },
    lightButton(button) {
      const but = button;
      setTimeout(() => {
        but.classList.add('light-up');
        setTimeout(() => {
          but.classList.remove('light-up');
        }, 250);
      }, 250);
    },
    playSound(id) {
      const audioSource = id;
      const audio = new Audio();
      if (audioSource === 'button-1') {
        audio.src = 'https://zvukogram.com/mp3/cats/861/zvuk-notyi-fa.mp3';
      } else if (audioSource === 'button-2') {
        audio.src = 'https://zvukogram.com/mp3/cats/861/zvuk-notyi-re.mp3';
      } else if (audioSource === 'button-3') {
        audio.src = 'https://zvukogram.com/mp3/cats/861/zvuk-notyi-do.mp3';
      } else {
        audio.src = 'https://zvukogram.com/mp3/cats/861/zvuk-notyi-si.mp3';
      }

      audio.play();
    },
  },
};
</script>

<style lang="scss">
$white: #ffffff;
$black: #000000;
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;

  height: 100vh;
}
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

  .game-panel {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
</style>
