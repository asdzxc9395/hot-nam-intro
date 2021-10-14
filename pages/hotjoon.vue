<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-xs-center">
        <!-- <img src="/hotjoon.png" alt="Vuetify.js" style="margin-left:10%;border-radius: 25px;width:80%;height:80%"/> -->
      </div>
      <v-card>
        <v-card-title class="headline">
          LIM HAK JOON
        </v-card-title>
        <v-card-text class="py-0">
          <p>BIRTH: 1994.04.29 <br/>
          PHONE:<a href="tel:010-2706-5592">010 2706 5592</a><br/>
          학주니 인스타
          <v-btn class="mx-3" dark x-small href="https://www.instagram.com/eksnzbri/">Insta</v-btn><br/>
          EMAIL: huhuhaha1233@naver.com</p>
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

            <!-- <v-timeline-item
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
            </v-timeline-item> -->
          </v-timeline>
        </v-card-text>
      </v-card>
      <div style="height:4px"></div>
      <v-card>
        <v-card-text class="py-1">
        <img src="/hotjoonSkill.png" alt="Vuetify.js" style="border-radius: 25px;width:100%;height:100%"/>
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
  }
}
</script>
