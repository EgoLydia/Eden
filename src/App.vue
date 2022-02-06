<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

* {
   --full-height: 100%;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media only screen and (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: -2.5rem;
  }

  .card-list {
    column-gap: 3rem;
    column-fill: initial;
    column-count: 1;
  }
}

@media (min-width: 640px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }

  .card-list {
    column-gap: 3rem;
    column-fill: initial;
    column-count: 1;
  }
}

@media (min-width: 768px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }

  .card-list {
    column-gap: 3rem;
    column-fill: initial;
    column-count: 3;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 14rem;
    padding-right: 14rem;
    margin-top: -2.5rem;
  }
}

</style>
