<template>
<div>

  <div class="card">
    <skeleton-loader :isloading="isloading"></skeleton-loader>
    <div v-show="!isloading" @click="openModal" class="card">
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
  <div v-if="showModal" class="modal">
      <div class="modal-wrapper">
        <div @click="closeModal" class="close">
        <i class="ri-close-line"></i>
        </div>
        <div class="modal-content">
          <img :src="image" alt="picture of dog" class="modal-img"/>   
        </div>
        <div class="modal-footer">
          <p class="modal-title">{{breed}}</p>
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
      showModal: false,
    };
  },
  components: {
    "skeleton-loader": SkeletonLoader,
  },
  methods: {
    onloaded() {
      this.isloading = false;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  border-radius: 0.6rem;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
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

.card-footer {
  margin-top: auto;
  color: white;
  padding: 0.625rem;
  padding-left: 1.5rem;
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: auto;
  background-color: #7d7e81cb;
}

.modal-wrapper {
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}



.modal-img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  margin-bottom: 0;
  background-repeat: no-repeat;
}

.modal-title {
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 0;
  background-color: white;
  padding-top: 2rem;
}

.close {
  color: rgb(190, 188, 188);
  font-size: 1.75rem;
  margin-left: auto;
  cursor: pointer;
}
</style>
