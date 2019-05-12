<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/buildings.jpg')" height="350">
        <v-layout column align-center justify-center class="white--text">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5" align-center>
              <v-flex xs12 sm4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">About Vuetiful</div>
                  </v-card-title>
                  <v-card-text>
                    The Vuetiful website template has many features. Our quick start guide and documentation will get
                    you
                    started within minutes.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
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
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">list</v-icon>
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
                  <v-card class="elevation-0 transparent">
                    <v-card-text class="text-xs-center">
                      <v-icon x-large class="blue--text text--lighten-2">map</v-icon>
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
