<template>
  <v-card class="elevation-10 text-xs-center align-center" :to="hoverLink" :hover="hoverLink" :raised="hoverLink">
    <v-card-text>
      <v-icon x-large class="text--lighten-2" style="margin-bottom: -20px;">{{ icon }}</v-icon>
    </v-card-text>
    <v-card-title primary-title class="layout justify-center">
      <div class="headline text-xs-center">{{ title }}</div>
    </v-card-title>
    <v-card-text>
      {{ text }}
    </v-card-text>
    <v-btn flat round :to="'/' + buttonDestination">
      {{ buttonText }}
    </v-btn>
    <div style="height: 10px" :class="'gradient-no-switch gradient-' + color"></div>
  </v-card>
</template>

<script>
  export default {
    name: 'IconActionCard',
    props: {
      icon: String,
      title: String,
      text: String,
      buttonText: String,
      buttonDestination: String,
      color: String,
      hoverLink: String,
    }
  }
</script>

<style scoped>

</style>
