<template lang="pug">
  v-app
    v-card(flat)
      v-toolbar(color="primary" flat class="elevation-3")
      v-layout(row pb-2 class="grey lighten-4")
        v-flex(xs8 offset-xs2)
          v-card(class="card--flex-toolbar elevation-5")
            v-toolbar(card prominent)
              v-toolbar-title(class="headline") {{ title }}
              v-spacer
              v-btn(icon)
                v-icon language
            v-container
              nuxt
    v-content(class="grey lighten-4")
      
    v-footer(height="auto" class="grey darken-3 elevation-3")
      v-layout(row wrap justify-center)
        v-btn(
          color="white"
          flat
          v-for="(link, i) in links"
          :key="link"
          :to="tos[i]"
        ) {{ link }}
        </v-btn>
        v-flex(xs12 py-3 text-xs-center white--text)
          span &copy; 2018 {{ $t('footer.copyright') }}
</template>

<script>
  export default {
    data () {
      return {
        title: 'SUSTech Sakura!',
        links: ['Home', 'Service', 'About Us', 'Contact Us'],
        tos: ['/', '/service', '/about', '/contact']
      }
    }
  }
</script>

<style>
.card--flex-toolbar {
  margin-top: -32px;
}
.headline {
  font-family: 'Open Sans'
}
.stepper-title {
  font-family: 'Open Sans';
  font-size: 1.5em!important;
  font-weight: 200;
}
.content {
  font-size: 1.35em;
  font-weight: 200;
}
</style>

