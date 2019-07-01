<template>
  <div v-if="user">
    <div v-if="user.posts">
      <h1>Dashboard</h1>
      <v-tabs fixed-tabs slot="extension" v-model="currentTab" centered>
        <v-tab :href="`#tab-profile`">
          Profile
        </v-tab>
        <v-tab :href="`#tab-posts`">
          Posts
        </v-tab>
      </v-tabs>
      <v-tabs-items v-model="currentTab" style="margin-top: -10px;">
        <v-tab-item :id="`tab-profile`">

          <v-layout row wrap>
            <v-flex xs12 sm12 md7>
              <v-container>

                <br>
                <br>
                <v-layout row>
                  <v-flex xs10 sm10 md10>
                    <v-layout row flex>
                      <v-flex xs12 sm4>
                        <v-avatar size="64px" tile>
                          <img style="border-radius: 50%;" src="@/assets/img/logo_padded.png" class="elevation-3">
                        </v-avatar>
                      </v-flex>
                      <v-flex xs12 sm 8>
                        <h2 color="primary">{{ user.firstName.toUpperCase() + ' ' + user.lastName.toUpperCase() }}</h2>
                        <h4>{{ user.username }}</h4>
                      </v-flex>
                    </v-layout>
                    <p></p>
                    <h4>Email</h4>
                    <p>{{ user.email }}</p>
                    <h4>A member since</h4>
                    <p>{{ user.createdAt }}</p>

                    <h4>Posts:</h4>
                    <p>{{ user.posts.length }}</p>
                  </v-flex>
                  <v-flex xs2 sm2 md2>
                    <v-menu transition="slide-y-transition" bottom left>
                      <v-btn class="gradient gradient-accent" light fab relative right slot="activator">
                        <v-icon>more_horiz</v-icon>
                      </v-btn>
                      <v-list>
                        <v-list-tile v-on:click="() => {this.setUpdateUserFields(); this.editDialog = true;}">
                          <v-list-tile-title>
                            <v-icon>edit</v-icon>
                            Edit
                          </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile :to="{path: '/users/'+this.user._id}">
                          <v-list-tile-title>
                            <v-icon>public</v-icon>
                            Public Profile
                          </v-list-tile-title>
                        </v-list-tile>

                        <v-list-tile v-on:click="exportDialog = true">
                          <v-list-tile-title>
                            <v-icon>import_export</v-icon>
                            Export/Save
                          </v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile v-on:click="deleteDialog = true">
                          <v-list-tile-title>
                            <v-icon>delete</v-icon>
                            Delete Account
                          </v-list-tile-title>
                          <v-dialog v-model="deleteDialog" max-width="290">
                            <v-card>
                              <v-card-title class="headline">Are You Sure?</v-card-title>
                              <v-card-text>
                                <v-alert :value=true outline type="error" transition="slide-y-transition">
                                  <v-layout row wrap>
                                    <v-flex xs12>
                                      Deleting your account can <b>not</b> be undone.
                                    </v-flex>
                                  </v-layout>
                                </v-alert>
                                <v-form ref="form" lazy-validation>
                                  <v-btn flat round color="primary" round v-on:click="deleteUser">
                                    Yes, Delete It
                                  </v-btn>
                                  <v-btn flat round @click="deleteDialog = false">Keep Using Vuetiful</v-btn>
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
                <v-flex xs12>
                  <v-card class="gradient-no-switch gradient-secondary elevation-5">
                    <v-card-text>
                      <h3 style="color: white">Invite Friends</h3>
                      <br>
                      <p>
                        Invite your friends people to use Vuetiful!
                      </p>
                      <invite-friend :user="user"></invite-friend>
                    </v-card-text>
                  </v-card>
                </v-flex>
              </v-container>
            </v-flex>
            <v-flex xs12 sm12 md5>
              <v-container>
                <v-flex row>
                  <v-card class="elevation-5">
                    <v-container>
                      <h3>Latest Posts</h3>
                      <br>
                      <post v-if="user.posts.length > 0" v-for="(post, i) in user.posts.slice(0,3)"
                            v-bind:post="post" dense :key="i"></post>
                      <p v-else>No Posts</p>
                      <v-btn flat round v-on:click="currentTab='tab-posts'">View All</v-btn>
                    </v-container>
                  </v-card>
                </v-flex>
              </v-container>

            </v-flex>
          </v-layout>

          <v-dialog v-if="updatedUser" v-model="editDialog" persistent max-width="400">
            <v-card>
              <v-card-title class="headline">Edit Profile</v-card-title>
              <v-card-text>
                <v-form ref="form" lazy-validation>
                  <v-text-field v-model="updatedUser.firstName" label="First Name" required></v-text-field>
                  <v-text-field v-model="updatedUser.lastName" label="Last Name" required></v-text-field>
                  <v-text-field v-model="updatedUser.username" label="Username" required></v-text-field>
                  <v-text-field v-model="updatedUser.email" label="E-Mail" required></v-text-field>
                  <v-btn flat round color="primary" v-on:click.prevent="update">
                    Update
                  </v-btn>
                  <v-btn flat round @click="editDialog = false">Cancel</v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-btn class="gradient gradient-secondary" style="float:right;" dark round v-on:click="$emit('logout')">Logout
          </v-btn>

        </v-tab-item>
        <v-tab-item :id="`tab-posts`">
          <personal-posts v-bind:user="user"></personal-posts>
        </v-tab-item>
      </v-tabs-items>
    </div>
  </div>
