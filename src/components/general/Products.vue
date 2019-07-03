<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/products_cover.jpg')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="mb-2 display-3 text-xs-center white--text">Products and Downloads</h1>
          <div class="subheading mb-3 text-xs-center white--text">To Help You Be Awesome and Get Shit Done</div>
        </v-layout>
      </v-parallax>
    </section>


    <!-- Spotlight -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{ paddingTop: '20px', paddingBottom: '50px', backgroundPosition: '50% -10px'}"
            class="display-2 text-xs-center">Products</h1><br>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="(product, i) in products" v-bind:key="i" xs12 md6>
                <v-card class="elevation-10 gradient-no-switch gradient-light" :to="product.link"
                        :style="[$vuetify.breakpoint.lgAndUp ? {margin: '20px', minHeight: '620px', maxHeight: '700px'} :
                        {margin: '20px', minHeight: '500px'}]">
                  <v-img
                    :src="product.image"
                    aspect-ratio="2.75"
                  ></v-img>
                  <v-card-title primary-title style="color: black">
                    <div>
                      <h3 class="headline mb-0 black--text">{{ product.title}}</h3><br>
                      <div>{{ product.text }}</div>
                    </div>
                  </v-card-title>
                  <v-card-text class="layout justify-center">
                    <div>
                      <div class="subheading text-xs-center">Get it for</div>
                      <div class="headline text-xs-center">{{ product.price }}</div>
                    </div>
                  </v-card-text>
                  <v-card-actions class="layout justify-center">
                    <v-btn v-if="product.page" class="gradient gradient-accent" dark round large>Get it on
                      {{ product.page }}
                    </v-btn>
                    <v-btn v-else class="gradient gradient-accent" dark round large>Learn More</v-btn>
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

    <!-- Spotlight -->
    <section class="elevation-10"
             :style="[$vuetify.breakpoint.lgAndUp ?
             { width: '100%', backgroundSize: 'auto 100%', backgroundImage: 'url(' + require('@/assets/img/paperdark.jpg') + ')'} :
             { width: '100%', backgroundColor: '#202020'}]">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1
            :style="{ paddingTop: '20px', paddingBottom: '50px', backgroundPosition: '50% -10px'}"
            class="display-2 text-xs-center white--text">Open Source</h1><br>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex v-for="(source, i) in sources" v-bind:key="i" xs12 md6>
                <v-card dark class="elevation-10 gradient-no-switch gradient-dark" :to="source.link"
                        style="min-height: 500px; max-height: 580px; margin: 20px;">
                  <v-img
                    :src="source.image"
                    aspect-ratio="2.75"
                  ></v-img>
                  <v-card-title primary-title class="mb-0 white--text">
                    <div>
                      <h3 class="headline mb-0 white--text">{{ source.title}}</h3><br>
                      <div>{{ source.text }}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions class="layout justify-center">
                    <v-btn class="gradient gradient-orange" round large>Get it on {{ source.page }}</v-btn>
                  </v-card-actions>
                  <br>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
  import apiMixin from '../../mixins/apiMixin'
  import {EventBus} from '@/eventBus.js'

  export default {
    name: 'Products',
    data: () => ({
      products: [
        {
          title: 'Developer Portfolio Mastery Course',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          price: '50$'
        },
        {
          title: 'Coder\' 365-Day Journal',
          text: 'text',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          price: 'FREE',
          page: 'Amazon'
        },
      ],

      sources: [
        {
          title: 'Developer Portfolio Mastery Course',
          text: 'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.' +
            'I think programming helps you in analyzing problems by breaking them down into sub-problems and then ' +
            'solving them one step at a time.',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          page: 'Github'
        },
        {
          title: 'Coder\' 365-Day Journal',
          text: 'text',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          page: 'Github'
        },
        {
          title: 'Coder\' 365-Day Journal',
          text: 'text',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
          link: '/',
          page: 'Github'
        },
      ]
    }),
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
