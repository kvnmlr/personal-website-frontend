<template>
  <v-card
    :class="'elevation-10 gradient-no-switch' +  primary && primary === true ? 'gradient-slight-primary' : 'gradient-slight-accent'"
    style="margin-top: -90px;"
    width="60%">
    <v-card-title style="padding: 30px;" primary-title class="layout justify-center">
      <div class="title">{{ title }}</div>
    </v-card-title>
    <v-card-text style="padding: 30px;" class="layout justify-center">
      {{ text }}
    </v-card-text>
    <div style="height: 5px" :class="'gradient-no-switch gradient-' + (primary ? 'primary' : 'accent')"></div>
  </v-card>
</template>

<script>
  export default {
    name: 'CoverCard',
    props: {
      title: String,
      text: String,
      primary: Boolean,
      color: String,
    }
  }
</script>

<style scoped>

</style>
