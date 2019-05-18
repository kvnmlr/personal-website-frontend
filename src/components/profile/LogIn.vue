<template>
  <div>
    <section v-if="!dense">
      <h1>Login</h1>
      <v-container fluid style="width: 800px;">
        <v-card>
          <v-card-text>
            <div v-if="$vuetify.breakpoint.lgAndUp">
            </div>
            <v-layout row wrap>
              <v-flex xs12>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                                v-model="email"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" type="password"
                                v-model="password"></v-text-field>
                  <v-spacer></v-spacer>
                  <span>
            <v-btn class="gradient gradient-orange" round dark v-on:click.prevent="login">Login</v-btn>
            <v-btn class="gradient gradient-blue" light round to="/signup">Sign Up</v-btn>
          </span>
                </v-form>
              </v-flex>
            </v-layout>
          </v-card-text>

        </v-card>
      </v-container>
    </section>
    <section v-else  style="background-color: white; width: 100%; padding: 10px;">
      <v-layout row wrap>
        <v-flex xs12>
          <v-form>
            <v-text-field prepend-icon="person" name="login" label="Login" type="text"
                          v-model="email"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" label="Password" type="password"
                          v-model="password"></v-text-field>
            <v-spacer></v-spacer>
            <span>
            <v-btn class="gradient gradient-orange" dark round v-on:click.prevent="login">Login</v-btn>
            <v-btn class="gradient gradient-blue" dark round to="/signup">Sign Up</v-btn>
          </span>
          </v-form>
        </v-flex>
      </v-layout>
    </section>
  </div>

</template>

<script>
  import apiMixin from '../../mixins/apiMixin'
  import {EventBus} from '@/eventBus'

  export default {
    name: 'LogIn',
    components: {},
    data: () => ({
      drawerPermanent: null,
      email: '',
      password: '',
      error: null,
    }),
    props: {
      source: String,
      csrfToken: String,
      user: Object,
      dense: Boolean
    },
    methods: {
      async login () {
        const formData = {
          _csrf: this.csrfToken,
          email: this.email,
          password: this.password
        }

        this.POST('login', formData, null, (data, err) => {
          if (!err) {
            EventBus.$emit('authorizeUser')
            EventBus.$emit('flash', {
              type: 'success',
              text: 'Welcome back, you are logged in'
            })
            this.$router.push('/dashboard')
          } else {
            EventBus.$emit('flash', {
              type: 'error',
              text: 'Incorrect username/email and password combination'
            })
          }
        })
      }
    },
    mixins: [apiMixin]
  }
</script>

<style scoped>

</style>
