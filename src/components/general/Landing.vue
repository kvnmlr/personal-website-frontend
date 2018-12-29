<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/buildings.jpg')" height="450">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/logo_standard.png" alt="Vuetify.js" height="100">
          <h1 class="black--text mb-2 display-1 text-xs-center">Vuetiful</h1>
          <div class="black--text subheading mb-3 text-xs-center">The Website Template to Kickstat Your Homepage</div>

          <v-btn class="gradient gradient-orange" dark large round to="/guide" @click="expandDrawer">
            Get Started
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
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">mobile_friendly</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Responsive Frontend</div>
                  </v-card-title>
                  <v-card-text>
                    Vue.js is an evolving frontend framework. With it's <span style="color: #0091ea">steep learning curve, excellent documentation and versatility</span>
                    it is the number one choice for start-ups.
                    Therefore, using this template you are guaranteed to get online within minutes and have
                    unlimited possibilities to implement further individual features into your website.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">people</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">User Management</div>
                  </v-card-title>
                  <v-card-text>
                    The Vuetiful website template comes with a ready to use backend for <span style="color: #0091ea">easy and secure user management</span>.
                    Important security measurements and OAuth login possibilities are available out of
                    the box.<br>
                    You can also set up admin accounts with special rights.
                    <br><br>
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">storage</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">API and Database</div>
                  </v-card-title>
                  <v-card-text>
                    Vuetiful's API is fully documented and available for you to be modified to fit your website's needs.
                    <span style="color: #0091ea">A fast and
                    secure database</span> allows easy access to data which you can extend with new features. Simply
                    install
                    the database driver and you are ready to go!<br>
                    <br><br>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
    <section>
      <v-parallax :src="require('@/assets/img/desk.jpg')" height="350">
        <v-layout column align-center justify-center class="white--text">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5" align-center>
              <v-flex xs0 sm6></v-flex>
              <v-flex xs12 sm4 class="my-3">
                <h1 class="blue--text mb-3 display-1 text-xs-center"><br>Want to know more?</h1>
                <div class="black--text subheading mb-3 text-xs-center">The Vuetiful website template has many features.
                  Our quick start guide and documentation will get you started within minutes.
                </div>
                <v-btn class="gradient gradient-orange" style="width: 100%; margin-bottom: -20px" dark large round
                       to="/guide"
                       @click="EventBus.$emit('expandDrawer')">
                  See All Features
                </v-btn>
              </v-flex>
              <v-flex xs0 sm6></v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-parallax>
    </section>
    <v-layout column wrap class="my-5" align-center>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">fingerprint</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">Philosophy</div>
                </v-card-title>
                <v-card-text>
                  <span style="color: #0091ea">We provide fundamental features out of the box while making it easy to implement additional
                  features unique to your needs.</span><br>
                  Vuetiful is the kickstarter website template for startups and personal homepages.
                  <br>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline">Design</div>
                </v-card-title>
                <v-card-text>
                  We refrain from fancy animations that only distract the users and keep it simple. <span style="color: #0091ea">Focus on the content
                  and provide immediate value to the user while looking like a 2018 website.</span><br>
                  The implemented design follows the proven guidelines by Google Material Design.
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-0 transparent">
                <v-card-text class="text-xs-center">
                  <v-icon x-large class="blue--text text--lighten-2">code</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">License and Support</div>
                </v-card-title>
                <v-card-text>
                  <span style="color: #0091ea">Both frontend and backend code are open source and free to use commercially.</span><br>
                  Additional support and development of individual features by the Vuetiful developers can be purchased.
                  <br><br>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>

    </v-layout>
  </div>
</template>

<script>
  import Welcome from './Welcome'
  import apiMixin from '../../mixins/apiMixin'
  import Explanation from './Explanation'
  import {EventBus} from '@/eventBus.js'
  import UnderConstruction from '../includes/UnderConstruction'

  export default {
    name: 'Landing',
    components: {UnderConstruction, Explanation, Welcome,},
    created () {
      EventBus.$emit('collapseDrawer')
    },
    methods: {
      expandDrawer () {
        EventBus.$emit('expandDrawer')
      }
    },
    mixins: [apiMixin]
  }
</script>

<style>
</style>
