<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card
        elevation="24"
        max-width="444"
        class="mx-auto"
        color="black"
      >
        <!-- <v-system-bar lights-out></v-system-bar> -->
        <!-- <v-card-title class="text-h6 font-weight-regular justify-space-between">
          <span>{{ '' }}</span>
          <v-avatar
            color="primary lighten-2"
            class="subheading white--text"
            size="24"
            v-text="step"
          ></v-avatar>
        </v-card-title> -->
      
      
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
              style="border-radius: 20px;"
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

            <v-list>
              <v-list-item>
                <!-- <v-list-item-avatar>
                  <img src='https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Blank&hairColor=Blonde&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=ScreamOpen&skinColor=Pale'/>
                </v-list-item-avatar> -->
                <v-list-item-content>
                  <v-list-item-title>Nam Young Kim</v-list-item-title>
                  <v-list-item-subtitle>1994.04.29</v-list-item-subtitle>
                  <v-list-item-subtitle>방문자수 : 0</v-list-item-subtitle>
                </v-list-item-content>
                <v-btn class="mx-2" fab dark small color="indigo" href="https://www.instagram.com/moung_2_namul/">
                  <v-icon>{{ 'mdi-instagram' }}</v-icon>
                </v-btn>
                <v-btn class="mx-2" fab dark small color="indigo" href="tel:010-4222-7359">
                  <v-icon>{{ 'mdi-phone' }}</v-icon>
                </v-btn>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>
                    골동품쟁이 == ME
                  </v-list-item-title>
                    Great things are done by a series of small things brought together
                  <v-list-item-subtitle>Vincent van Gogh (1853-1890)</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
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
                    @click="regist()"
                  >
                    등록
                  </v-btn>
                  <v-btn
                    outlined
                    rounded
                    text
                    @click="getList()"
                  >
                    get
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
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "firebase/firestore";
import { setDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

export default {
  data () {
    return {
      colors: [
        'red lighten-2',
        'orange darken-1',
        'yellow darken-4',
        'secondary',
      ],
      cycle: false,
      slides: [

      ],
      items: [
        {
          // src: '/namyoungProfile2.png',
        },
        {
          // src: '/namyoungProfile1.png',
        },
      ],
      reset: false,
      counted: 0,
      step: 1,
      content: '',
      registForm: {
        state: 2,
        content: '',
        time: '',
        ip: '',
      },
      guestBook: [],
      db: null,
    }
  },
  mounted() {
    const firebaseApp = initializeApp({
      apiKey: 'AIzaSyD0cTVoH2slzJ-UzfKUTb4QtfNv_pfd5Qo',
      authDomain: 'https://hot-nam-intro-default-rtdb.firebaseio.com',
      projectId: 'hot-nam-intro'
    });
    this.db = getFirestore();

    // this.guestBook = this.$store.state.guestBook.datas
  },
  methods: {
    async regist() {
      this.registForm.content = this.content
      this.registForm.time = this.$moment().format();
      
      try {
        // const docRef = await addDoc(collection(this.db, "users", "namyoung"), {
        //   guestBook: this.guestBook
        // });

        const docRef = await setDoc(doc(this.db, "users", "namyoung"), {
          guestBook: this.guestBook,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async getList() {
      const docRef = doc(this.db, "users", "KJRr8vbXhlDxEGMSJ6SU");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }
  },
  watch: {
    reset() {
      if(this.reset == true) {
        this.reset = false
        // location.reload();
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