</template>

<script>
  import PersonalPosts from './PersonalPosts'
  import apiMixin from '../../../mixins/apiMixin'
  import Post from '../../posts/Post'
  import LoadingDialog from '../../includes/LoadingDialog'
  import {EventBus} from '@/eventBus.js'
  import InviteFriend from '../../general/InviteFriend'

  export default {
    name: 'User',
    components: {
      InviteFriend,
      LoadingDialog, Post, PersonalPosts
    },
    data () {
      return {
        currentTab: 'tab-profile',
        editDialog: false,
        updatedUser: {},
        exportDialog: false,
        deleteDialog: false,
        loadingDialog: false,
        user: {},
      }
    },

    created () {
      EventBus.$on('authenticated', (data) => {
        this.checkAndRedirect(data)
      })
      EventBus.$on('unauthenticated', () => {
        this.checkAndRedirect(null)
      })

      setTimeout(() => {
        this.checkAndRedirect(this.user);
      }, 100);

      if (this.user) {
        this.updatedUser = this.user
        if (this.user.role === 'admin') {
          this.$router.push('/admin/dashboard')
          return
        }
      }
    },

    methods: {
      setUpdateUserFields () {
        this.updatedUser = this.user
      },

      checkAndRedirect (user) {
        this.updatedUser = this.user
        if (!user) {
          this.$emit('flash', {
            type: 'info',
            text: 'Action requires logged in user, please log in.'
          })
          this.$router.push('login')
          return
        }
        if (user.role === 'admin') {
          this.$router.push('/admin/dashboard')
        }
        this.performSearch();
      },

      async performSearch() {
        if (!this.user) {
          return;
        }
        this.GET('dashboard', (data, err) => {
          if (err) {
            if (!this.user) {
              setTimeout(() => {
                this.$router.push('/login');
                this.$emit('flash', err.flash);
              }, 100);
            }
            this.$emit('flash', err.flash);
          } else {
            this.user = data.user;
            if (!this.user.fullyRegistered) {
              this.$router.push('/signup')
            }
          }
        });
      },

      async update () {
        const formData = {
          _csrf: this.csrfToken,
          firstName: this.updatedUser.firstName,
          lastName: this.updatedUser.lastName,
          username: this.updatedUser.username,
          email: this.updatedUser.email,
        }

        this.PUT('users/' + this.user._id, formData, null, (data, err) => {
          if (!err) {
            EventBus.$emit('reloadData')
          }
          this.editDialog = false
        })
      },

      async synchronize () {
        this.loadingDialog = true
      },

      async deleteUser () {
        this.DELETE('users/' + this.user._id, (data, err) => {
          if (!err) {
            this.$router.push('/')
            this.$emit('logout')
          }
          this.deleteDialog = false
        })
      },
    },
    mixins: [apiMixin]
  }
</script>

<style scoped>

</style>
