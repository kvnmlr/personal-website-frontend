<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/about_cover.jpg')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3 text-xs-center">About Alpha Implement</h1>
          <div class="white--text subheading mb-3 text-xs-center">Last updated: 2019/01</div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Quote -->
    <section>
      <v-layout column align-center justify-center>
        <cover-card title="TODO."></cover-card>
      </v-layout>
    </section>
    <div class="separator" style="margin-bottom: 80px;"></div>

    <section>
      <v-container fill-height fill-width>
        <v-layout justify-center>
          <v-flex>
            <v-container grid-list-xl>
              <v-layout row wrap align-center>
                <v-flex xs12 md6>
                  <icon-action-card
                    icon="list"
                    title="Roadmap"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    color="accent">
                  </icon-action-card>
                </v-flex>
                <v-flex xs12 md6>
                  <icon-action-card
                    icon="map"
                    title="Contact"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    color="accent">
                  </icon-action-card>
              </v-flex>
                <v-flex xs12 md12>
                  <icon-action-card
                    icon="map"
                    title="Impressum"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porta erat et malesuada luctus."
                    color="accent">
                  </icon-action-card>
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
  import CoverCard from '../includes/CoverCard'
  import IconActionCard from '../includes/IconActionCard'

  export default {
    name: 'About',
    components: {IconActionCard, CoverCard, UnderConstruction},
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
