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

    children: [
    {icon: 'near_me', text: 'Project SoHo (2018)', link: 'projects/soho', loginOnly: false},
    {
    icon: 'near_me',
    text: 'Simulink Visualization (2018)',
    link: 'projects/simulinkvisualization',
    loginOnly: false
    },
    {icon: 'near_me', text: 'Maze Gaze (2016)', link: 'projects/mazegaze', loginOnly: false},
    {icon: 'near_me', text: 'AR Fair Guide (2016)', link: 'projects/arfairguide', loginOnly: false},
    {icon: 'near_me', text: 'Google Hot Searches (2016)', link: 'projects/hotsearches', loginOnly: false},
    {icon: 'near_me', text: 'Smart Doorbell (2016)', link: 'projects/smartdoorbell', loginOnly: false},
    ]
    <!-- Spotlight -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="(product, i) in projects" v-bind:key="i" xs12 md6>
                <v-card class="elevation-10 gradient-no-switch gradient-light" :to="product.link"
                        :style="[$vuetify.breakpoint.lgAndUp ? {margin: '20px', minHeight: '620px', maxHeight: '700px'} :
                        {margin: '20px', minHeight: '500px'}]">
                  <v-img
                    :src="product.image"
                    aspect-ratio="2.75"
                  ></v-img>
                  <v-card-title primary-title style="color: black">
                    <div>
                      <h3 class="headline mb-0 black--text">{{ product.title}}</h3>
                      <v-chip v-for="tech in product.techStack" color="primary" text-color="white">{{ tech }}</v-chip>
                      <br><br>
                      <div>{{ product.text }}</div>
                    </div>
                  </v-card-title>
                  <v-card-text class="layout justify-center">
                  </v-card-text>
                  <v-card-actions class="layout justify-center">
                    <v-btn v-if="product.linkText" class="gradient gradient-blue" dark round large>{{ product.linkText
                      }}
                    </v-btn>
                    <v-btn v-else class="gradient gradient-blue" dark round large>Learn More</v-btn>
                  </v-card-actions>
                  <br>
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
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          linkText: 'Checkout on Github',
          techStack: ['Unity', 'C#', 'Windows Mixed Reality']
        },
        {
          title: 'Coder\' 365-Day Journal',
          text: 'text',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          price: 'FREE',
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
