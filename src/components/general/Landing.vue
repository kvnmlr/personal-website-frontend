<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/genx-gradient-compositions4-.jpg')" height="500">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/logo_standard.png" alt="Vuetify.js" height="100">
          <h1 class="black--text mb-2 display-3 text-xs-center">Alpha Implement</h1>
          <div class="black--text subheading mb-3 text-xs-center">Be Awesome and Get Shit Done</div>
          <v-btn dark class="gradient gradient-orange" large round to="/guide" @click="expandDrawer">
            Hot Projects
          </v-btn>
          <div class="separator"></div>
        </v-layout>
      </v-parallax>
    </section>
    <div class="separator"></div>

    <!-- Quote -->
    <section>
      <v-layout column align-center justify-center>
        <v-card class="elevation-10 gradient-no-switch" style="margin-top: -60px;" width="60%">
          <v-card-title primary-title class="layout justify-center">
            <div class="title">“I think the things you regret most in life are the things you didn’t do.”</div>
          </v-card-title>
          <v-card-text class="layout justify-center">
            Steve Jobs
          </v-card-text>
        </v-card>
      </v-layout>
    </section>
    <div class="separator"></div>

    <!-- Spotlight -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{ paddingTop: '20px', paddingBottom: '50px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% -10px', backgroundImage: 'url(' + require('@/assets/img/stroke2.png') + ')'}"
            class="display-2 text-xs-center white--text">Spotlight</h1><br>
          <h1 class="subheading text-xs-center">Currently hot projects worth checking out</h1>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card dark class="gradient-no-switch gradient-blue" style="padding: 20px;" hover
                        to="/projects/exploxcycling">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">directions_bike</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">ExploX Cycling</div>
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                    Duis fringilla vestibulum augue, volutpat egestas neque sagittis sit amet. Maecenas ac lorem nisi.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card dark class="gradient-no-switch gradient-green" style="padding: 20px;" hover
                        to="/projects/vueupstarter">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">desktop_mac</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Vue Express Upstarter</div>
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                    Duis fringilla vestibulum augue, volutpat egestas neque sagittis sit amet. Maecenas ac lorem nisi.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card dark class="gradient-no-switch gradient-orange" style="padding: 20px;" hover
                        to="/projects/soho">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">dashboard</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Project SoHo</div>
                  </v-card-title>
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                    Duis fringilla vestibulum augue, volutpat egestas neque sagittis sit amet. Maecenas ac lorem nisi.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>

    <!-- Introduce -->
    <section class="elevation-15"
             :style="{ padding: '50px 130px 50px 130px',width: '100%', backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/paper2.jpg') + ')'}">
      <v-layout column align-center justify-center class="my-2">
        <h1 class="display-2 text-xs-center black--text">10 Questions to Myself</h1>
        <v-layout row wrap class="my-5" align-center text-xs-center>
          <v-flex md6 style="padding: 20px;">
            <h2>What are your productivity secrets?</h2>
            <p class="text-xs-center">
              Working late, doing sports to stay energized and loud techno music on headphones.
            </p>
            <h2>What technology trend are you excited about?</h2>
            <p class="text-xs-center">
              I think augmented and mixed reality are going to play a huge role in our future and I'm excited to play a
              part in developing this.
            </p>
            <h2>What song is stuck in your head right now?</h2>
            <p class="text-xs-center">
              SOS by Avicii, the first post-mortem single.
            </p>
            <h2>Does understanding code help you in other areas of your life?</h2>
            <p class="text-xs-center">
              I think programming helps you in analyzing problems by breaking them down into sub-problems and then
              solving them one step at a time.
            </p>
            <h2>Where do you go to learn new skills? Do you take courses? Watch videos?</h2>
            <p class="text-xs-center">
              Usually I watch YouTube videos or sometimes take courses on Udemy or Udacity and then learn by trial and
              error.
            </p><br><br>
            <v-btn dark class="gradient gradient-blue" large round to="/education" @click="expandDrawer">
              Education & Career
            </v-btn>
          </v-flex>
          <v-flex md6 style="padding: 20px;">
            <h2>Early Bird or Night Owl?</h2>
            <p class="text-xs-center">
              Clearly, night owl.
            </p>
            <h2>How did you learn programming?</h2>
            <p class="text-xs-center">
              I started teaching myself some Visual Basic at the age of 14 before I started learning Python in high
              school.
              University taught me lot's of principles and theoretical knowledge. However, the skill to actually plan
              and program systems comes from doing practical projects.
            </p>

            <h2>How do you get unstuck on a problem?</h2>
            <p class="text-xs-center">
              I go to the gym or do some other sport activity.
            </p>
            <h2>What experience made you doubt your skills?</h2>
            <p class="text-xs-center">
              Some university exams were very hard for me and I had to study a lot form them. In retrospect, I would say
              this was due to a lack of interest and me focusing on other projects.
            </p>
            <h2>What was the last book you read?</h2>
            <p class="text-xs-center">
              The Industries of the Future by Alec Ross
            </p><br>
            <v-btn dark class="gradient gradient-blue" large round to="/goals2019" @click="expandDrawer">
              My 2019 Goals
            </v-btn>
          </v-flex>
        </v-layout>
      </v-layout>
    </section>
    <div class="separator"></div>

    <!-- My Work -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{ paddingBottom: '40px', paddingTop: '20px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% 0px', backgroundImage: 'url(' + require('@/assets/img/stroke4.png') + ')'}"
            class="display-2 text-xs-center white--text">My Work</h1><br>
          <v-layout row wrap class="my-2" align-center>
            <v-flex md6 align-center>
              <v-layout column align-center justify-center class="black--text">
                <h1 class="display-1 text-xs-center">Artificial Intelligence</h1>
                <p class="text-xs-center">The potential of Artificial Intelligence is almost endless. I like to
                  combine
                  different technologies in a creative way to solve problems and automate tasks of everyday
                  life.</p>
                <v-layout row>
                  <v-btn dark class="gradient gradient-green" large round to="/projects/exploxcycling"
                         @click="expandDrawer">
                    Project ExploX
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="my-5" align-center>
            <v-flex md6>
              <img src="@/assets/img/genx-gradient-compositions0-.jpg" alt="Vuetify.js" width="100%">
            </v-flex>
            <v-flex md6>
              <v-layout column align-center justify-center class="black--text">
                <h1 class="display-1 text-xs-center">Ubiquitous Computing</h1>
                <p class="text-xs-center">Ubiquitous technologies are everywhere, they are part of our daily lives
                  and
                  support us in many ways. I like working with and exploring the potential of wearables in
                  different
                  contexts such as gaming or sports.</p>
                <v-layout row>

                  <v-btn dark class="gradient gradient-blue" large round to="/projects/smartdoorbell"
                         @click="expandDrawer">
                    Smart Doorbell
                  </v-btn>
                  <v-btn dark class="gradient gradient-blue" large round to="/projects/mazegaze"
                         @click="expandDrawer">
                    Maze Gaze
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
          <v-layout row wrap class="my-5" align-center>
            <v-flex md6>
              <v-layout column align-center justify-center class="black--text">
                <h1 class="display-1 text-xs-center">Didactic Technologies</h1>
                <p class="text-xs-center">The connection of computer science and didactics is the area that I
                  pursue
                  professionally. I believe that technology can greatly enhanve the way we teach and learn. My
                  focus is
                  on AI powered didactics and Augmented Reality.</p>
                <v-layout row>
                  <v-btn dark class="gradient gradient-orange" large round to="/projects/soho"
                         @click="expandDrawer">
                    Project SoHo
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </section>

    <!-- Principles -->
    <section class="elevation-20" style="background-color: #e1e1e1">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12>
            <h1 class="display-2 text-xs-center">The Six Principles</h1><br>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <v-card dark class="elevation-0 gradient-no-switch gradient-blue text-xs-center align-center"
                          style="padding: 10px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Work Creatively</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                      nisi.
                    </v-card-text>
                    <v-btn flat round to="/guide" @click="expandDrawer">
                      Alpha Implement's Design
                    </v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card dark class="elevation-0 gradient-no-switch gradient-green text-xs-center align-center"
                          style="padding: 10px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">360</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Be Agile</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                      nisi.
                    </v-card-text>
                    <v-btn flat round to="/guide" @click="expandDrawer">
                      My Github Profile
                    </v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card dark class="elevation-0 gradient-no-switch gradient-orange text-xs-center align-center"
                          style="padding: 10px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">assignment_turned_in
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center white--text">Get Shit Done</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                      nisi.
                    </v-card-text>
                    <v-btn flat round to="/guide" @click="expandDrawer">
                      All Finished Projects
                    </v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card dark class="elevation-0 gradient-no-switch gradient-green text-xs-center align-center"
                          style="padding: 10px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">whatshot</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Get Excited</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                      nisi.
                    </v-card-text>
                    <v-btn flat round to="/guide" @click="expandDrawer">
                      Concepts
                    </v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card dark class="elevation-0 gradient-no-switch gradient-orange text-xs-center align-center"
                          style="padding: 10px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">cake</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Show Courage</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                      nisi.
                    </v-card-text>
                    <v-btn flat round to="/guide" @click="expandDrawer">
                      My 2019 Goals
                    </v-btn>
                  </v-card>
                </v-flex>
                <v-flex xs12 md4>
                  <v-card dark class="elevation-0 gradient-no-switch gradient-blue text-xs-center align-center"
                          style="padding: 10px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">school</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Continue Learning</div>
                    </v-card-title>
                    <v-card-text>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus.
                      nisi.
                    </v-card-text>
                    <v-btn flat round to="/guide" @click="expandDrawer">
                      What I've Learned in Life
                    </v-btn>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-flex>
        </v-layout>
      </v-container>
    </section>

    <!-- Goals -->
    <section>
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5" align-center>
          <h1
            :style="{  paddingTop: '40px', paddingBottom: '50px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% -00px', backgroundImage: 'url(' + require('@/assets/img/stroke3.png') + ')'}"
            class="display-2 text-xs-center white--text">Get Shit Done</h1><br>
          <h1 class="subheading text-xs-center">Some cool things I achieved lately</h1>
          <v-container fluid grid-list-md>
            <v-layout row>
              <v-flex md4></v-flex>
              <v-flex md8>
                <v-timeline dense>
                  <v-timeline-item color="primary" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-blue">
                        <h2 class="display-1 white--text font-weight-light">Title 1</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
                            euismod
                            convenire principes at. Est et nobis iisque percipit.
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="success" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-green">
                        <h2 class="display-1 white--text font-weight-light">Title 1</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed
                            euismod
                            convenire principes at. Est et nobis iisque percipit.
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                </v-timeline>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>

    <!-- Contact -->
    <section>
      <v-parallax :src="require('@/assets/img/desk.jpg')" height="350">
        <v-layout column align-center justify-center class="black--text">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5" align-center>
              <v-flex xs0 sm6></v-flex>
              <v-flex xs12 sm4 class="my-3">
                <h1 class="mb-3 display-1 text-xs-center"><br>Let's Talk</h1>
                <div class="black--text subheading mb-3 text-xs-center">
                  Are you interested in my work or want to know more about some of my <a href="/projects">projects</a>?
                </div>
                <v-btn class="gradient gradient-orange" style="width: 100%; margin-bottom: -20px" large round
                       to="/contact" dark
                       @click="expandDrawer">
                  Contact Me
                </v-btn>
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
  import Welcome from './Welcome'
  import apiMixin from '../../mixins/apiMixin'
  import Explanation from './Explanation'
  import {EventBus} from '@/eventBus.js'
  import UnderConstruction from '../includes/UnderConstruction'

  export default {
    name: 'Landing',
    components: {UnderConstruction, Explanation, Welcome,},
    created () {
      //EventBus.$emit('collapseDrawer')
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
