<template>
  <div>
    <h1>Pick Your Solution</h1>
    <v-layout column wrap align-center class="my-3">
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 sm4>
              <v-card hover style="min-height: 450px;">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Upstarter</div>
                </v-card-title>
                <v-card-text>
                  <span style="color: #0091ea">Everything you need to have an awesome website online in no time</span>
                  <br><br>
                  <ul style="list-style: none;">
                    <li>✓ &ensp;Front-End Code</li>
                    <li>✓ &ensp;Google Material Design</li>
                    <li>✓ &ensp;Back-End Code</li>
                    <li>✓ &ensp;Security Package</li>
                    <li>✓ &ensp;Unlimited User Management</li>
                    <li>✓ &ensp;Basic Admin Dashboard</li>
                    <li>✓ &ensp;Database Implementation</li>
                    <li>✓ &ensp;Full API documentation</li>
                  </ul>
                </v-card-text>
                <div style="text-align: center; position: absolute; bottom: 20px;  width: 100%">
                  <h1>
                    Free
                  </h1>
                  <v-btn class="gradient gradient-orange" dark large round to="/guide" @click="">
                    Select
                  </v-btn>
                </div>
                <br>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card hover style="min-height: 450px;">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">All-Inclusive</div>
                </v-card-title>
                <v-card-text>
                  <span style="color: #0091ea">Includes specialized features that you might or might not need</span>
                  <br><br>
                  <ul style="list-style: none;">
                    <li>✓ &ensp;OAuth Registration</li>
                    <li>✓ &ensp;Analytics Admin Dashboard</li>
                    <li>✓ &ensp;Multiple Language Support</li>
                  </ul>
                </v-card-text>
                <div style="text-align: center; position: absolute; bottom: 20px; width: 100%">
                  <h1>
                    <strike style="font-size: 18pt;">$59</strike> Free
                  </h1>
                  <v-btn class="gradient gradient-orange" dark large round to="/guide" @click="">
                    Select
                  </v-btn>
                </div>

                <br>
              </v-card>
            </v-flex>
            <v-flex xs12 sm4>
              <v-card hover style="min-height: 450px;">
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Additional Support</div>
                </v-card-title>
                <v-card-text>
                  <span style="color: #0091ea">When you need individual development or support</span>
                  <br><br>
                </v-card-text>
                <div style="text-align: center; position: absolute; bottom: 20px;  width: 100%">
                  <h1>
                    Custom
                  </h1>
                  <v-btn class="gradient gradient-orange" dark large round to="/guide" @click="">
                    Contact Us
                  </v-btn>
                </div>
                <br>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
    <h1>Get Started</h1>
    <div class="separator"></div>
    <explanation :user="user"></explanation>
  </div>
</template>

<script>
  import UnderConstruction from '../includes/UnderConstruction'
  import Explanation from './Explanation'

  export default {
    name: 'GetStarted',
    components: {Explanation, UnderConstruction},
    props: {
      user: Object,
    }
  }
</script>

<style scoped>

</style>
