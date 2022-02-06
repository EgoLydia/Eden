<template>
    <div class="card-list">
        <skeleton-loader v-for="loader in loaders" :key="loader" :class="`loader ${loader % 2?'card-tall':''}`"></skeleton-loader>
    </div>
</template>

<script>
import SkeletonLoader from '../components/SkeletonLoader.vue'
export default {
    data(){
        return {
            loaders: 20
        }
    },
    name: "SkeletonLoaderList",
  components: {
      "skeleton-loader": SkeletonLoader,
       },
};
</script>

<style scoped lang="scss">
.loader {
  width: 100%;
  height: 100%;
}
</style>