<template>
    <div class="loader-list">
        <skeleton-loader></skeleton-loader>
    </div>
</template>

<script>
import SkeletonLoader from '../components/SkeletonLoader.vue'
export default {
    name: "SkeletonLoaderList",
  components: {
      "skeleton-loader": SkeletonLoader,
       },
};
</script>

<style scoped lang="scss">
.loader {
  margin-bottom: 2rem;
  vertical-align: top;
  display: inline-flex;
  width: var(--full-height);
}

</style>