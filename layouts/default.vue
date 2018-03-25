<template lang="pug">
  v-app
    v-card.hidden-sm-and-down(flat)
      v-toolbar(color="primary" flat class="elevation-3")
      v-layout(row pb-2 class="grey lighten-4")
        v-flex(xs8 offset-xs2)
          v-card(class="card--flex-toolbar elevation-5")
            v-toolbar(card prominent)
              v-toolbar-title(class="headline") {{ title }}
              v-spacer
              v-menu(offset-y)
                v-btn(slot="activator" icon)
                  v-icon language
                v-list
                  v-list-tile(v-for="lang in locales" :key="lang" @click="setlocale(lang)")
                    v-list-tile-title {{ lang }}
            v-container
              nuxt
    v-content(class="grey lighten-4")
      v-card(class="hidden-md-and-up" flat)
        v-toolbar(card prominent)
          v-toolbar-title(class="headline") {{ title }}
          v-spacer
          v-menu(offset-y)
            v-btn(slot="activator" icon)
              v-icon language
            v-list
              v-list-tile(v-for="lang in locales" :key="lang" @click="setlocale(lang)")
                v-list-tile-title {{ lang }}
        nuxt
      
    v-footer(height="auto" class="grey darken-3 elevation-3")
      v-layout(row wrap justify-center)
        v-btn(
          color="white"
          flat
          v-for="(link, i) in links"
          :key="link"
          :to="tos[i]"
        ) {{ $t(link) }}
        </v-btn>
        v-flex(xs12 py-2 text-xs-center white--text)
          span.mx-3
            a(href="http://www.miitbeian.gov.cn/") 粤ICP备18027145号
          span.mx-3 &copy; 2018 {{ $t('footer.copyright') }}
</template>
<style>
a:link {color: white; text-decoration: none} /* 未访问的链接 */
a:visited {color: white; text-decoration: none}	/* 已访问的链接 */
a:hover {color: white; text-decoration: underline}	/* 鼠标移动到链接上 */
a:active {color: white}	/* 选定的链接，即鼠标按下去的时候不松开显示的状态 */
</style>

<script>
  import { mapState } from 'vuex'
  export default {
    methods: {
      setlocale (locale) {
        this.$store.commit('SET_LANG', locale)
        this.$i18n.locale = this.locale
      }
    },
    computed: {
      ...mapState(['locale', 'locales'])
    },
    data () {
      return {
        title: 'SUSTech Sakura!',
        links: ['Home', 'Service', 'About'],
        tos: ['/', '/service', '/about']
      }
    }
  }
</script>

<style>
.card--flex-toolbar {
  margin-top: -32px;
}
.stepper-title {
  font-size: 1.25rem!important;
  font-weight: 250!important;
}
.content {
  font-size: 1.30rem;
  font-weight: 200;
}
</style>

