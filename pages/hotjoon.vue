<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-window v-model="step">
      <v-window-item :value="1">
        <v-carousel
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          hide-delimiters
          delimiter-icon="mdi-minus"
          height="400"
          style="border-top-left-radius:20px; border-top-right-radius:20px;"
        >
          <div 
            v-for="(item, i) in items"
            :key="i">
            <v-sheet
              :color="colors[i]"
              height="100%"
              tile
            >
              <v-carousel-item
                :src="item.src"
              >
              </v-carousel-item>
            </v-sheet>
          </div>
        </v-carousel>
        <v-card  style="border-bottom-left-radius:20px; border-bottom-right-radius:20px;" class="pt-0">
          <v-card-title class="headline py-0 my-0" style="position: inherit; left: 50%;top: 50%;z-index: 1;transform: translate(-50%, -50%)">
          <v-spacer></v-spacer>
            <v-btn class="mx-2" fab dark medium color="pink darken-2" href="https://www.instagram.com/hotjoooon/">
              <v-icon>{{ 'mdi-instagram' }}</v-icon>
            </v-btn>
            <v-btn class="mx-2" fab dark medium color="pink darken-2" href="tel:010-2706-5592">
              <v-icon>{{ 'mdi-phone' }}</v-icon>
            </v-btn>
          <v-spacer></v-spacer>
          </v-card-title>
          
          <v-card-title class="mt-0 pt-0">
            <v-spacer></v-spacer>
              LIM HAK JOON
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text class="py-0">
            <p style="text-align: center;">BIRTH: 1994.04.29 <br/>
            EMAIL: huhuhaha1233@naver.com</p>
            <v-timeline
              align-top
              dense
              max-width="444"
            >
              <v-timeline-item
                color="pink"
                small
              >
                <v-row class="pt-1">
                  <v-col cols="4">
                    <strong>WORK</strong>
                  </v-col>
                  <v-col>
                    <strong></strong>
                    <div class="text-caption">
                    </div>
                  </v-col>
                </v-row>
                <v-row class="pt-1">
                  <v-col cols="2">
                    <strong></strong>
                  </v-col>
                  <v-col>
                    <strong>2020.01 ~ 2021.03</strong>
                    <div class="text-caption">
                      THE CHDㅣBM 사원
                    </div>
                  </v-col>
                </v-row>
                <v-row class="pt-1">
                  <v-col cols="2">
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
                  <v-col cols="5" sm="8">
                    <strong>ACTIVITES</strong>
                  </v-col>
                  <v-col>
                    <strong></strong>
                    <div class="text-caption">
                    </div>
                  </v-col>
                </v-row>
                <v-row class="pt-1">
                  <v-col cols="2">
                    <strong></strong>
                  </v-col>
                  <v-col>
                    <strong>2021.07 ~ 2021.08</strong>
                    <div class="text-caption">
                      스위츠랩 프로젝트 마케팅 인턴
                    </div>
                  </v-col>
                </v-row>
                <v-row class="pt-1">
                  <v-col cols="2">
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
                  <v-col cols="2">
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
                  <v-col cols="2">
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
          <!-- <img src="/hotjoonSkill.png" alt="Vuetify.js" style="border-radius: 10px;width:100%;"/> -->
          </v-card-text>
        </v-card>
      </v-window-item>
      <v-window-item :value="2">
          <v-card
            class="mx-auto"
            max-width="344"
            outlined
          >
            <v-list-item>
              <v-list-item-content class="mt-1 py-0">
                <v-list-item-title class="text-h5 pt-1">
                  <v-text-field
                    label="방명록"
                    color="gray"
                    placeholder="남영이를 위해 한마디를 적어줘!"
                    v-model="content"
                    rows="3"
                    row-height="25"
                  ></v-text-field>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions class="pt-0">
            <v-spacer></v-spacer>
              <v-btn
                outlined
                rounded
                text
                @click="regist"
              >
                등록
              </v-btn>
            </v-card-actions>
          </v-card>

          <v-system-bar lights-out></v-system-bar>

          <v-card
            class="mx-auto my-3"
            max-width="344"
            outlined
            v-for="(item, i) in this.guestBook"
            :key=i
          >
            <v-list-item>
              <v-list-item-content class="my-0 py-0">
                <v-list-item-title class="text-h5 pt-1">
                  <v-text-field
                    :label="item.time"
                    color="gray"
                    v-model="item.content"
                    rows="3"
                    row-height="25"
                    readonly
                  ></v-text-field>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
      </v-window-item>
    </v-window>

      <v-divider></v-divider>

      <v-card-actions>
        <v-btn
          :disabled="step === 1"
          text
          @click="step--"
        >
          Back
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="step === 2"
          color="indigo"
          depressed
          @click="step++"
        >
          Next
        </v-btn>
      </v-card-actions>
      
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        '#1E1E1E',
        '#1E1E1E',
        '#1E1E1E',
        '#1E1E1E',
        // 'grey darken-4',
        // 'orange darken-1',
        // 'purple darken-4',
        // 'green',
      ],
      cycle: false,
      slides: [

      ],
      items: [
        {
          src: '/hotjoonProfile1.png',
        },
        {
          src: '/hotjoonProfile2.png',
        },
        {
          src: '/hotjoonProfile3.png',
        },
        {
          src: '/hotjoonProfile4.png',
        },
      ],
      v0: true,
      reset: false,
      counted: 0,
      step: 1,
      content: '',
      registForm: {
        state: 1,
        content: '',
        time: '',
        ip: '',
      },
      guestBook: [],
    }
  },
  mounted() {
    this.guestBook = this.$store.state.guestBook.datas
  },
  methods: {
    async regist() {
      this.registForm.content = this.content
      this.registForm.time = this.$moment().format();
      await this.$store.dispatch('GUESTBOOK', this.registForm)
      this.reset = true
    }
  },
  watch: {
    reset() {
      if(this.reset == true) {
        this.reset = false
        location.reload();
      }
    }
  },
  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return ''
        case 2: return '방명록'
        default: return ''
      }
    },
  },

}
</script>
<style>
 .fb-btn.v-btn--outlined {
    border: thin solid #CCCCCC;
  }
</style>