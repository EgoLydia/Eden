<template>
  <div>
    <top-bar>
      <p class="title" v-if="isBusy">
        Searching for <span class="query">"{{ query }}"</span>
      </p>
      <p class="title" v-else>
        Search Results for <span class="query">"{{ query }}"</span>
      </p>
    </top-bar>
    <div class="container">
      <skeleton-loader-list v-if="isBusy"></skeleton-loader-list>
      <staggered-gallery :images="images"></staggered-gallery>
    </div>
  </div>
</template>

<script>
import Vue from "vue"
import TopBar from "../components/TopBar.vue"
import base from "../mixin/base"
import StaggeredGallery from "../components/StaggeredGallery.vue"
import SkeletonLoaderList from "../components/SkeletonLoaderList.vue"

export default Vue.extend(
     {
    name: 'SearchResult',
    props: {
      query: {
        type: String,
        required: true,
      }

  },
  mixins: [base],
  components:{
    'top-bar' : TopBar,
    'staggered-gallery' : StaggeredGallery,
    "skeleton-loader-list" : SkeletonLoaderList
  },
  data(){
    return {
      images: [],
    };
  },
methods: {
    searchPhotos() {
      this.beginLoading(`Searching for`);
      this.resetError();
      this.$store
      .dispatch("searchImages", this.query)
      .then((data) =>{
        this.images = data;
        this.finishLoading();
      })
      .catch((error) =>{
        this.setError(error);
      })
      .finally(() =>{});
    },
  },
  mounted(){
    this.searchPhotos();
  }
});
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