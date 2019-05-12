<template>
  <v-app id="app">
    <v-snackbar v-model="alertVisible" :timeout=3500 :bottom=true :color="alert.type">
      {{ alert.text }}
    </v-snackbar>
    <app-header v-bind:user="user" v-on:logout="logout" v-on:authorizeUser="authorizeUser"></app-header>
    <v-content>
      <transition name="fade">
        <router-view v-if="show" v-bind:user="user" v-on:logout="logout" v-on:authorizeUser="authorizeUser" v-on:flash="flash">
        </router-view>
      </transition>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
  import Header from './components/layout/Header'
  import Footer from './components/layout/Footer'
  import apiMixin from './mixins/apiMixin'
  import {EventBus} from './eventBus'
  import Landing from './components/general/Landing'

  export default {
    components: {
      Landing,
      'app-header': Header,
      'app-footer': Footer,
    },
    data: () => ({
      csrfToken: '',
      user: null,
      alert: {},
      alertVisible: false,
      show: false,
    }),
    created () {
      this.authorizeUser()
      EventBus.$on('reloadData', () => {
        this.authorizeUser()
      })
      EventBus.$on('authorizeUser', () => {
        this.authorizeUser()
      })
      EventBus.$on('flash', (data) => {
        this.flash(data)
      })
      setTimeout(() => {
        this.show = true
      }, 200)
    },
    methods: {
      async logout () {
        this.GET('logout', (data, err) => {
          if (!err) {
            this.user = undefined
            this.flash({
              type: 'success',
              text: 'You are now logged out'
            })
            this.$router.push('/')
          }
        })
      },
      async authorizeUser () {
        this.GET('authenticate', (data, err) => {
          if (!err) {
            if (this.user) {
              if (this.user._id === data.user._id) {
                EventBus.$emit('authenticated', this.user)
              }
            } else {
              this.user = data.user
              EventBus.$emit('authenticated', this.user)
            }
            this.performSearch()
          } else {
            EventBus.$emit('unauthenticated')
          }
        })
      },

      async performSearch () {
        if (!this.user) {
          return
        }
        this.GET('dashboard', (data, err) => {
          if (err) {
            if (!this.user) {
              setTimeout(() => {
                this.$router.push('/login')
                this.$emit('flash', err.flash)
              }, 100)
            }
            this.$emit('flash', err.flash)
          } else {
            this.user = data.user
            console.log(this.user)

            if (!this.user.fullyRegistered) {
              this.$router.push('/signup')
            }
          }
        })
      },
      flash (value) {
        if (value) {
          this.alert = value
          this.alertVisible = true

          setTimeout(() => {
            this.alertVisible = false
          }, 2500)
        }
      }
    },
    mixins: [apiMixin],
    watch:{
      $route (){
        this.show = false;
        setTimeout(() => {
          this.show = true;
        }, 200)
      }
    }
  }
</script>
