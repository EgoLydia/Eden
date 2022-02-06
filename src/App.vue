<template>
  <div id="app">
    <div id="nav">
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
   --full-height: 100%;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.card-list {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: 240px;
}

@media screen and (min-width: 600px) {
  .card-tall {
    grid-row: span 2 / auto;
  }

  .card-wide {
    grid-column: span 2 / auto;
  }
}

@media only screen and (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: -2.5rem;
  }
}

@media (min-width: 640px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }
}

@media (min-width: 768px) {
  .container {
    padding-left: 5rem;
    padding-right: 5rem;
    margin-top: -2.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 10rem;
    padding-right: 10rem;
    margin-top: -2.5rem;
  }
}

</style>
