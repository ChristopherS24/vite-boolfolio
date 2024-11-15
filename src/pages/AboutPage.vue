<script>
export default {
  data() {
    return { 
      
    }
  }
}
</script>

<template>

    <div class="container">

      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Chi siamo</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Lorem ipsum dolor sit amet.</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Card link</a>
        </div>
      </div>


      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Contatti</h5>
          <h6 class="card-subtitle mb-2 text-body-secondary">Lorem, ipsum dolor.</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">+00 123456789</a>
          <a href="#" class="card-link">Via Italia, 100</a>
        </div>
      </div>

    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.container {
  display: flex;
  justify-content: space-evenly;
  padding: 0 20px;
}

</style>
