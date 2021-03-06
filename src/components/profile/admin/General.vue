<template>
  <div>
    <section>
      <h3>API Limits</h3>
      <div v-if="limits">
        <b>Short Term</b>
        <p>{{limits.shortTermUsage}} out of {{limits.shortTermLimit}} ({{shortTerm}}%)</p>
        <v-progress-linear class="gradient"
                           :color="this.shortTerm < 67 ? this.shortTerm < 34 ? 'success' : 'warning' : 'error'"
                           height="20" :value="this.shortTerm"></v-progress-linear>
        <div class="separator"></div>
        <b>Long Term</b>
        <p>{{limits.longTermUsage}} out of {{limits.longTermLimit}} ({{longTerm}}%)</p>
        <v-progress-linear class="gradient"
                           :color="this.longTerm < 67 ? this.longTerm < 34 ? 'success' : 'warning' : 'error'"
                           height="20" :value="this.longTerm"></v-progress-linear>
      </div>
    </section>
    <v-divider class="separator"></v-divider>
    <section>
      <h3>Task Triggers</h3>
      <v-btn round :loading="taskloading" :disabled="taskloading" class="gradient gradient-orange" dark
             @click="triggerBackup">
        Create Complete Backup
        <span slot="loader" class="custom-loader">
          <v-icon light>cached</v-icon>
        </span>
      </v-btn>
    </section>
    <v-divider class="separator"></v-divider>
    <section>
      <h3>Feedback</h3>
      <v-container v-if="feedbacks.length > 0" fluid grid-list-md>
        <v-layout column wrap>
          <v-flex v-for="feedback in feedbacks" :key="feedback._id" d-flex xs12>
            <v-card class="gradient-no-switch gradient-accent">
              <v-card-text>
                <v-layout row>
                  <v-flex xs10>
                    {{ feedback.body }}
                  </v-flex>
                  <v-flex xs2>
                    <v-btn class="gradient gradient-orange" dark fab small style="float: right"
                           v-on:click="remove(feedback._id)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
                <p style="color: #ff6d00" v-if="!feedback.user">Sent on {{ feedback.createdAt }}, reply to {{
                  feedback.email}}</p>
                <p style="color: #ff6d00" v-else>Sent on {{ formatDate(feedback.createdAt) }}
                  by user {{feedback.user.name }}
                  (reply to {{ feedback.email }})</p>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <p v-else>No feedback submitted</p>
    </section>
    <v-divider class="separator"></v-divider>
    <section>
      <h3>Invitations</h3>
      <v-container v-if="invitations.length > 0" fluid grid-list-md>
        <v-layout column wrap>
          <v-flex v-for="invitation in invitations" :key="invitation._id" d-flex xs12>
            <v-card class="gradient-no-switch gradient-accent">
              <v-card-text>
                <p><b>Invitation on </b>{{formatDate(invitation.createdAt)}}
                  <v-chip v-if="invitation.accepted" color="green" text-color="white">Accepted</v-chip>
                  <v-chip small v-else color="red" text-color="white">Not Accepted</v-chip>
                </p>
                <p>
                  <b>From: </b>
                  <router-link :to="{path: '/users/' + invitation.user._id}">{{invitation.user.name}}</router-link>
                  <br>
                  <b>To:</b>
                  <router-link :to="{path: '/users/' + ((invitation.receiverUser) ? invitation.receiverUser._id : '')}">
                    {{invitation.email}} ({{invitation.receiver}})
                  </router-link>
                </p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
      <p v-else>No feedback submitted</p>
    </section>
  </div>
</template>

<script>
  import apiMixin from "../../../mixins/apiMixin";
  import formatDateMixin from "../../../mixins/formatDateMixin";
  import {EventBus} from '@/eventBus.js';

  export default {
    name: "Api",
    created() {
    },
    data() {
      return {
        loader: null,
        taskloading: false,
      }
    },
    props: {
      invitations: Array,
      feedbacks: Array,
      limits: Object,
    },
    methods: {
      async remove(id) {
        this.DELETE('feedback/' + id, (data, err) => {
          if (!err) {
            this.feedbacks.forEach((feedback, index) => {
              if (feedback._id === id) {
                this.feedbacks.splice(index, 1);
                this.$emit('flash', data.flash);
              }
            });
          }
        });
      },
      async triggerBackup() {
        this.taskloading = true;
        this.GET('triggers/backup', () => {
          this.taskloading = null;
        });
      },
    },
    computed: {
      shortTerm() {
        if (this.limits) {
          return Math.floor(this.limits.shortTermUsage * 100 / this.limits.shortTermLimit);
        }
      },
      longTerm() {
        if (this.limits) {
          return Math.floor(this.limits.longTermUsage * 100 / this.limits.longTermLimit);

        }
      }
    },
    watch: {
      loader() {
        const l = this.loader;
        this[l] = !this[l];
      }
    },
    mixins: [apiMixin, formatDateMixin]
  }
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }

  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
