<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <v-layout row wrap>
          <v-flex xs10 sm10 md10>
            <h2>{{ post.title }}</h2>
            <v-chip v-for="tag in post.tags" v-if="tag !== ''" v-bind:key="tag" tag="a" href="#">{{ tag }}
            </v-chip>
          </v-flex>
          <v-flex xs2 sm2 md2>
            <v-menu transition="slide-y-transition" bottom right>
              <v-btn light class="gradient gradient-accent" relative fab right slot="activator">
                <v-icon>more_horiz</v-icon>
              </v-btn>
              <v-list>
                <v-list-tile v-on:click="editDialog = true">
                  <v-list-tile-title>
                    <v-icon>edit</v-icon>
                    Edit
                  </v-list-tile-title>
                  <v-dialog v-model="editDialog" persistent max-width="400">
                    <v-card>
                      <v-card-title class="headline">Update Post Details</v-card-title>
                      <v-card-text>
                        <v-form ref="form" lazy-validation>
                          <v-text-field v-model="updatedPost.title" label="Name" required></v-text-field>
                          <v-textarea v-model="updatedPost.body" label="Description" required></v-textarea>
                          <v-btn flat color="primary" v-on:click.prevent="update">
                            Update
                          </v-btn>
                          <v-btn flat @click="editDialog = false">Cancel</v-btn>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-tile>
                <v-list-tile v-on:click="deleteDialog = true">
                  <v-list-tile-title>
                    <v-icon>delete</v-icon>
                    Delete
                  </v-list-tile-title>
                  <v-dialog v-model="deleteDialog" persistent max-width="290">
                    <v-card>
                      <v-card-title class="headline">Delete this Post?</v-card-title>
                      <v-card-text>
                        <v-form ref="form" lazy-validation>
                          <v-btn flat color="primary" v-on:click="deletePost">
                            Delete
                          </v-btn>
                          <v-btn flat @click="deleteDialog = false">Cancel</v-btn>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-list-tile>
              </v-list>
            </v-menu>
          </v-flex>
        </v-layout>
        <br>
        <p>{{ post.body }}</p>
        <p v-if="post.user">Author:
          <router-link :to="{path: '/users/' + post.user._id}">{{ post.user.username}}</router-link>
        </p>
        <p style="color: darkgrey">{{ this.formatDate(post.createdAt)}}</p>
      </v-flex>
    </v-layout>

    <div class="separator"></div>
    <h2>Comments</h2>
    <v-textarea
      name="comment_input"
      label="Your comment"
      value=""
      :auto-grow="true"
      rows="1"
      v-model="commentText"></v-textarea>
    <v-btn class="gradient gradient-orange" round dark v-on:click="addComment">Post Comment</v-btn>

    <v-list two-line style="margin-top: 20px;">
      <template v-for="(comment, index) in post.comments">
        <v-list-tile :key="comment._id" avatar @click="">
          <v-list-tile-action>
            <v-icon>thumb_up</v-icon>
          </v-list-tile-action>
          <v-list-tile-action v-if="comment._id && (user.role === 'admin' || post.user._id === user._id || comment.user._id === user._id) ">
            <v-icon color="red" v-on:click="deleteComment(comment._id)">delete</v-icon>
          </v-list-tile-action>
          <br>
          <v-list-tile-content>
            <v-list-tile-title v-html="comment.body"></v-list-tile-title>
            <v-list-tile-sub-title v-html="comment.user.username"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img :src="comment.avatar">
          </v-list-tile-avatar>
        </v-list-tile>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>

  </div>
</template>

<script>
  import apiMixin from "../../mixins/apiMixin";
  import {EventBus} from '@/eventBus.js';
  import formatDateMixin from '../../mixins/formatDateMixin'

  export default {
    name: "PostDetails",
    components: {},
    data() {
      return {
        id: this.$route.params.id,
        name: '',
        menu: false,
        editDialog: false,
        deleteDialog: false,
        post: {},
        updatedPost: {},
        commentText: '',
        alert: false,
        overlay: false,
      }
    },
    props: {
      user: Object,
    },
    created() {
      this.performSearch();
    },
    methods: {
      broadcastData() {
          if (this.post) {
            EventBus.$emit('postReady', this.post);
          }
          if (this.user) {
            if (this.user.activities) {
              EventBus.$emit('activitiesReady', this.user.activities);
            }
          }
      },

      async performSearch() {
        this.GET('posts/' + this.id, (data, err) => {
          if (!err) {
            if (data.post) {
              this.post = data.post;
              this.updatedPost = {
                title: this.post.title,
                body: this.post.body,
                tags: this.post.tags
              };
              this.broadcastData();
            }
          }
        });
      },

      async update() {
        const formData = {
          _csrf: this.csrfToken,
          title: this.updatedPost.title,
          body: this.updatedPost.body,
          tags: JSON.stringify(this.updatedPost.tags)
        };
        const requestParams = {
          method: 'PUT',
          responseType: 'text',
        };

        this.PUT('posts/' + this.id, formData, requestParams, (data, err) => {
          if (!err) {
            this.performSearch();
          }
          this.editDialog = false
        });
      },

      async deletePost() {
        this.DELETE('posts/' + this.id, (data, err) => {
          if (!err) {
            this.$router.push('/hub');
          }
          this.deleteDialog = false
        });
      },

      async addComment() {
        const formData = {
          _csrf: this.csrfToken,
          comment: {
            body: this.commentText,
          },
        };
        this.POST('posts/' + this.id + '/comments', formData, null, (data, err) => {
          if (!err) {
            this.post.comments.push({
              body: data.comment.body,
              user: data.comment.user,
            });
            this.commentText = '';
          }
        });
      },
      async deleteComment(id) {
        this.DELETE('posts/' + this.id + '/comments/' + id, (data, err) => {
          if (!err) {
            this.post.comments.forEach((comment, index) => {
              if (comment._id === id) {
                this.post.comments.splice(index, 1);
              }
            });
          }
          this.deleteDialog = false
        });
      },
    },
    mixins: [apiMixin, formatDateMixin]
  }
</script>

<style scoped>

</style>
