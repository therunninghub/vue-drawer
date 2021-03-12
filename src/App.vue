<template>
  <div id="app">
    <div class="demo-container">
      <div>
        <input type="radio" id="left" value="left" v-model="position" />
        <label for="left">left</label>
      </div>

      <div>
        <input type="radio" id="right" value="right" v-model="position" />
        <label for="right">right</label>
      </div>

      <div>
        <input type="radio" id="up" value="up" v-model="position" />
        <label for="up">up</label>
      </div>

      <div>
        <input type="radio" id="down" value="down" v-model="position" />
        <label for="down">down</label>
      </div>
    </div>

    <button @click="toggle">Open/Close</button>
    <Drawer
      :maskClosable="true"
      :zIndex="1002"
      @close="toggle"
      :animation="animation"
      :position="position"
      :closable="true"
    >
      <div v-if="open">
        <span @click="clickContent">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit porro
          maxime minima sapiente deserunt? Omnis voluptate velit recusandae et,
          rem natus exercitationem ullam doloremque ratione earum non cupiditate
          explicabo neque!
        </span>
        <Drawer
          :maskClosable="true"
          @close="innerOpen = false"
          :position="position"
          :closable="true"
        >
          <div v-if="innerOpen">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            architecto dolor iure atque, suscipit quae deserunt impedit quasi
            quisquam, aperiam soluta nobis consequuntur maiores alias beatae.
            Molestiae culpa impedit sit.
          </div>
        </Drawer>
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from "@/Drawer.vue";
import "./demo.scss";
export default {
  name: "app",
  data() {
    return {
      open: false,
      innerOpen: false,
      animation: "slide",
      position: "left",
    };
  },
  components: {
    Drawer,
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    clickContent() {
      this.innerOpen = true;
    },
  },
  watch: {
    position: function () {
      this.open = false;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .demo-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 60%;
    align-content: center;
    align-items: center;
  }
}
</style>
