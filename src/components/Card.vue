<template>
  <div>
    <skeleton-loader :isloading="isloading"></skeleton-loader>
    <div v-show="!isloading" class="card">
      <img
        @load="onloaded"
        class="card-img"
        :src="image"
        alt="Thumbnail for dogs"
      />
      <div class="card-overlay">
        <div class="card-footer">
          <p class="card-title">{{ breed }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "./SkeletonLoader.vue";

export default {
  name: "Card",
  props: ["image", "breed"],

  data() {
    return {
      isloading: true,
    };
  },
  components: {
    "skeleton-loader": SkeletonLoader,
  },
  methods: {
    onloaded() {
      this.isloading = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 0.6rem;
  overflow: hidden;
  position: relative;
}

.card-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card {
  border-radius: 0.6rem;
  overflow: hidden;
  position: relative;
}

.card-img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 1)
  );
  width: 100%;
  height: 100%;
  display: flex;
}

.card-title {
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.card-subtitle {
  font-weight: 300;
  font-size: 0.75rem;
  margin-top: 0;
}

.card-footer {
  margin-top: auto;
  color: white;
  padding: 0.625rem;
  padding-left: 1.5rem;
}

.card-title {
  font-weight: 500;
  margin-bottom: 0.2rem;
}

.card-subtitle {
  font-weight: 300;
  font-size: 0.75rem;
  margin-top: 0;
}

.card-footer {
  margin-top: auto;
  color: white;
  padding: 0.625rem;
  padding-left: 1.5rem;
}
</style>
