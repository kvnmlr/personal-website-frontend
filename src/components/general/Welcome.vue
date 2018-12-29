<template>
  <div>
    <h2>Welcome!</h2>

    <p>This is the home page of the Vuetiful website template. By logging in you can check out all features that come
      with the website template. Just use the standard login or create a new user account.</p>

    <v-btn class="gradient gradient-orange" dark round large to="/login">Log In</v-btn>
    <v-btn class="gradient gradient-secondary" dark round large to="/signup">Sign Up</v-btn>
    <div class="separator"></div>
  </div>
</template>

<script>
  export default {
    name: 'Welcome'
  }
</script>

<style scoped>

</style>
