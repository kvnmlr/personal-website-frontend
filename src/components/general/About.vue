<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/about_cover.jpg')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3 text-xs-center">About Alpha Implement</h1>
          <div class="white--text subheading mb-3 text-xs-center">Last updated: 2019/01</div>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container fill-height fill-width>
        <v-layout justify-center>
          <v-flex>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <v-card style="min-height: 360px; max-height: 450px;" >
                    <v-card-text class="gradient-no-switch gradient-accent"></v-card-text>
                    <div class="separator"></div>
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">list</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Roadmap</div>
                    </v-card-title>
                    <v-card-text>
                      <p>Upcoming features:</p>
                      <ul>
                        <li>Implementation of additional OAuth options.</li>
                        <li>Support for multiple languages.</li>
                        <li>Extensions for the Admin Dashboard.</li>
                      </ul>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex xs12 md6>
                <v-card style="min-height: 360px; max-height: 450px;" >
                  <v-card-text class="gradient-no-switch gradient-accent"></v-card-text>
                  <div class="separator"></div>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">map</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Contact</div>
                  </v-card-title>
                  <v-card-text>
                    <p>Please use the
                      <router-link to="feedback">contact form</router-link>
                      to contact us. Make sure to leave your e-mail address so we can reply to your request.
                      We are always happy to receive your feedback!<br>
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
                <v-flex xs12 md12>
                  <v-card style="min-height: 360px;" >
                    <v-card-text class="gradient-no-switch gradient-accent"></v-card-text>
                    <div class="separator"></div>
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="text--lighten-2">map</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Impressum and Legal Information</div>
                    </v-card-title>
                    <v-card-text>
                      <p>TODO
                      </p>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
  import UnderConstruction from '../includes/UnderConstruction'
  import apiMixin from '../../mixins/apiMixin'

  export default {
    name: 'About',
    components: {UnderConstruction},
    created () {
      this.performSearch()
    },
    methods: {
      async performSearch () {
        this.GET('about', (data, err) => {
        })
      }
    },
    mixins: [apiMixin]
  }
</script>

<style scoped>

</style>
