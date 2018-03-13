<template lang="pug">
v-container
  v-layout(row wrap)
    v-flex(text-xs-center xs12 sm4 md4 lg4 xl4)
      v-avatar(
        :size="size"
        class="grey lighten-4"
      )
        img(src="~static/avatar.jpg" alt="avatar")
    v-flex(xs12 sm8 md8 lg8 xl8)
      div.ma-3
        div.my-3
          span.title Wycer
        div.my-3
          span.contact 11711918@mail.sustc.edu.cn
        div.my-3
          span.body-1 全幼儿园最可爱！
</template>
<script>
export default {
  computed: {
    size () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 120
        case 'sm': return 120
        case 'md': return 150
        case 'lg': return 180
        case 'xl': return 180
      }
    }
  }
}
</script>


<style>
.title {
  font-size: 28px!important;
  font-weight: 200;
}
.contact {
  font-weight: 200;
  font-size: 20px
}
.body-1 {
  font-size: 22px!important;
  font-weight: 200!important;
  font-family: "Roboto";
}
.center {
  text-align: center
}
</style>