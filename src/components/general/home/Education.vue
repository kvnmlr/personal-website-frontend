<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/education_cover.jpg')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3 text-xs-center">Education and Career</h1>
          <div class="white--text subheading mb-3 text-xs-center">Last updated: 2019/01</div>
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
              <v-card class="elevation-10 gradient-no-switch gradient-slight-accent" style="margin-top: -80px;" width="70%">
                <v-card-title primary-title class="layout justify-center">
                  <p align="center" class="subheading align-center">These are my goals and resolutions for the first
                    half of 2019 ... well, at least
                    the ones I want to share publicly. Progress is updated on a monthly basis and documented in detail
                    in the monthly goals reports.
                  </p>
                </v-card-title>
              </v-card>
            </v-layout>
          </section>
          <div class="separator" style="margin-bottom: 80px;"></div>
        </v-flex>
      </v-layout>
    </v-container>

    <v-container>
      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item v-for="(item, i) in items" :color="item.color" :key="i" small>
          <span slot="opposite" :class="`headline font-weight-bold ${item.color}--text`" v-text="item.year"></span>
          <div class="py-3">
            <v-card class="gradient-no-switch elevation-0" style="padding: 20px;" light>
              <v-card-title primary-title class="layout justify-center">
                <h2 :class="`headline font-weight-light ${item.color}--text`">{{ item.heading }}</h2>
              </v-card-title>
              <v-card-text>
                {{ item.text }}
                <p v-if="item.link">
                  <br>
                  <a :href="item.link.url">{{ item.link.text }}</a></p>
              </v-card-text>
              <v-card-text class="layout justify-center" style="color: grey">
                {{ item.year }}
              </v-card-text>
            </v-card>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
  import UnderConstruction from '../../includes/UnderConstruction'

  export default {
    name: 'Education',
    components: {UnderConstruction},
    data: () => ({
      items: [
        {
          heading: 'Call Me Master',
          color: 'blue',
          year: '30. September 2019',
          text: 'September will be the month where I will finish my thesis entitled "Personalized Route Recommendations for Recreational Cyclists Based on Past Activities and Popular Segments".',
          link: {
            url: 'https://saarland-informatics-campus.de',
            text: 'Saarland Informatics Campus'
          }
        },
        {
          heading: 'F***ing Last Exam Passed',
          color: 'orange',
          year: '14. April 2019',
          text: 'Today I received confirmation that I passed the last exam on my way to my Master\'s degree. This was the Verification core lecture and definitely on of the harder ones. Now I can focus on writing my theses.'
        },
        {
          heading: 'Digital Innovations made in Saarbrücken',
          color: 'green',
          year: '19. - 23. February 2019',
          text: 'What an amazing week! Me and my team mates spent the week on Cologne on the largest exhibition in education. We partnered with the organizers and probably had the coolest booth of them all. It was nice seeing people use the software I created!',
          link: {
            url: 'https://fobid.org/portfolio/didacta2019/',
            text: 'FoBiD @ Didacta 2019'
          }
        },
        {
          heading: 'On Top of the University',
          color: 'red',
          year: '01. September 2018',
          text: 'I started working for a newly founded research institute for digital education. The goal is to combine knowledge from computer science and didactics to create awesome technologies for education in all stages of life. Excited to be a part of this! Plus, my office is at the top of the highest building, overlooking the whole university.',
          link: {
            url: 'https://fobid.org',
            text: 'FoBiD Saarbrücken'
          }
        },
        {
          heading: 'Holograms Everywhere!',
          color: 'blue',
          year: 'October - April 2018',
          text: 'I Worked for six months in an agile software development team for augmented reality solutions where I built software on Android and UWP for several head-mounted displays. I enjoyed planning, designing and implementing innovative customer projects. As a side effect I became quite fascinated with augmented and mixed reality.',
          link: {
            url: 'https://www.youtube.com/watch?v=vxX9AJ2L-5c',
            text: 'HoloLens Project Video'
          }
        },
        {
          heading: 'Fixing Printers++',
          color: 'orange',
          year: '01. October 2016',
          text: 'I handed in my Bachelor\'s thesis entitled "Smart Doorbell: Speech-Based Interaction with Artificially Intelligent Smart Home Devices". Since the title includes many buzzwords (\'smart\' even twice) you can imagine that it was quite awesome',
          link: {
            url: 'https://drive.google.com/file/d/0B9fxAQ3yLr4XU2dVLUxyaEVMd1k/view?usp=sharing',
            text: 'Download my thesis'
          }
        },
      ]
    }),
    methods: {}
  }
</script>

<style scoped>

</style>
