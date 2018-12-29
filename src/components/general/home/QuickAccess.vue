<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm9>

      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md6>
        <v-card class="gradient-no-switch gradient-blue" hover color="primary" to="/dashboard">
          <v-card-title primary class="title">
            <v-icon>person</v-icon>&nbsp;Dashboard
          </v-card-title>
          <v-card-text>Your personal profile. Personalize your experience from your dashboard.</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md6>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card class="gradient-no-switch gradient-secondary" hover color="dark" dark to="/documentation">
              <v-card-title primary class="title">
                <v-icon>gesture</v-icon>&nbsp;Documentation
              </v-card-title>
              <v-card-text>Have a look at the documentation to this website template.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex v-for="n in 1" :key="n" d-flex xs12>
                <v-card class="gradient-no-switch gradient-orange" hover color="dark" dark to="/analytics">
                  <v-card-title primary class="title">
                    <v-icon>flag</v-icon>&nbsp;Company Feature
                  </v-card-title>
                  <v-card-text>You could use this (or any other page) to implement custom features for your company.</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4 child-flex>
        <v-card class="gradient-no-switch gradient-orange" hover color="dark" dark to="/posts">
          <v-card-title primary class="title">
            <v-icon>near_me</v-icon>&nbsp;Content Finder
          </v-card-title>
          <v-card-text>View and search for blog posts</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm8 md8>
        <v-card class="gradient-no-switch gradient-secondary" hover color="primary" dark to="/guide">
          <v-card-title primary class="title">
            <v-icon>flight_takeoff</v-icon>&nbsp;Get Started
          </v-card-title>
          <v-card-text>A quick start guide for new members.</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: "QuickAccess",
    data: () => ({
    })
  }
</script>

<style scoped>

</style>
