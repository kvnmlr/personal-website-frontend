<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/projects/exploxcycling/bicycle-tour.jpg')" height="500">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/projects/exploxcycling/logo2.png" alt="ExploX" height="100">
          <h1 class="black--text mb-2 display-3 text-xs-center">ExploX</h1>
          <div class="black--text subheading mb-3 text-xs-center">For Cyclists that want to go further</div>
          <v-btn class="gradient gradient-secondary" style="width: 300px;" dark large round
                 href="http://umtl.dfki.de/explox" target="_blank">
            Visit ExploX Website
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-5 gradient-no-switch gradient-dark" dark style="padding: 40px 20px 20px; min-height: 400px; max-height: 450px;">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">gesture</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Creator</div>
                  </v-card-title>
                  <v-card-text>
                    <br>
                    Easily find new cycling routes. Creator will search through popular cycling routes and <span
                    style="color: #ff6d00">create a
                    totally new route just for you</span>.
                    Personalization will ensure that the routes fit your level of fitness and many other individual
                    factors.<br><br>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-5 gradient-no-switch gradient-dark" dark style="padding: 40px 20px 20px; min-height: 400px; max-height: 450px;">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">map</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Activity Map</div>
                  </v-card-title>
                  <v-card-text>
                    <br>
                    Are you an Explorer? Your personal Activity Map will show you where you have already cycled in the
                    past and which areas are still undiscovered.
                    This will help you <span style="color: #ff6d00">identify new and exciting cycling spots</span> and
                    get to know your environment better.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-5 gradient-no-switch gradient-dark" dark style="padding: 40px 20px 20px; min-height: 400px; max-height: 450px;">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">flag</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Analytics</div>
                  </v-card-title>
                  <v-card-text>
                    Which type of cyclists are you and what are your personal strengths? Our analytics section will help
                    you <span style="color: #ff6d00">identify your strengths and weaknesses</span>.
                    Combined with Creator and Activity Map, this will allow you to achieve your goals, whether you want
                    to beat your best time or discover new routes.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <div class="separator"></div>
    <v-container>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs12 sm4 class="my-3">
          <h1 class="mb-3 display-1 text-xs-center black--text">How does it work?</h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <h2 style="color: orange">Step 1: Register Using Strava</h2>
          <br>
          <p>Strava is a popular app for tracking your running and cycling activities and create new routes.
            By registering to ExploX, you allow us to use your route and activity data in our service.</p>
          <h2 style="color: orange">Step 2: Your Dashboard</h2>
          <br>
          <p>Your personalized Dashboard shows you:
          </p>
          <ul>
            <li>General profile info</li>
            <li>Your own Activity Map</li>
            <li>A list of all past activities</li>
            <li>Your own and starred routes</li>
          </ul>
          <br>
          <p>Your profile is always synchronized with your Strava profile.</p>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-container>
            <img style="width:100%;" src="@/assets/img/projects/exploxcycling/dashboard.png" class="elevation-5">
          </v-container>
        </v-flex>
      </v-layout>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <h2 style="color: orange">Step 3: Find Existing Routes</h2>
          <br>
          <p>Finding existing routes couldn't be any simpler.
            Just open Route Finder
            and enter the location, distance and some other search criteria and we will find you all matching routes
            by
            other cyclists.
            If you create or upload your own routes other users can also find them here.
          </p>
          <h2 style="color: orange">Step 4: Create New Routes</h2>
          <br>
          <p>Creator is at the heart of ExploX and let's you find totally new routes from your desired start location.
          </p>
        </v-flex>
        <v-flex xs12 sm6 md6>
          <v-container>
            <img style="width:100%;" src="@/assets/img/projects/exploxcycling/creator.png" class="elevation-5">
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <div class="separator"></div>

    <section>
      <v-parallax :src="require('@/assets/img/projects/exploxcycling/cyclist_right.png')" height="450">
        <v-layout column align-center justify-center class="white--text">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5" align-center>
              <v-flex xs0 sm2></v-flex>
              <v-flex xs12 sm4>
                <v-card dark class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">About ExploX</div>
                  </v-card-title>
                  <v-card-text>
                    ExploX is part of a research project that aims to discover patterns in cyclists' routes and
                    activities.
                    The analyzed data can be used in meaningful ways such as the creation of new routes or personalized
                    training optimization.<br><br>
                  </v-card-text>
                  <v-btn style="width: 100%" class="gradient gradient-orange" flat large round
                         href="http://umtl.dfki.de/explox" target="_blank">
                    Visit the ExploX Website
                  </v-btn>
                </v-card>
              </v-flex>
              <v-flex xs0 sm6></v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
  import {EventBus} from '@/eventBus.js'

  export default {
    name: 'ExploxCycling',
  }
</script>

<style>
</style>
