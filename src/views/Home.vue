<template>
  <div>
    <top-bar>
      <div class="search-wrapper">
        <div class="search-bar-wrapper">
          <input
            class="search-bar"
            type="text"
            placeholder="Browse Dog By Breed"
          />
          <div class="search-icon">
            <i class="ri-search-line"></i>
          </div>
        </div>
      </div>
    </top-bar>
    <div class="container">
      <staggered-gallery :images="images"></staggered-gallery>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import base from "../mixin/base"
import StaggeredGallery from "../components/StaggeredGallery.vue"


export default {
  name: "Home",
  mixins: [base],
  components: {
    "top-bar": TopBar,
    "staggered-gallery": StaggeredGallery,
  },
  computed: {
    images() {
      return this.$store.getters.images;
    },
  },
  data() {
    return {
      searchString: "",
    };
  },
  methods: {
    fetchImages() {
      this.beginLoading(`Fetching images`);
      this.resetError();
      this.$store
        .dispatch("fetchImages")
        .then(() => {
          this.finishLoading();
        })
        .catch((error) => {
          this.setError(error);
        })
        .finally(() => {});
    },
  },
  mounted() {
    this.fetchImages();
  },
};
</script>

<style scoped lang="scss">
.search-bar-wrapper {
  display: flex;
  position: relative;
  padding-left: 10rem;
  padding-right: 10rem;
  width: 80%;
}

.search-bar {
  padding: 1.2rem;
  border: none;
  border-radius: 0.5rem;
  width: 100%;
  padding-left: 4rem;
  box-shadow: 0 4px 8px 0 #d3d7dd, 0 6px 20px 0 #d3d7dd;
}

.search-icon {
  position: absolute;
  padding-left: 2rem;
  height: 100%;
  align-items: center;
  padding-top: 1.1rem;
  color: black;
}

.search-bar::placeholder {
  color: gray;
  font: 500;
}
</style>
