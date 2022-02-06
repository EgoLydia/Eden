<template>
  <div class="card-list">
    <card
      :class="`${index % 2 == 0? 'card-tall':''}`"
      v-for="(image, index) in images"
      :key="index"
      :image="image"
      :breed="getBreed(image)"
    ></card>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "staggeredGallery",
  props: ["images"],
  components: {
    card: Card,
  },
  methods: {
    getBreed(url) {
        
      let path = url.replace("https://images.dog.ceo/breeds/", "");
      const index = path.indexOf("/");
      return path.slice(0,index);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
