<template>
  <v-app dark>
    <section>
      <v-parallax :src="require('@/assets/img/projects/beastfm/ropes-header.jpg')" height="700">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/logo_standard.png" alt="Vuetify.js" height="100">
          <h1 class="white--text mb-2 display-3 text-xs-center">Beast.FM</h1>
          <div class="white--text display-1 mb-5 text-xs-center">Improve.Together - The Soundtrack for a Fitter World</div>
          <v-btn class="gradient-orange" large round to="/guide" @click="expandDrawer">
            Tune In
          </v-btn>
          <div class="separator"></div>
          <div class="separator"></div>
        </v-layout>
      </v-parallax>
    </section>
    <div class="separator"></div>

    <!-- Quote -->
    <section>
      <v-layout column align-center justify-center>
        <v-card class="elevation-10 gradient-no-switch gradient-dark"
                style="margin-top: -150px; border-bottom: 7px solid #5dba77;" width="60%">
          <v-card-title primary-title class="layout justify-center">
            <h4 class="headline">The Recipe for Your Perfect Workout:</h4>
          </v-card-title>
          <v-card-text class="title text-xs-center justify-center">
            Take awesome music that motivates you, add your favourite coaches' podcasts on hot topics<br>
            and voila: Your perfect workout motivation.<br><br>
          </v-card-text>
        </v-card>
      </v-layout>
    </section>
    <div class="separator"></div>

    <!-- At a Glance -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{  paddingTop: '40px', paddingBottom: '50px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% -00px', backgroundImage: 'url(' + require('@/assets/img/projects/beastfm/stroke.png') + ')'}"
            class="display-2 text-xs-center">At a Glance</h1><br>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="gradient-no-switch gradient-orange"
                        style="padding: 20px; min-height: 340px; max-height: 430px;">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">library_music</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Awesome Music</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    The right music can increase workout performance by 15%.<br>
                    Our library has thousands of high-energy songs of your favourite genres in order to give you the
                    ideal workout pump.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="gradient-no-switch gradient-orange"
                        style="padding: 20px; min-height: 340px; max-height: 430px;">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">people</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Personal Coach</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    Nothing can motivate you like a personal coach pushing you through your workout. Whether you want to
                    learn something or be motivated to give 100%, we have you covered with the right coach.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="gradient-no-switch gradient-orange"
                        style="padding: 20px; min-height: 340px; max-height: 430px;">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">play_circle_filled</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Perfectly Mixed</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    We make every second in the gym count by mixing music and coaching. Your personal soundtrack will be
                    synchronized with your routine, meaning the duration, intensity, breaks and exercises of your
                    workout.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>

    <!-- Mission -->
    <section>
      <v-parallax :src="require('@/assets/img/projects/beastfm/dumbbells.jpg')" height="650">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3 text-xs-center">Our Mission</h1>
          <br>
          <div class="white--text display-1 mb-5 text-xs-center">
            <h4>Improve</h4>
            <div class="white--text headline mb-5 text-xs-center">
              By respecting everyone, helping each other and worshipping every effort we make the<br>
              world a fitter place.
            </div>
          </div>
          <div class="white--text display-1 mb-5 text-xs-center">
            <h4>Together</h4>
            <div class="white--text headline mb-5 text-xs-center">
              We connect athletes striving to become stronger and better versions of themselves <br>
              with coaches that want their knowledge to be heard by the world.<br>
              We train, learn and sweat together!
            </div>
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- My Work -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{  paddingTop: '40px', paddingBottom: '50px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% -00px', backgroundImage: 'url(' + require('@/assets/img/projects/beastfm/stroke.png') + ')'}"
            class="display-2 text-xs-center">Concept</h1><br>
          <v-layout row wrap class="my-2">
            <v-flex md7>
              <h1 class="display-1 text-xs-center">Choose Your Music</h1>
              <p class="text-xs-center">TBD</p>
              <h1 class="display-1 text-xs-center">Pick Topics From Our Choaches</h1>
              <p class="text-xs-center">TBD.</p>
              <h1 class="display-1 text-xs-center">Listen on Your Phone</h1>
              <p class="text-xs-center">TBD.</p>
            </v-flex>
            <v-flex xs0 md1>
            </v-flex>
            <v-flex sm0 md4>
              <img class="elevation-10" src="@/assets/img/projects/beastfm/pullup.jpg" alt="Vuetify.js" width="100%">
            </v-flex>
          </v-layout>
        </v-layout>
      </v-container>
    </section>

    <!-- Principles -->
    <section class="elevation-20" style="background-color: #252525">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5" align-center>
          <v-flex xs12>
            <h1 class="display-2 text-xs-center">Example Soundtracks</h1><br>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex sm12 md12 lg3>
                  <v-card class="elevation-0 gradient-no-switch gradient-accent text-xs-center align-center"
                          style="padding: 10px; min-height: 350px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">color_lens</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Pure Epicness</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center subheading">
                      Epic orchestral music<br>
                      <v-icon x-large class="text--lighten-2" style="margin: 10px;">add_circle</v-icon>
                      <br>
                      Motivational speeches from influential people.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex sm12 md12 lg3>
                  <v-card class="elevation-0 gradient-no-switch gradient-primary text-xs-center align-center"
                          style="padding: 10px; min-height: 350px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">360</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline">Bass Burner</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center subheading">
                      Drum & Bass and Dubstep <br>
                      <v-icon x-large class="text--lighten-2" style="margin: 10px;">add_circle</v-icon>
                      <br> Unforgiving drill coaches.<br>
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex sm12 md12 lg3>
                  <v-card class="elevation-0 gradient-no-switch gradient-orange text-xs-center align-center"
                          style="padding: 10px; min-height: 350px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">assignment_turned_in
                      </v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Melodic Endurance</div>
                    </v-card-title>
                    <v-card-text class="text-xs-center subheading">
                      Melodic electronic genres <br>
                      <v-icon x-large class="text--lighten-2" style="margin: 10px;">add_circle</v-icon>
                      <br> Educational podcasts about fitness.
                    </v-card-text>
                  </v-card>
                </v-flex>
                <v-flex sm12 md12 lg3>
                  <v-card light class="elevation-0 gradient-no-switch gradient-light text-xs-center align-center"
                          style="padding: 10px; min-height: 350px;">
                    <v-card-text>
                      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">whatshot</v-icon>
                    </v-card-text>
                    <v-card-title primary-title class="layout justify-center">
                      <div class="headline text-xs-center">Create Your Own</div>
                    </v-card-title>
                    <v-card-text style="margin: 12px;"><br>
                      Freely combine music from different genres and coaches. Totally individual, and just for
                      you!<br><br>
                    </v-card-text>
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
      <v-container fill-height fill-width style="max-width: 1200px;">
        <v-layout column wrap class="my-5" align-center>
          <h1
            :style="{  paddingTop: '40px', paddingBottom: '50px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% -00px', backgroundImage: 'url(' + require('@/assets/img/projects/beastfm/stroke.png') + ')'}"
            class="display-2 text-xs-center">How it Works</h1><br>
          <v-container fluid grid-list-md>
            <v-layout row>
              <v-flex md12>
                <v-timeline dense>
                  <v-timeline-item color="gray" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-orange">
                        <h2 class="display-1 white--text font-weight-light">1. Audio Frequency Engineering and
                          Analysis</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            The music is analyzed using state-of-the-art audio engineering. Considering different
                            frequency bands, our algorithm can identify main drops and quite parts as well as sections
                            with and without vocals.
                            This is important because we must avoid playing the coach's recording while vocals are
                            playing in the song. Having each section of the song, we can also loop high-energy parts to
                            play for the whole duration of a set (e.g. 60 seconds instead of only 30 seconds).
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="gray" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-orange">
                        <h2 class="display-1 white--text font-weight-light">2. Personalized Playlist Generation</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            Based on the user's stated preferences, we can compile a playlists of tracks that they will
                            like. Our algorithm will implement common recommender methods used by popular music
                            streaming services.
                            Users can, but do not have to create their own playlist but can rely on our service to
                            create a playlist that sounds familiar but still new and exciting.
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="gray" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-orange">
                        <h2 class="display-1 white--text font-weight-light">3. Creating and Mixing Soundtracks</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            Podcasts from the selected coach or of the preferred category are selected and mixed with
                            the music. Calm and vocal-free parts of the songs will be overlayed with short audio
                            recordings provided by the coach.
                            A typical soundtrack could last 60 minutes with a 30 second recording every 3 minutes. This
                            would be 10 minutes of information or motivation on a certain topic, required to be recorded
                            by the coach.
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="gray" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-orange">
                        <h2 class="display-1 white--text font-weight-light">4. Smartphone Stream or Download</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            The soundtracks created by our algorithm will be available to be downloaded before the
                            workout or streamed directly to the user's smartphone during the workout.
                            Of course, soundtracks can be saved and listened to again and again.
                          </v-flex>
                        </v-layout>
                      </v-container>
                    </v-card>
                  </v-timeline-item>
                  <v-timeline-item color="gray" large>
                    <v-card>
                      <v-card-title class="gradient-no-switch gradient-orange">
                        <h2 class="display-1 white--text font-weight-light">5. Social and Promotional Features</h2>
                      </v-card-title>
                      <v-container>
                        <v-layout>
                          <v-flex xs10>
                            A part of the app will work like a social network where users can collaborate and share
                            their soundtracks.
                            Coaches can directly interact with followers and all social media accounts (Instagram,
                            YouTube, etc) will be linked such that users won't miss out on new stuff from their
                            favourite coaches.
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

    <!-- Contact -->
    <section>
      <v-parallax :src="require('@/assets/img/projects/beastfm/barbell-bodybuilding.jpg')" height="500">
        <v-layout column align-center justify-center class="white--text">
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5" align-center>
              <v-flex xs0 sm3></v-flex>
              <v-flex xs12 sm6 class="my-3">
                <h1 class="mb-3 display-1 text-xs-center"><br>The Soundtrack for a Fitter World</h1>
                <div class="white--text subheading mb-3 text-xs-center">
                  In the US along, more than 50 million people have a gym membership all of them being potential users
                  of the app. Many of them prefer to bring headphones to the gym in order to listen to music that
                  motivates them during their workout. In fact, studies have shown that listening to music can increase
                  workout performance by 15%.
                </div>
                <v-btn class="gradient gradient-orange" style="width: 100%; margin-bottom: -20px" large round
                       to="/contact"
                       @click="expandDrawer">
                  Contact Me
                </v-btn>
              </v-flex>
              <v-flex xs0 sm3></v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-parallax>
    </section>
    <div class="separator"></div>

    <!-- Make it fly -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{  paddingTop: '40px', paddingBottom: '50px', paddingLeft: '300px', paddingRight: '300px', backgroundPosition: '50% -00px', backgroundImage: 'url(' + require('@/assets/img/projects/beastfm/stroke.png') + ')'}"
            class="display-2 text-xs-center">Let's Make it Fly</h1><br>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md3>
                <v-card class="gradient-no-switch gradient-light text-xs-center align-center"
                        style="padding: 20px; min-height: 550px; max-height: 600px;" light>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">library_music</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">We Need<br><b>Coaches</b></div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    Talented people that are active on YouTube and have their own podcasts about relevant topics can
                    join the team.
                  </v-card-text>
                  <v-btn class="gradient gradient-orange" dark large round to="/guide" @click="expandDrawer">
                    Become a Coach
                  </v-btn>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="gradient-no-switch gradient-light text-xs-center align-center"
                        style="padding: 20px; min-height: 550px; max-height: 600px;" light>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">people</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">We Need<br><b>Music</b></div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    In the first release, the available music will mostly be copyright free music that has been manually
                    downloaded from the internet and
                    analyzed by our algorithms. Later, commercial music as well as music provided directly by
                    independent artists will be added.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="gradient-no-switch gradient-light text-xs-center align-center"
                        style="padding: 20px; min-height: 550px; max-height: 600px;" light>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">play_circle_filled</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">We Need<br><b>Users</b></div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    It is important that the focused set of initial coaches see tremendous value for themselves and
                    their followers and therefore
                    regularly promote Beast.FM. Social marketing campaigns will ensure spreading through social media
                    channels and directly in the gyms.
                    This will result in exponentially growing number of users.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md3>
                <v-card class="gradient-no-switch gradient-light text-xs-center align-center"
                        style="padding: 20px; min-height: 550px; max-height: 600px;" light>
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="text--lighten-2">play_circle_filled</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">We Need<br><b>Sponsors & Partners</b></div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    We will collect usage data and provide very targeted and high quality advertisements with special
                    deals and offers to our active users.
                    This will allow us to offer the majority of features in a free version while still having a
                    sustainable stream of income.
                  </v-card-text>
                  <v-btn class="gradient gradient-orange" dark large round to="/guide" @click="expandDrawer">
                    Contact Us
                  </v-btn>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>
  </v-app>
