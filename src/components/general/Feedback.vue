<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/landing_cover.jpg')" height="400">
        <v-layout column align-center justify-center class="white--text">
          <h1 class="white--text mb-2 display-3 text-xs-center">Contact</h1>
          <div class="white--text subheading mb-3 text-xs-center">Thanks for reaching out to us. Please fill out the
            form below and we will write you back!
          </div>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Quote -->
    <section>
      <v-layout column align-center justify-center>
        <v-card class="elevation-5" style="margin-top: -90px; padding: 30px;"
                width="80%">
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-if="user" :rules="[rules.email]" label="We will reply to this e-mail address"
                            type="text"
                            v-model="email"></v-text-field>
              <v-text-field v-else :rules="[rules.email]" label="E-mail address (optional)" type="text"
                            v-model="email"></v-text-field>
              <br>
              <v-textarea required minlength="10" :rules="[rules.notEmpty]" name="input-7-1" label="Message"
                          v-model="text"></v-textarea>
              <br>
              <v-btn class="gradient gradient-primary" round large dark v-on:click.prevent="submit">Submit</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-layout>
    </section>
    <div class="separator" style="margin-bottom: 80px;"></div>
  </div>
</template>

<script>
  import apiMixin from '../../mixins/apiMixin'

  export default {
    name: 'Contact',
    data: () => ({
      email: '',
      text: '',
      valid: true,
      rules: {
        notEmpty: value => value.length > 10 || 'Please write a bit more.',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (pattern.test(value) || value === '' || !value) || 'Invalid e-mail.'
        }
      }
    }),
    props: {
      user: Object,
    },
    created () {
      if (this.user) {
        this.email = this.user.email || ''
      }
    },
    methods: {
      submit: function () {
        if (!this.$refs.form.validate()) {
          return
        }
        const formData = {
          _csrf: this.csrfToken,
          user: this.user,
          email: (this.email).toLowerCase(),
          body: this.text,
        }

        this.POST('feedback', formData, null, (data, err) => {
          if (!err) {
            this.$emit('flash', {
              type: 'success',
              text: 'Thanks for your feedback!'
            })
            setTimeout(() => {
              this.$router.push('/hub')
            }, 100)
          }
        })
      },
    },
    mixins: [apiMixin]
  }
</script>

<style scoped>

</style>
