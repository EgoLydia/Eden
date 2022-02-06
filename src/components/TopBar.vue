<template>
  <div>
    <div class="top-bar-bg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.top-bar-bg {
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #dde2e9;
}
</style>
