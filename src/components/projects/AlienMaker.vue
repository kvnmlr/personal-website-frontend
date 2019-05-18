<template>
  <div>
    <section>
      <v-parallax :src="require('@/assets/img/projects/alienmaker/alienmaker.png')" height="500">
        <v-layout column align-center justify-center class="white--text">
          <img src="@/assets/img/logo_standard.png" alt="Vuetify.js" height="100">
          <h1 class="white--text mb-2 display-3 text-xs-center">Kita – Digitale Innovationen</h1>
          <div class="white--text subheading mb-5 text-xs-center">Konzept und Umsetzung der drei Beispiele für den
            Kita-Bereich<br>auf der Didacta Bildungsmesse 2019
          </div>
          <v-btn class="gradient gradient-blue" style="width: 300px;" large round dark to="/guide"
                 @click="expandDrawer">
            Zum Video
          </v-btn>
        </v-layout>
      </v-parallax>
    </section>

    <!-- Quote -->
    <section>
      <v-layout column align-center justify-center>
        <v-card class="elevation-10 gradient-no-switch"
                style="margin-top: -30px; border-bottom: 7px solid #54B4DE;" width="60%">
          <v-card-title primary-title class="layout justify-center">
            <h4 class="headline" style="color: #54B4DE">Die Idee:</h4>
          </v-card-title>
          <v-card-text class="title text-xs-center justify-center">
            Die Beispiele des „Kita-Bereichs“ auf der Didacta 2019 greifen die Zielsetzung, Kompetenzen zu vermitteln
            und persönliche Ressourcen zu stärken auf, indem sie mit jeweils anderen Schwerpunkten, <b>grundlegende
            Kompetenzen fördern und Vorläuferfertigkeiten stärken.</b><br><br>
          </v-card-text>
        </v-card>
      </v-layout>
    </section>
    <div class="separator"></div>

    <!-- At a Glance -->
    <section>
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <h1 class="display-2 text-xs-center black--text">Die Prototypen</h1><br>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="gradient-no-switch gradient-green"
                        style="padding: 20px; min-height: 370px; max-height: 450px;" dark>
                  <v-card-text class="text-xs-center">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Die Rakete</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    <b>Multimediale Reise zu fremden Planeten</b><br><br>
                    Dieses Beispiel adressiert schwerpunktmäßig die Bildungsbereiche Medien, Kommunikation und
                    Künstlerisches Gestalten.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="gradient-no-switch gradient-blue"
                        style="padding: 20px; min-height: 370px; max-height: 450px;" dark>
                  <v-card-text class="text-xs-center">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Der Cockpittisch</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    <b>Digitale Weltraum-Monster erschaffen</b><br><br>
                    Dieses Beispiel adressiert schwerpunktmäßig die Bildungsbereiche Medien, Kommunikation,
                    Künstlerisches Gestalten und mathematische Grunderfahrungen.
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="gradient-no-switch gradient-orange"
                        style="padding: 20px; min-height: 370px; max-height: 450px;" dark>
                  <v-card-text class="text-xs-center">
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Die interaktive Kletterwand</div>
                  </v-card-title>
                  <v-card-text class="text-xs-center subheading">
                    <b>Interaktiv durch das Weltall klettern</b><br><br>
                    Dieses Beispiel adressiert schwerpunktmäßig die Bildungsbereiche Medien, Kommunikation, Rhythmisch –
                    musikalische Erziehung, Körper und Bewegung.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>

    <!-- Mission -->
    <section>
      <v-parallax :src="require('@/assets/img/projects/alienmaker/spaceblurred.png')" height="750">
        <v-layout column align-center justify-center class="white--text">
          <br><br>
          <h1 class="display-2 white--text">Reaktionen</h1>
          <br><br>
          <div class="white--text display-1 mb-5 text-xs-center">
            <div class="headline" style="color: white">"Von digitalen Technologien profitiert bereits der
              Elementarbereich."
            </div>
            <div class="subheading mb-5 text-xs-center">Prof. Dr. Julia Knopf
            </div>
          </div>
          <div class="white--text display-1 mb-5 text-xs-center">
            <div class="headline" style="color: white">"Das ist nicht zu viel und nicht zu wenig aus der Digitalen Welt
              ❤😍"
            </div>
            <div class="subheading white--text headline mb-5 text-xs-center">
              Instagramnutzer @digitalslowpoke
            </div>
          </div>
          <div class="white--text display-1 mb-5 text-xs-center">
            <div class="headline" style="color: white">"Mama darf ich noch hier bleiben und weiterspielen?"
            </div>
            <div class="subheading white--text headline mb-5 text-xs-center">
              Begeisterte Kinder beim Spielen am Cockpittisch
            </div>
          </div>
        </v-layout>
        ️
      </v-parallax>
    </section>
    <div class="separator"></div>

    <!-- Konzept -->
    <section
      :style="{ width: '100%', /*backgroundSize: '100%', backgroundImage: 'url(' + require('@/assets/img/buildings.jpg') + ')'*/}">
      <v-container fill-height fill-width>
        <v-layout column wrap class="my-5">
          <v-layout row wrap class="my-2">
            <v-flex md6>
              <br>
              <h1 class="display-2 text-xs-center black--text">Konzept</h1><br>
              <p class="text-xs-center">
                Alle Beispiele des Kita-Bereichs <b>vereinen analogdigitale
                Bildungsumgebungen auf kindgerechte Weise</b>. Die Kinder erleben digitale Medien nicht gegenstandsgebunden,
                vielmehr zeigen die Beispiel, wie sich digitale Medien und motorische, gestalterische, sprachliche oder
                mathematische Grunderfahrungen kindgerecht, ganzheitlich und produktiv miteinander verzahnen
                lassen.<br><br>
                Bei Kindergartenkindern sollten informelle, erkundende und spielerische Lernformen vorherrschen, dem
                entsprechend ist das Bildungsgeschehen in Kitas von Bewegungs- und Sinneserfahrungen geprägt. Für das
                Kind
                wechseln sich moderierte Lernarrangements und freie Spielphasen oder andere entwicklungsangemessene
                Tätigkeiten ab.<br><br><b>Dem entsprechend sind die Prototypen des Kita-Standes multimodal und multimedial
                gestaltet,
                sie laden zum Spielen ein und fördern gleichzeitig zentrale Kompetenzen.</b><br>
              </p>
              <div class="separator"></div>
              <h1 class="display-1 text-xs-center" style="color: #54B4DE">Die Rakete</h1><br>
              <p class="text-xs-center">Dieses Beispiel adressiert schwerpunktmäßig die Bildungsbereiche Medien,
                Kommunikation und Künstlerisches Gestalten. Indem die Kinder die Rakete betreten, sich ggf. vorher noch
                als Astronaut verkleiden, begeben sie sich spielerisch in eine andere Welt. Das Setting der Rakete
                unterstützt somit den Spaß an Rollenspielen und deren Bedeutung für die soziale und personale Bildung.
                Zudem greift sie die natürliche Neugier von Kindern am Weltall, Planeten, Flugobjekten usw. thematisch
                auf und nimmt diese ernst, indem sie einen eigens für das Astronauten-Spiel geschaffenen Raum bietet.
                Bei der Rakete stehen die Förderung des Selbstkonzepts, der Wahrnehmung und Kreativität sowie das
                kontextangemessene Sprechen und Zuhören im Fokus der Aufgaben.</p>
            </v-flex>
            <v-flex xs0 md1>
            </v-flex>
            <v-flex sm0 md5>
              <img class="elevation-10" src="@/assets/img/projects/alienmaker/rakete.png" alt="Vuetify.js" width="100%">
            </v-flex>
          </v-layout>
          <div class="separator"></div>
          <v-layout row wrap class="my-2">
            <v-flex v-if="$vuetify.breakpoint.lgAndUp" sm0 md5>
              <img class="elevation-10" src="@/assets/img/projects/alienmaker/cockpit.png" alt="Vuetify.js"
                   width="100%">
            </v-flex>
            <v-flex xs0 md1></v-flex>
            <v-flex md6>
              <h1 class="display-1 text-xs-center" style="color:#54B4DE;">Der Cockpittisch</h1><br>
              <p class="text-xs-center">Dieses Beispiel adressiert schwerpunktmäßig die Bildungsbereiche Medien,
                Kommunikation, Bauen, Künstlerisches Gestalten, mathematische Grunderfahrungen. Indem die Kinder
                Körperteile von Phantasiemonstern nach Angaben zusammenlegen, bauen sie „analog“ neue Monster zusammen,
                die schließlich durch die digitale Erweiterung des Settings zum Leben erwachen und damit dem Kind eine
                unmittelbare Rückmeldung und Bestätigung für sein Handeln ausdrücken. Anschließend können die Kinder ihr
                individuelles Monster ausdrucken und als Ausmalvorlage nutzen. Am Cockpittisch werden für den Übergang
                von Elementar- zu Primarbereich grundlegende Kompetenzen gefördert, wie z.B. Förderung von Wahrnehmung,
                Denkfähigkeit, Gedächtnis, Neugierde, Problemlösung, Greifen und Legen..</p><br>
              <v-flex v-if="!$vuetify.breakpoint.lgAndUp" sm0 md5>
                <img class="elevation-10" src="@/assets/img/projects/alienmaker/cockpit.png" alt="Vuetify.js"
                     width="100%">
              </v-flex>
              <div class="separator"></div>
              <h1 class="display-1 text-xs-center" style="color: #54B4DE">Die interaktive Kletterwand</h1><br>
              <p class="text-xs-center">Dieses Beispiel adressiert schwerpunktmäßig die Bildungsbereiche Medien,
                Kommunikation, Rhythmisch – musikalische Erziehung, Körper und Bewegung. Neben Suchaufträgen, die die
                Kinder z.B. aus Wimmelbüchern kennen und das genaue Zuhören und gezielte Suchen fördern, regt die
                Kletterwand zu Bewegungsphasen an, deren Tempi und Sozialformen variieren (Kinder klettern alleine,
                tanzen gemeinsam usw.). Außerdem lassen sich sprachliche Aufgaben integrieren („Lilos lieben lila
                Limo“), die thematisch eingebettet zum Experimentieren mit Sprache anregen, Reime einüben und die
                phonologische Bewusstheit anbahnen.</p>
            </v-flex>
          </v-layout>

        </v-layout>
      </v-container>
    </section>
    <div class="separator"></div>

    <!-- Contact -->
    <section>
      <v-parallax :src="require('@/assets/img/projects/alienmaker/spaceblurred.png')" height="500">
        <v-layout column align-center justify-center>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5" align-center>
              <v-flex xs0 sm3></v-flex>
              <v-flex xs12 sm6 class="my-3">
                <h1 class="mb-3 display-1 text-xs-center white--text"><br>Fragen zu diesem Projekt?</h1>
                <div class="subheading mb-3 text-xs-center white--text">
                  Bei Fragen zu diesem Projekt benutzen Sie bitte das Kontaktformular, indem sie auf den untenstehenden
                  Button klicken.
                  Alternativ können Sie auch mit der Leitung des verantwortlichen Forschungsinstitus Kontakt aufnehmen
                  (https://fobid.org/kontakt)
                </div>
                <v-btn class="gradient gradient-blue" style="width: 100%; margin-bottom: -20px" large round
                       to="/contact" dark @click="expandDrawer">
                  Erde an Kevin, bitte Kontakt aufnehmen
                </v-btn>
              </v-flex>
              <v-flex xs0 sm3></v-flex>
            </v-layout>
          </v-container>
        </v-layout>
      </v-parallax>
    </section>
  </div>
</template>

<script>
  import Welcome from '../general/Welcome'
  import apiMixin from '../../mixins/apiMixin'
  import Explanation from '../general/Explanation'
  import {EventBus} from '@/eventBus.js'
  import UnderConstruction from '../includes/UnderConstruction'

  export default {
    name: 'AlienMaker',
    components: {UnderConstruction, Explanation, Welcome,},
    created () {
    },
    methods: {
      expandDrawer () {
        EventBus.$emit('expandDrawer')
      }
    },
    mixins: [apiMixin]
  }
</script>
