<script>


export default {

}
</script>

<template>
  <main>

    <router-view></router-view>

  </main>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

main {
  background-color: $mainBgColor;
  text-align: center;
  padding: 20px 0;
  height: 100%;
}

h1 {
  color: $mainColor;
}


</style>
