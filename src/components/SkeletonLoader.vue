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
};
</script>

<style lang="scss" scoped>
.image-loader {
  background-color: #f5f5f5;
  border-radius: 0.6rem;
  display: flex;
  flex-flow: column;
  height: 500px;
  width: 300px;
  justify-content: flex-end;
  padding: 1rem;
}

.breed-loader {
  width: 50%;
  padding: 0.4rem;
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
