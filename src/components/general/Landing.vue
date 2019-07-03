<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/landing_cover.jpg')" height="500">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/logo_standard.png" alt="Vuetify.js" height="100">
          <h1 class="black--text mb-2 display-3 text-xs-center white--text">Alpha Implement</h1>
          <div class="black--text subheading mb-3 text-xs-center white--text">Be Awesome and Get Shit Done</div>
          <div class="separator"></div>
        </v-layout>
      </v-parallax>
    </section>
    <div class="separator"></div>

    <!-- Quote -->
    <section>
      <v-layout column align-center justify-center>
        <cover-card title='"I think the things you regret most in life are the things you didn’t do.”'
                    text="Steve Jobs" primary color="primary"></cover-card>
      </v-layout>
    </section>
    <div class="separator"></div>

    <!-- Spotlight -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1 class="display-2 text-xs-center">Spotlight</h1><br>
          <h1 class="subheading text-xs-center">Currently hot projects worth checking out</h1>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <icon-action-card
                  icon="directions_bike"
                  title="ExploX Cycling"
                  text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                  color="accent"
                  hover-link="guide">
                </icon-action-card>
              </v-flex>
              <v-flex xs12 md4>
                <icon-action-card
                  icon="desktop_mac"
                  title="Vue Express Upstarter"
                  text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                  color="accent"
                  hover-link="guide">
                </icon-action-card>
              </v-flex>
              <v-flex xs12 md4>
                <icon-action-card
                  icon="dashboard"
                  title="Project SoHo"
                  text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                  color="accent"
                  hover-link="guide">
                </icon-action-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>

    <!-- Introduce -->
    <section class="elevation-10">
      <v-layout column align-center justify-center class="my-2"
                :style="[$vuetify.breakpoint.lgAndUp ?
             { padding: '50px',width: '100%', backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/paper2.jpg') + ')'} :
             { padding: '50px',width: '100%'}]">
        <h1 class="display-2 text-xs-center black--text">8 Questions to Myself</h1>
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
            <h2>Does understanding code help you in other areas of your life?</h2>
            <p class="text-xs-center">
              I think programming helps you in analyzing problems by breaking them down into sub-problems and then
              solving them one step at a time.
            </p>
            <h2>Where do you go to learn new skills? Do you take courses? Watch videos?</h2>
            <p class="text-xs-center">
              Usually I watch YouTube videos or sometimes take courses on Udemy or Udacity and then learn by trial and
              error.
            </p>
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
            <h2>What was the last book you read?</h2>
            <p class="text-xs-center">
              The Industries of the Future by Alec Ross
            </p>
          </v-flex>
        </v-layout>
      </v-layout>
      <v-layout class="gradient-no-switch gradient-primary" style="height: 20px;" row wrap align-center text-xs-center>
      </v-layout>
    </section>
    <div class="separator"></div>

    <!-- My Work -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1 class="display-2 text-xs-center">My Work</h1><br>
          <v-container grid-list-xl>
            <v-layout row wrap class="my-2" align-center>
              <v-flex xs12 md6 align-center>
                <v-layout column align-center justify-center class="black--text">
                  <h1 class="display-1 text-xs-center">Artificial Intelligence</h1>
                  <p class="text-xs-center">The potential of Artificial Intelligence is almost endless. I like to
                    combine
                    different technologies in a creative way to solve problems and automate tasks of everyday
                    life.</p>
                  <v-layout row>
                    <v-btn dark class="gradient gradient-primary" large round to="/projects/exploxcycling"
                           @click="expandDrawer">
                      Project ExploX
                    </v-btn>
                  </v-layout>
                </v-layout>
              </v-flex>
            </v-layout>
            <v-layout row wrap class="my-5" align-center>
              <v-flex xs12 md6>
                <img src="@/assets/img/landing_cover.jpg" alt="Vuetify.js" width="100%">
              </v-flex>
              <v-flex xs12 md6>
                <v-layout column align-center justify-center class="black--text">
                  <h1 class="display-1 text-xs-center">Ubiquitous Computing</h1>
                  <p class="text-xs-center">Ubiquitous technologies are everywhere, they are part of our daily lives
                    and
                    support us in many ways. I like working with and exploring the potential of wearables in
                    different
                    contexts such as gaming or sports.</p>
                  <v-layout row>
                    <v-btn dark class="gradient gradient-accent" large round to="/projects/smartdoorbell"
                           @click="expandDrawer">
                      Smart Doorbell
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
          </v-container>
        </v-layout>
      </v-container>
    </section>

    <!-- Principles -->
    <section class="elevation-0 gradient-no-switch gradient-slight-primary">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12>
            <h1 class="display-2 text-xs-center">The 6 Principles</h1><br>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md4>
                  <icon-action-card
                    icon="color_lens"
                    title="Work Creatively"
                    text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    button-text="Alpha Implement's Design"
                    button-destination="guide"
                    color="accent">
                  </icon-action-card>
                </v-flex>
                <v-flex xs12 md4>
                  <icon-action-card
                    icon="360"
                    title="Be Agile"
                    text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    button-text="My Github Profile"
                    button-destination="guide"
                    color="orange">
                  </icon-action-card>
                </v-flex>
                <v-flex xs12 md4>
                  <icon-action-card
                    icon="assignment_turned_in"
                    title="Get Shit Done"
                    text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    button-text="All Finished Projects"
                    button-destination="guide"
                    color="primary">
                  </icon-action-card>
                </v-flex>
                <v-flex xs12 md4>
                  <icon-action-card
                    icon="whatshot"
                    title="Get Excited"
                    text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    button-text="Concepts"
                    button-destination="guide"
                    color="orange">
                  </icon-action-card>
                </v-flex>
                <v-flex xs12 md4>
                  <icon-action-card
                    icon="cake"
                    title="Show Courage"
                    text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    button-text="My 2019 Goals"
                    button-destination="guide"
                    color="primary">
                  </icon-action-card>
                </v-flex>
                <v-flex xs12 md4>
                  <icon-action-card
                    icon="school"
                    title="Continue Learning"
                    text=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    button-text=" What I've Learned in Life"
                    button-destination="guide"
                    color="accent">
                  </icon-action-card>
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
          <h1 class="display-2 text-xs-center">Get Shit Done</h1><br>
          <h1 class="subheading text-xs-center">Some cool things I achieved lately</h1>
          <v-container fluid grid-list-md>
            <v-layout row>
              <v-flex md4></v-flex>
              <v-flex md8>
                <v-timeline dense>
                  <v-timeline-item color="primary" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-accent">
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
                      <v-card-title class="gradient-no-switch gradient-primary">
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
      <contact-promt title="Let's Talk"
                     text="Are you interested in my work or want to know more about some of my projects?"
                     button-text="Contact"
                     button-destination="contact">
      </contact-promt>
    </section>
  </div>
</template>

<script>
  import apiMixin from '../../mixins/apiMixin'
  import {EventBus} from '@/eventBus.js'
  import CoverCard from '../includes/CoverCard'
  import ContactPromt from '../includes/ContactPromt'
  import IconActionCard from '../includes/IconActionCard'

  export default {
    name: 'Landing',
    components: {IconActionCard, ContactPromt, CoverCard},
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
