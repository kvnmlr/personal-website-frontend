<template>
  <v-card class="gradient-no-switch gradient-blue">
    <v-card-title primary class="title">
      <v-icon>show_chart</v-icon>&nbsp;Create New Post
    </v-card-title>
    <v-card-text>
      <p>Write your own blog post.</p>
      <v-btn large round dark class="gradient gradient-orange" style="width: 95%; height: 100px; vertical-align: bottom" to="creator">
        <v-icon>gesture</v-icon>&nbsp; Content Creator
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
    export default {
        name: "CreateNewPostPrompt"
    }
</script>

<style scoped>

</style>
