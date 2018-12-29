<template>
  <v-container fluid style="min-height:500px;">
    <div>
      <h2>
        <v-icon>gesture
        </v-icon>
        &nbsp;Personal Posts
      </h2>
      <v-layout row wrap>
        <v-flex xs12 sm7 style="padding-right:20px;">
          <br>
          <div v-if="user.posts.length" >
            <post v-for="(post, i) in user.posts" v-bind:post="post" :key="i"></post>
          </div>
          <p v-else>You do not have any posts</p>
          <br>
          <create-new-post-prompt></create-new-post-prompt>
        </v-flex>
        <v-flex xs12 sm5 style="padding-left:20px;">
          <h2><v-icon>star</v-icon>&nbsp;Starred Posts</h2>
          <br>
          <p>You have not starred any posts</p>
          <post v-for="(post, i) in []" v-bind:post="post" :key="i"></post>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
  import Post from "../../posts/Post";
  import CreateNewPostPrompt from "../../posts/CreateNewPostPrompt";
  import UploadFile from "../../posts/UploadFile";

  export default {
    name: "PersonalPosts",
    components: {
      UploadFile,
      CreateNewPostPrompt,
      Post
    },
    props: {
      user: {
        type: Object,
        required: true,
      }
    },
  }
</script>

<style scoped>

</style>
