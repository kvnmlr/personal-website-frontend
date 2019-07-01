<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/projects/exploxcycling/bicycle-tour.jpg')" height="500">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/projects/exploxcycling/logo2.png" alt="ExploX" height="100">
          <h1 class="black--text mb-2 display-3 text-xs-center">More Projects</h1>
          <div class="black--text subheading mb-3 text-xs-center"></div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Spotlight -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="(product, i) in projects" v-bind:key="i" xs12 md4>
                <v-card class="elevation-10 gradient-no-switch gradient-light"
                        :style="[$vuetify.breakpoint.lgAndUp ? {margin: '20px', minHeight: '600px', maxHeight: '600px'} :
                        {margin: '20px', minHeight: '500px'}]">
                  <v-img
                    :src="require('@/assets/img/projects/more/'+product.image)"
                    aspect-ratio="1.75"
                  ></v-img>
                  <v-card-title primary-title style="color: black">
                    <div>
                      <h3 class="headline mb-0 black--text">{{ product.title}} ({{ product.year }})</h3>
                      <v-chip v-for="(tech, i) in product.techStack" :key="i" color="primary" text-color="white">{{ tech }}</v-chip>
                      <br><br>
                      <div>{{ product.text }}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions v-if="product.link" class="layout justify-center">
                    <v-btn target="_blank" :href="product.link" v-if="product.linkText" class="gradient gradient-accent" dark round large>
                      {{ product.linkText }}
                    </v-btn>
                    <v-btn target="_blank" :href="product.link" v-else class="gradient gradient-accent" dark round large>Learn More</v-btn>
                  </v-card-actions>

                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>
  </div>
</template>

<script>
  import {EventBus} from '@/eventBus.js'

  export default {
    name: 'More',
    created () {
    },
    data: () => ({
      projects: [
        {
          title: 'Project SoHo',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'holosomascreenshot.jpg',
          link: 'https://github.com/kvnmlr/holo-soma',
          linkText: 'Checkout on Github',
          techStack: ['Unity', 'C#', 'Windows Mixed Reality'],
          year: 2018
        },
        {
          title: 'Simulink Visualization',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'simulinkscreenshot.jpg',
          link: 'https://github.com/kvnmlr/simulink-advanced-visualization',
          linkText: 'Checkout on Github',
          techStack: ['Simulink', 'Matlab', 'Unity', 'C#'],
          year: 2018
        },
        {
          title: 'Maze Gaze',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'mazegazescreenshot.jpg',
          link: 'https://github.com/kvnmlr/mazegaze',
          linkText: 'Checkout on Github',
          techStack: ['Pupil Labs Eyetracking', 'Unity', 'C#'],
          year: 2016
        },
        {
          title: 'AR Fair Guide',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'arfairscreenshot.jpg',
          techStack: ['Vuforia', 'Unity', 'C#'],
          year: 2016
        },
        {
          title: 'Google Hot Searches Android Widget',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'hotsearchesscreenshot.jpg',
          link: 'https://github.com/kvnmlr/google-hot-searches',
          linkText: 'Checkout on Github',
          techStack: ['Android', 'Kotlin', 'Java'],
          year: 2016
        },
        {
          title: 'Smart Doorbell (Bachelor\'s Thesis)',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'smartdoorbellscreenshot.jpg',
          techStack: ['Node.js', 'Express', 'Javascript', 'NLU/NLP', 'Text-to-Speech', 'Raspberry Pi'],
          year: 2016
        },
      ],
    }),

    methods: {
      expandDrawer () {
        EventBus.$emit('expandDrawer')
      }
    },
  }
</script>

<style>
</style>
