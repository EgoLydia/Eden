<template>
  <div v-if="isloading" class="image-loader">
    <div class="breed-loader"></div>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: {
    isloading: {
    type: Boolean,
    default: true,
    },
  },
  data(){
    return{};
  }
};
</script>

<style lang="scss" scoped>
.image-loader {
  background-color: #f5f5f5;
  border-radius: 0.6rem;
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 100%;
  justify-content: flex-end;
}

.breed-loader {
  width: 50%;
  padding: 0.4rem;
  margin: 1rem;
  border-radius: 0.1rem;
  animation: skeleton-animation 1s linear infinite alternate;
}

@keyframes skeleton-animation{
      0%{
         background-color: #e6e6e6;
      }
  100% {
      background-color: #d6d5d5;
  }
}
</style>
