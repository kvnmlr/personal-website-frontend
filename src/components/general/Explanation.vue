<template>
  <div>
    <v-card class="elevation-0" style="padding: 10px;">
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <h2>Step 1: Download and Install</h2>
          <br>
          <h3>Install Node.JS</h3>
          Download and install Node.js and NPM, e.g. from the <a href="https://nodejs.org">Node.js website.</a>
          <br><br>
          <h3>Install MongoDB Community</h3>
          Download and install MongoDB Community Edition, e.g. from the <a href="https://www.mongodb.com/download-center?jmp=nav#community">MongoDB website.</a>
          <br><br>
          <h3>Clone the Repositories</h3>
          <ul>
            <li><a href="">Frontend Code</a></li>
            <li><a href="">Backend Code</a></li>
          </ul>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <h2>Step 2: Set up the Backend</h2>
          <br>
          Start <code>mongo</code> from the MongoDB installation directory<br><br>
          Within the <b>backend</b> directory:
          <ol>
            <li>Open the file .env and fill out relevant fields</li>
            <li>Install dependencies:
              <code>npm install</code>
            </li>
            <li>Run unit tests (optional):
              <code>npm run test</code>
            </li>
            <li>Run server start script:
              <code>npm run development</code> or <code>npm run production</code>
            </li>

          </ol>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <h2>Step 3: Set up the Frontend</h2>
          <br>
          Within the <b>frontend</b> directory:
          <ol>
            <li>Open the file .env and fill out relevant fields</li>
            <li>Install dependencies:
              <code>npm install</code>
            </li>
            <li>Run unit tests (optional):
              <code>npm run test</code>
            </li>
            <li>Run server start script:
              <code>npm run development</code> or <code>npm run production</code>
            </li>
          </ol>
          <br>
          Open your brower's developer console and verify that no errors are logged. Debug logs should indicate successful connection to the backend.
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <h2>Step 4: Log in</h2>
          <br>
          Log into the website using the following credentials:<br><br>
          <h4>Administrator Account</h4>
          <p>Username: Admin<br> E-Mail: admin@vuetiful.com <br> Password: manager</p>
          <h4>User Account</h4>
          <p>Username: User<br> E-Mail: user@vuetiful.com <br> Password: password</p>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm6 md6>
          <br>
          <h2>Step 5: Start Developing</h2>
          <br>
          Check out our <router-link to="documentation">documentation</router-link> and start coding.
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap style="margin:30px;">
        <v-flex xs12 sm12 md12>
          <br>
          <h2>Questions?</h2>
          <br>
          <p>If you have trouble using this website or want to ask a question, just use the
            <router-link to="feedback">Feedback Form</router-link>
            to send us a message and we will write you back.
          </p>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  import UnderConstruction from "../includes/UnderConstruction";
  import InviteFriend from "./InviteFriend";
  import QuickAccess from "./home/QuickAccess";

  export default {
    name: "Explanation",
    components: {QuickAccess, InviteFriend, UnderConstruction},
    props: {
      user: Object,
    }
  }
</script>

<style scoped>

</style>
