<template>
  <div>
    <top-bar>
      <div class="search-wrapper">
        <div class="search-bar-wrapper">
          <input
            @keyup.enter="onEnter"
            v-model="searchString"
            class="search-bar"
            type="text"
            placeholder="Search dog by breed"
          />
          <div class="search-icon">
            <i class="ri-search-line"></i>
          </div>
        </div>
      </div>
    </top-bar>
    <div class="container">
      <skeleton-loader-list v-if="isBusy"></skeleton-loader-list>
      <staggered-gallery :images="images"></staggered-gallery>
      <div v-if="isLoading" class="spinner">
        <i class="spinner-icon ri-loader-4-line"></i>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "../components/TopBar.vue";
import base from "../mixin/base";
import StaggeredGallery from "../components/StaggeredGallery.vue";
import SkeletonLoaderList from "../components/SkeletonLoaderList.vue";

export default {
  name: "Home",
  mixins: [base],
  components: {
    "top-bar": TopBar,
    "staggered-gallery": StaggeredGallery,
    "skeleton-loader-list": SkeletonLoaderList,
  },
  computed: {
    images() {
      return this.$store.getters.images;
    },
  },
  data() {
    return {
      searchString: "",
      isLoading: false,
    };
  },
  methods: {
    onEnter() {
      this.$router.push(`/search?query=${this.searchString}`);
    },
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
        });
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          Math.max(
            window.pageYOffset,
            document.documentElement.scrollTop,
            document.body.scrollTop
          ) +
            window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.resetError();
          this.isLoading = true;
          this.$store
            .dispatch("fetchImages")
            .then(() => {
              this.isLoading = false;
            })
            .catch((error) => {
              this.setError(error);
            });
        }
      };
    },
  },
  mounted() {
    if (this.images.length == 0) {
      this.fetchImages();
      this.fetchImages();
    }
    this.scroll();
  },
};
</script>

<style scoped lang="scss">

.search-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
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

.spinner {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  animation: spinner-animation 1s linear infinite;
}

.spinner-icon {
  transform: scale(2);
  display: inline-block;
}

@keyframes spinner-animation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
