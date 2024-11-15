<script>

import axios from 'axios';

export default {
  data() {
    return { 
      
      projects: []
    };
  },
  mounted() {
    this.getProjects();
  },

  methods: {
    getProjects() {
      axios 
        .get('http://127.0.0.1:8000/api/projects')
        .then((res) => {
          
          this.projects = res.data.projects;
          console.log(this.projects);
        });
    }
  }
}
</script>

<template>

  <h3>
    Lista Progetti
  </h3>

<div class="container">
      <div class="projects-container">
        
        <div v-for="projects in projects" :key="projects.id">
          <h3>
            {{ projects.title }}
          </h3>

          <h5>
            {{ projects.creation_date }}
          </h5>

          <div class="author-container">
            <h6>
              {{ projects.author }}
            </h6>
          </div>

        </div>
      </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;



</style>
