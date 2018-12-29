<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="separator"></div>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm7 md7>
        <v-card class="gradient-no-switch gradient-secondary" dark>
          <v-card-title primary class="title">
            <v-icon>show_chart</v-icon>&nbsp;Search Posts
          </v-card-title>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 sm7>
                <v-text-field color="primary" v-model="search" prepend-inner-icon="search" label="Search">
                </v-text-field>
              </v-flex>
              <v-flex xs12 sm1>
                <br>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12 sm6>
                <div v-for="(layer, i) in featureLayers" :key="i">
                  <v-switch v-on:change="layerChanged(layer.id)" v-model="selectedFeatures" v-bind:label="layer.name"
                            v-bind:value="layer.id" color="primary" hide-details>{{layer.name}}
                  </v-switch>
                </div>
              </v-flex>
              <v-flex xs12 sm6>
                <v-btn :disabled="loadingDialog" :loading="loadingDialog"
                       class="gradient gradient-blue" @click.stop="performSearch"
                       light round large style="width: 95%; height: 70px; vertical-align: bottom">
                  <v-icon>search</v-icon>&nbsp;Search
                </v-btn>
                <loading-dialog :show="loadingDialog" header="Searching for matching posts" :width="500"></loading-dialog>
              </v-flex>
            </v-layout>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm1 md1 style="text-align: center; align-items: center;">
        <h3>OR</h3>
      </v-flex>
      <v-flex d-flex xs12 sm4 md4>
        <create-new-post-prompt></create-new-post-prompt>
      </v-flex>
    </v-layout>
    <div class="separator"></div>
    <h2>Results: </h2>
    <br>
    <v-layout row wrap>
      <post v-for="post in filteredPosts" v-bind:post="post" :key="post.details"></post>
      <p v-if="filteredPosts.length === 0">No posts to display</p>
    </v-layout>
    <div class="separator"></div>
  </div>
</template>

<script>
  import Post from './Post'
  import postSearchMixin from "../../mixins/postSearchMixin";
  import apiMixin from "../../mixins/apiMixin";
  import LoadingDialog from "../includes/LoadingDialog";
  import CreateNewPostPrompt from "./CreateNewPostPrompt";

  export default {
    name: "List",
    components: {
      CreateNewPostPrompt,
      LoadingDialog,
      post: Post,
    },
    data() {
      return {
        title: "Content Finder",
        search: '',
        loadingDialog: false,
        posts: [],
        featureLayers: [
          {
            id: 0,
            name: 'Announcements',
          },
          {
            id: 1,
            name: 'By Admin',
          },
        ],
        selectedFeatures: [0, 1],
      }
    },
    created() {
    },
    methods: {
      async performSearch() {
        this.loadingDialog = true;

        this.GET('posts?page=1', (data, err) => {
          if (!err) {
            this.posts = data.posts;
          }
          setTimeout(() => {
            this.loadingDialog = false;
          }, 1000);
        });
      }
    },
    mixins: [postSearchMixin, apiMixin]
  }


</script>

<style scoped>

</style>
