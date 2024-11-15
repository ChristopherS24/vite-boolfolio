<script>
export default {
  data() {
    return { 
      message: ''
    }
  }
}
</script>

<template>
  <footer>
    <div class="container">
      <h1>
      {{ message }}
      </h1>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

footer {
  background-color: $mainBgColor;
  text-align: center;
  padding: 20px 0;
}

h1 {
  color: $mainColor;
}
</style>
