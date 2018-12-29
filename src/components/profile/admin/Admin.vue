<template>
  <div>
    <h1>Admin Dashboard</h1>
    <v-tabs fixed-tabs
            slot="extension"
            v-model="currentTab"
            centered
            grow
            hide-slider
    >
      <v-tab :href="`#tab-api`">
        General
      </v-tab>
      <v-tab :href="`#tab-users`">
        Users
      </v-tab>
      <v-tab :href="`#tab-posts`">
        Posts
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="currentTab" touchless>
      <v-tab-item lazy :id="`tab-api`">
        <general :invitations="invitations" :feedbacks="feedbacks"></general>
      </v-tab-item>
      <v-tab-item lazy :id="`tab-users`">
        <users :users="users"></users>
      </v-tab-item>
      <v-tab-item lazy :id="`tab-posts`">
        <posts :posts="posts"></posts>
      </v-tab-item>
    </v-tabs-items>

  </div>
</template>

<script>
  import General from './General'
  import Users from './Users'
  import Posts from './Posts'
  import {EventBus} from '@/eventBus.js';
  import apiMixin from "../../../mixins/apiMixin";

  export default {
    components: {
      General,
      Users,
      Posts
    },
    name: "Admin",
    data() {
      return {
        currentTab: 'tab-api',
        users: [],
        posts: [],
        invitations: [],
        feedbacks: [],
        user: Object

      };
    },
    created() {
      this.performSearch();
      EventBus.$emit('authenticate');
    },
    methods: {
      async performSearch() {
        this.GET('dashboard', (data, err) => {
          if (!err) {
            this.users = data.users;
            this.posts = data.posts;
            this.feedbacks = data.feedbacks;
            this.invitations = data.invitations;
          }
        });
      },
    },
    mixins: [apiMixin]
  }
</script>

<style scoped>

</style>
