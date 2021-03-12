<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        :style="indexClass()"
        @click="onMask"
        v-if="$slots.default"
        :class="{ mask }"
      ></div>
    </transition>
    <transition
      :enter-active-class="enterClass"
      :leave-active-class="leaveClass"
    >
      <div
        key="content"
        :class="{ closeable, [position.toLowerCase()]: true }"
        v-if="$slots.default"
        class="vue-drawer cover"
        :style="indexClass()"
      >
        <div @click.stop="close" v-if="closeable" class="close-btn">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    position: {
      type: String,
      default: "right",
      validator: (value) => ["left", "up", "right", "down"].includes(value),
    },
    animation: {
      type: String,
      default: "slide",
      validator: (value) => ["slide", "bounce"].includes(value),
    },
    closeable: {
      type: Boolean,
      default: true,
    },
    mask: {
      type: Boolean,
      default: true,
    },
    maskClosable: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default() {
        return this.drawerIndex;
      },
    },
  },
  provide() {
    return {
      drawerIndex: this.computedIndex + 1,
    };
  },
  inject: {
    drawerIndex: { default: 1000 },
  },

  methods: {
    close() {
      this.$emit("close");
    },
    onMask() {
      if (this.maskClosable) {
        this.close();
      }
    },
    indexClass(offset = 0) {
      return {
        zIndex: this.computedIndex + offset,
      };
    },
  },
  computed: {
    positionSuffixClass() {
      const firstLetter = this.position.substr(0, 1);
      return firstLetter.toUpperCase() + this.position.substr(1);
    },
    enterClass() {
      return `animated ${this.animation}In${this.positionSuffixClass}`;
    },
    leaveClass() {
      return `animated ${this.animation}Out${this.positionSuffixClass}`;
    },
    computedIndex() {
      return this.zIndex || this.drawerIndex;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/index";
</style>
