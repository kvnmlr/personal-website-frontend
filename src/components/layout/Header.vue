<template>
  <Header>
    <v-navigation-drawer
      dark
      class="elevation-0" v-bind:style="getStyle" :clipped="$vuetify.breakpoint.lgAndUp"
      v-model="drawer" fixed app>
      <v-list dense>
        <template v-for="item in items">
          <v-list-group class="spacer" v-if="item.children && (!item.loginOnly || user)"
                        v-model="item.model"
                        :key="item.text"
                        :prepend-icon="item.model ? item.icon : item['icon-alt']"
                        append-icon=""
                        style="margin-bottom: 20px;">
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>
                  <b>{{ item.text }}</b>
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <div v-for="(child, i) in item.children" :key="i">
              <v-list-tile @click="" :to="{path: '/' + child.link}">
                <v-list-tile-action v-if="child.icon">
                  <v-icon>{{ child.icon }}</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ child.text }}
                  </v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </v-list-group>

          <v-list-tile v-else-if="!item.loginOnly || user" :key="item.text" @click="" :to="{path: '/' + item.link}">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar style="z-index: 100;" dark
               :clipped-left="$vuetify.breakpoint.lgAndUp" dense app dark>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <span v-if="user">
          <router-link to="/hub" class="hidden-sm-and-down brand">&nbsp;Website Template</router-link>
          <img src="@/assets/img/logo_small.png" style="margin-bottom: -5px;" height="25px;"
               v-on:click="$router.push('/hub')">
        </span>
        <span v-else>
          <router-link to="/" class="hidden-sm-and-down brand">&nbsp;Website Template</router-link>
          <img src="@/assets/img/logo_small.png" style="margin-bottom: -5px;" height="25px;"
               v-on:click="$router.push('/')">

        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-menu v-if="user" left offset-y v-model="notificationMenu" :close-on-content-click="false" max-width="400"
              min-width="300">
        <v-btn icon slot="activator">
          <v-icon v-if="user.notifications.length">notifications_active</v-icon>
          <v-icon v-else>notifications</v-icon>
        </v-btn>
        <v-list two-line>
          <v-btn v-if="user.notifications.length" round flat fixed right small
                 v-on:click="dismissNotifications" style="margin-top: 10px;">
            <v-icon>check</v-icon>
            Dismiss All
          </v-btn>
          <template v-for="(item, index) in this.notifications">
            <v-subheader v-if="item.header" :key="item.header">
              {{ item.header }}
            </v-subheader>

            <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>

            <v-list-tile v-else :key="item.title" avatar @click="">
              <v-list-tile-avatar>
                <img v-if="item.avatar" :src="item.avatar">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                <v-list-tile-sub-title v-html="item.body"></v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-menu>
      <v-menu left offset-y v-model="loginMenu" :close-on-content-click="false" min-width="300">
        <v-btn icon large slot="activator" dark>
          <v-avatar size="32px" tile round>
            <img src="@/assets/img/logo_padded.png" style="border-radius: 50%;">
          </v-avatar>

        </v-btn>
        <p slot="activator" style="padding-top: 15px; margin-left: 20px" v-if="user">{{user.name}}</p>
        <p slot="activator" style="padding-top: 15px; margin-left: 20px" v-else>Login</p>

        <div style="padding:10px;">
          <log-in dense v-if="!user"
                  v-on:authorizeUser="() => {$emit('authorizeUser'); this.loginMenu=false}">
          </log-in>
          <v-list v-else>
            <v-list-tile v-on:click="() => {this.loginMenu=false; this.$router.push('/dashboard')}">
              <v-list-tile-title>
                <v-icon>dashboard</v-icon>&nbsp;
                Dashboard</v-list-tile-title>
            </v-list-tile>
            <v-list-tile v-on:click="() => {$emit('logout'); this.loginMenu=false}">
              <v-list-tile-title>
                <v-icon>close</v-icon>&nbsp;
                Logout</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </div>
      </v-menu>
    </v-toolbar>
  </Header>
</template>

<script>
  import LogIn from '../profile/LogIn'
  import {EventBus} from '@/eventBus.js'
  import apiMixin from '../../mixins/apiMixin'

  export default {
    components: {LogIn},
    data: () => ({
      editDialog: false,
      drawer: false,
      loginMenu: false,
      notificationMenu: false,
      items: [
        {icon: 'dashboard', text: 'Hub', link: 'hub', loginOnly: false},
        {icon: 'person', text: 'Dashboard', link: 'dashboard', loginOnly: true},
        {
          loginOnly: true,
          icon: 'keyboard_arrow_up',
          'icon-alt': 'keyboard_arrow_down',
          text: 'Posts',
          model: true,
          children: [
            {icon: 'add', text: 'Create Post', link: 'creator'},
            {icon: 'near_me', text: 'Find Post', link: 'posts', loginOnly: false},
          ]
        },
        {icon: 'flight_takeoff', text: 'Get Started', link: 'guide', loginOnly: false},
        {icon: 'chat_bubble', text: 'Send feedback', link: 'feedback', loginOnly: false},
        {icon: 'help', text: 'About', link: 'about', loginOnly: false},
      ]
    }),
    props: {
      source: String,
      user: Object
    },
    created () {
      console.log(this.$router.currentRoute.name);
      this.drawer = this.$vuetify.breakpoint.lgAndUp && !this.$router.currentRoute.name.includes('Landing');
      EventBus.$on('expandDrawer', () => {
        if (this.$vuetify.breakpoint.lgAndUp) {
          this.drawer = true
        }
      })
      EventBus.$on('collapseDrawer', () => {
        this.drawer = false
      })
    },
    computed: {
      getStyle () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return {'z-index': 99,}
        } else {
          return {'z-index': 101,}
        }
      },
      notifications () {
        let notifications = []
        if (this.user) {
          if (this.user.notifications.length === 0) {
            notifications.push({ header: 'No new notifications' });
          } else {
            notifications.push({ header: 'Notifications' })
            this.user.notifications.forEach((notification) => {
              notifications.push(notification)
              if (!notification.header) {
                notifications.push({
                  divider: true, inset: true
                })
              }
            })
          }
        }
        return notifications
      }
    },
    methods: {
      async dismissNotifications () {
        const formData = {
          _csrf: this.csrfToken,
          notifications: [],
        }

        this.PUT('users/' + this.user._id, formData, null, (data, err) => {
          if (!err) {
            this.user.notifications = []
          }
        })
      }
    },
    mixins: [apiMixin]
  }
</script>

<style scoped>
  .spacer {
    margin-top: 10px;
    margin-bottom: 10px;
  }
</style>
