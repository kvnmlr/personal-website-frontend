<template>
  <v-parallax :src="require('@/assets/img/landing_cover.jpg')" height="300">
    <v-layout column align-center justify-center class="black--text">
      <v-container grid-list-xl>
        <v-layout row wrap justify-center align-center>
          <v-flex xs12 md6 offset-md1>
            <h1 class="white--text mb-3 display-1 text-xs-center"><br>{{ title }}</h1>
            <div class="white--text subheading mb-3 text-xs-center">
              {{ text }}
            </div>
            <v-btn class="gradient gradient-light" style="width: 100%; margin-bottom: -20px" large round
                   :to="'/' + buttonDestination">
              {{ buttonText }}
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-parallax>
</template>

<script>
  export default {
    name: 'ContactPromt',
    props: {
      title: String,
      text: String,
      buttonText: String,
      buttonDestination: String,
    }
  }
</script>

<style scoped>

</style>
