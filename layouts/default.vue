<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action v-if="i == 0">
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-action v-else>
            <v-avatar size="38">
              <img
                :src="item.url"
              >
            </v-avatar>
          </v-list-tile-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- <v-app-bar
      :clipped-left="clipped"
      dense
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <!-- <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed"
      >
        <v-icon>mdi-minus</v-icon>
      </v-btn> -->
      <!-- <v-spacer />
      <v-toolbar-title v-text="title"
      class="pr-3"/>
      <v-spacer /> -->
      <!-- <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn> -->
    <!-- </v-app-bar> -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        { 
          icon: 'mdi-chart-bubble',
          title: 'hotjoon',
          to: '/hotjoon',
          url: '/hotjoonIcon.png'
        },
        { 
          icon: 'mdi-chart-bubble',
          title: 'namyoung',
          to: '/namyoung',
          url: '/namyoungIcon.png'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'namyoung2',
          to: '/namyoung2'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: '작 두 개 미'
    }
  }
}
</script>
