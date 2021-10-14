<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-xs-center">
        <!-- <img src="/hotjoon.png" alt="Vuetify.js" style="margin-left:10%;border-radius: 25px;width:80%;height:80%"/> -->
      </div>
      <v-card
        elevation="24"
        max-width="444"
        class="mx-auto"
      >
        <v-system-bar lights-out></v-system-bar>
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300"
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
          >
            <v-sheet
              :color="colors[i]"
              height="100%"
              tile
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <div class="text-h2">
                  {{ slide }} Slide
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale'/>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Nam Young Kim</v-list-item-title>
              <v-list-item-subtitle>1994.04.29</v-list-item-subtitle>
            </v-list-item-content>
            <v-btn class="mx-2" fab dark small color="indigo" href="tel:010-4222-7359">
              <v-icon>{{ 'mdi-instagram' }}</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark small color="indigo" href="https://www.instagram.com/moung_2_namul/">
              <v-icon>{{ 'mdi-phone' }}</v-icon>
            </v-btn>
            <!-- <v-list-item-action>
              <v-switch
                v-model="cycle"
                label="Cycle Slides"
                inset
              ></v-switch>
            </v-list-item-action> -->
          </v-list-item>
        </v-list>
      </v-card>
      <v-card>
        <!-- <v-card-title class="headline">
          LIM HAK JOON
        </v-card-title> -->
        <v-card-text class="py-0">
          <v-timeline
            align-top
            dense
          >
            <v-timeline-item
              color="pink"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>WORK</strong>
                </v-col>
                <v-col>
                  <strong>2020.01 ~ 2021.03</strong>
                  <div class="text-caption">
                    THE CHDㅣBM 사원
                  </div>
                </v-col>
              </v-row>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong></strong>
                </v-col>
                <v-col>
                  <strong>2019.06 ~ 2019.12</strong>
                  <div class="text-caption">
                    드림인사이트ㅣAE 계약직
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal lighten-3"
              small
            >
              <v-row class="pt-1">
                <v-col cols="4">
                  <strong>ACTIVITES</strong>
                </v-col>
                <v-col>
                  <strong>2021.07 ~ 2021.08</strong>
                  <div class="text-caption">
                    스위츠랩 프로젝트 마케팅 인턴
                  </div>
                </v-col>
              </v-row>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong></strong>
                </v-col>
                <v-col>
                  <strong>2018.07 ~ 2018.08</strong>
                  <div class="text-caption">
                    창업 프로젝트 ‘한식의 재발견’
                  </div>
                </v-col>
              </v-row>
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong></strong>
                </v-col>
                <v-col>
                  <strong>2017.01 ~ 2017.12</strong>
                  <div class="text-caption">
                    충남경제진흥원 ‘청년CEO 500’ 프로젝트
                  </div>
                </v-col>
              </v-row>
            </v-timeline-item>

            <v-timeline-item
              color="teal lighten-3"
              small
            >
              <v-row class="pt-1">
                <v-col cols="3">
                  <strong>3-4pm</strong>
                </v-col>
                <v-col>
                  <strong>Design Stand Up</strong>
                  <div class="text-caption mb-2">
                    Hangouts
                  </div>
                  <v-avatar>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=Default&mouthType=Grimace&skinColor=Pale'/>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale'/>
                  </v-avatar>
                  <v-avatar>
                    <img src='https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=BrownDark&facialHairType=Blank&clotheType=Hoodie&clotheColor=Heather&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Vomit&skinColor=Light'/>
                  </v-avatar>
                </v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data () {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      cycle: false,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },

}
</script>
