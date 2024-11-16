<script>
export default {
  data() {
    return { 
      error: '404 | Not Found'
    }
  }
}
</script>

<template>

    <div class="container">

      <h1>
      {{ error }}
      </h1>
      
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

</style>
