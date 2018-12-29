<template>
  <div>
    <h1>Content Creator</h1>
    <div class="separator"></div>
    <p>Write your post text below!</p>
    <br>
    <v-card class="elevation-5">
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field required minlength="10" :rules="[rules.notEmpty]" label="Title"
                      v-model="title"></v-text-field>
          <v-textarea required minlength="10" :rules="[rules.length]" name="input-7-1" label="Message"
                      v-model="body"></v-textarea>
          <br>
          <v-btn class="gradient gradient-orange" round large dark v-on:click.prevent="submit">Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

  </div>
</template>

<script>
  import apiMixin from '../../mixins/apiMixin'

  export default {
    name: 'Creator',
    data: () => ({
      body: '',
      title: '',
      valid: true,
      rules: {
        notEmpty: value => value.length > 0 || 'Cannot be empty.',
        length: value => value.length > 10 || 'Please write a bit more.',
      }
    }),
    props: {
      user: Object,
    },
    methods: {
      submit: function () {
        if (!this.$refs.form.validate()) {
          return
        }
        const formData = {
          _csrf: this.csrfToken,
          user: this.user,
          body: this.body,
          title: this.title,
          tags: '',
        }

        this.POST('posts', formData, null, (data, err) => {
          if (!err) {
            this.$emit('flash', {
              type: 'success',
              text: 'Successfully posted!'
            })
            setTimeout(() => {
              this.$router.push('/posts/'+data._id);
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