</template>

<script>
  import Welcome from '../general/Welcome'
  import apiMixin from '../../mixins/apiMixin'
  import Explanation from '../general/Explanation'
  import {EventBus} from '@/eventBus.js'
  import UnderConstruction from '../includes/UnderConstruction'

  export default {
    name: 'ProjectBeastFM',
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
  #app {

  }

  .brand {
    color: white;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    color: #ffffff;
  }

  h2 {
    color: #54B4DE;
  }

  h3 {
    color: #88599c;
  }

  h4 {
    color: #5DBA77;
  }

  .gradient-orange {
    background-image: linear-gradient(to right, #5dba77 0%, #4CA06E 51%, #468061 100%);
  }

  .gradient-primary {
    background-image: linear-gradient(to right, #4fb2d6 0%, #4785b5 51%, #5c75c1 100%);
  }

  .gradient-accent {
    background-image: linear-gradient(to right, #56b5cc 0%, #64ae9d 51%, #4a9c82 100%);
  }

  .gradient-secondary {
    background-image: linear-gradient(to right, #4c4c4c 0%, #4b4b4b 51%, #343434 100%);
  }

  .gradient-dark {
    background-image: linear-gradient(to right, #424242 0%, #313131 51%, #1a1a1a 100%);
  }

  .gradient-light {
    background-image: linear-gradient(to right, #f2f2f2 0%, #d1d1d1 51%, #aaaaaa 100%);
  }

  Footer {
    clear: both;
    color: White;
    vertical-align: middle;
    margin: 0;
    position: relative;
    bottom: 0px;
    width: 100%;
    z-index: 100;
  }
</style>
