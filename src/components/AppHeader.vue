<script>
export default {
  data() {
    return { 
      message: 'Vite Boolfolio'
    }
  }
}
</script>

<template>
  <header>

    <div class="title">
      <h1>
        {{ message }}
      </h1>
    </div>

    <div class="container text-center">
      <div class="row">

        <div class="col">
          <router-link :to="{ name: 'home' }" class="nav-link">
              Home
          </router-link>
        </div>
        <div class="col">
          <router-link :to="{ name: 'progetti' }" class="nav-link">
              Pagina dei progetti
            </router-link>
        </div>
        <div class="col">
          <router-link :to="{ name: 'about' }" class="nav-link">
              About
            </router-link>
        </div>

      </div>
    </div>

    <!-- <div class="container">
      <ul>

        <li>
          <router-link :to="{ name: 'home' }" class="nav-link">
            Home
          </router-link>
        </li>
  
        <li>
          <router-link :to="{ name: 'progetti' }" class="nav-link">
            Pagina dei progetti
          </router-link>
        </li>

        <li>
          <router-link :to="{ name: 'about' }" class="nav-link">
            About
          </router-link>
        </li>

      </ul>
    </div> -->

    
  </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

header {
  background-color: $mainBgColor;
  padding: 20px 0;
}

h1 {
  color: $mainColor;
}

.title {
  text-align: center;
  padding: 20px 0;
}

// ul li {
//   display: flex;
//   justify-content: center;
// }

</style>
