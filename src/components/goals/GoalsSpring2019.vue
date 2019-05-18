<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/genx-gradient-compositions3-.jpg')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="black--text mb-2 display-3 text-xs-center">My Goals and Resolutions</h1>
          <div class="black--text subheading mb-3 text-xs-center">Spring 2019</div>
        </v-layout>
      </v-parallax>
    </section>
    <div class="separator"></div>

    <v-container fill-height fill-width>
      <v-layout justify-center>
        <v-flex>
          <!-- Quote -->
          <section>
            <v-layout column align-center justify-center>
              <v-card class="elevation-10 gradient-no-switch" style="margin-top: -150px;" width="70%">
                <v-card-title primary-title class="layout justify-center">
                  <p align="center" class="subheading align-center"><br>
                    These are my goals and resolutions for the first half of 2019 ... well, at least
                    the ones I want to share publicly. Progress is updated on a monthly basis and documented in detail
                    in the monthly goals reports.
                  </p>
                </v-card-title>
              </v-card>
            </v-layout>
          </section>
          <div class="separator" style="margin-bottom: 80px;"></div>

          <section v-for="category in categories">
            <h4 :class="`display-1 text-xs-center ${category.color}--text`">{{ category.name }}</h4>
            <br>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-layout align-center justify-center class="white--text">
                  <v-progress-circular :rotate="360" :size="200" :width="15" :value="category.progress" :color="category.color"
                  style="margin-bottom: 20px;">
                    {{ category.progress }}%
                  </v-progress-circular>
                </v-layout>

              </v-flex>
              <v-flex xs12 md8>
                <div v-for="(item,i) in category.items" :key="i">

                  <v-expansion-panel>
                    <v-expansion-panel-content>
                      <v-icon v-if="item.complete" slot="actions" color="green">done</v-icon>
                      <v-icon v-else slot="actions" color="grey">$vuetify.icons.expand</v-icon>
                      <div slot="header">{{ item.header }}</div>
                      <v-card>
                        <v-card-text style="color: darkgray">{{ item.text }}</v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </div>
              </v-flex>
            </v-layout>
            <br><br>
          </section>
        </v-flex>
      </v-layout>
    </v-container>


  </div>

</template>

<script>
  import UnderConstruction from '../includes/UnderConstruction'
  import apiMixin from '../../mixins/apiMixin'

  export default {
    name: 'GoalsSpring2019',
    components: {UnderConstruction},
    data () {
      return {
        panel: [],
        categories: [
          {
            color: 'blue',
            name: 'Master of Science',
            progress: Math.floor(2 / 3 * 100),
            items: [
              {
                header: 'Ich werde die letzte Prüfung meines Studiums in Verification mit mindestens 2,3 abschließen.',
                text: 'Entgegen meiner Erwartungen habe ich noch eine 2,3 bekommen.',
                complete: true,
              },
              {
                header: 'Ich werde den praktischen Teil und die Evaluation meiner Masterarbeit fertigstellen.',
                text: '',
                complete: false,
              },
              {
                header: 'Ich werde mein Masterseminar mit mindestens 1,3 abschließen',
                text: 'Berechtigterweise habe ich eine 1,0 bekommen.',
                complete: true,
              }
            ]
          },
          {
            color: 'orange',
            name: 'Software Development',
            progress: Math.floor(0.0 / 4 * 100),
            items: [
              {
                header: 'Ich werde an einem Hackathon teilnehmen.',
                text: 'Bisher fand kein Hackathon im meiner Nähe statt',
                complete: false,
              },
              {
                header: 'Ich werde meine eigene Android App entwickeln und im Play Store veröffentlichen.',
                text: 'Bisher keine Gelegenheit',
                complete: false,
              },
              {
                header: 'Ich werde die Code Kata in Kotlin und Javascript meistern.',
                text: 'Bisher noch nicht dazu gekommen',
                complete: false,
              },
              {
                header: 'Ich werde mein Website Template fertigstellen, veröffentlichen und auf meiner Website anbieten.\n',
                text: 'Das Template ist fast fertig.',
                complete: false,
              },
            ]
          },
          {
            color: 'green',
            name: 'Work and Career',
            progress: Math.floor(0.0 / 1 * 100),
            items: [
              {
                header: 'Ich werde mir eine persönliche und individuelle Website programmieren und online stellen.',
                text: 'Bin noch dran am arbeiten',
                complete: false,
              },
              {
                header: 'Ich werde meine aktuellen Projekte auf der Website pflegen sowie monatliche Goals Reports veröffentlichen.',
                text: 'Ist soweit fertig, jedoch noch nicht online gestellt',
                complete: false,
              },
            ]
          },
        ]
      }
    },
    methods: {
      // Create an array the length of our items
      // with all values as true
      all () {
        let arr = []
        this.categories.forEach((category) => {
          arr.push([...Array(category.items).keys()].map(_ => true))
        })
        this.panel = arr
      },
      // Reset the panel
      none () {
        this.panel = []
      }
    }
  }
</script>

<style scoped>

</style>
