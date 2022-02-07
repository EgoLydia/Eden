<template>
  <div>
    <top-bar>
      <p class="title">Not Found</p>
    </top-bar>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";

export default {
  name: "PageNotFound",
  components: {
    "top-bar": TopBar,
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 933px) {
  .title {
    font-weight: 600;
    font-size: 2.5rem;
    color: #3d485a;
    text-align: center;
  }
}

@media only screen and (min-width: 933px) {
  .title {
    font-weight: 600;
    font-size: 2.5rem;
    color: #3d485a;
    margin-left: 12rem;
  }
}
.query {
  font-weight: 300;
  color: #737985;
}
</style>
