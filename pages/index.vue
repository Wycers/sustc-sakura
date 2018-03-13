<template lang="pug">
  v-stepper(v-model="step" vertical :class="margin" style="height: 100%") 
    v-stepper-step.stepper-title(step="1" :complete="step > 1") {{ $t('step1.title') }}
    v-stepper-content(step="1")
      div.content {{ $t('step1.description') }}
      v-form(ref="loginform")
        v-text-field(
          :label="$t('step1.username')"
          :rules="usernameRules"
          v-model="username"
          v-on:focus="valid = true"
          requried
        )
        v-text-field(
          :label="$t('step1.password')"
          :rules="passwordRules"
          type="password"
          v-model="password"
          requried
          v-on:focus="valid = true"
        )
        div.content {{ $t('step1.indication') }}
        v-btn(
          color="primary"
          :loading="loading"
          :disabled="loading"
          @click.native="login"
        ) {{ $t('step1.submit') }}  
    v-stepper-step.stepper-title(step="2" :complete="step > 2") {{ $t('step2.title') }}  
    v-stepper-content(step="2" style="height: 100%")
      div.content 目前没有选择= =只能下载当前周的课表
      v-btn(
        color="primary"
        @click.native="download()"
      ) {{ $t('step2.submit')}}
        
</template>

<script>
import axios from 'axios'
axios.create({
  timeout: 5000,
  withCredentials: true // 允许携带cookie
})
export default {
  data () {
    return {
      username: '',
      password: '',
      valid: true,
      usernameRules: [
        (v) => !!v || this.$t('step1.username-required'),
        (v) => /^\d+$/.test(v) || this.$t('step1.username-notnum'),
        (v) => this.valid || this.$t('step1.invalid')
      ],
      passwordRules: [
        (v) => !!v || this.$t('step1.password-required'),
        (v) => this.valid || this.$t('step1.invalid')
      ],
      loading: false,
      step: 1
    }
  },
  computed: {
    margin () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'ma-0'
        case 'sm': return 'ma-1'
        case 'md': return 'ma-2'
        case 'lg': return 'ma-3'
        case 'xl': return 'ma-4'
      }
    }
  },
  methods: {
    download () {
      var $form = document.createElement('form')
      $form.method = 'get'
      $form.action = '/download'
      document.body.appendChild($form)
      $form.submit()
    },
    async login () {
      if (this.$refs.loginform.validate()) {
        this.loading = true
        try {
          const response = await axios.post(`/api/login`, {'username': this.username, 'password': this.password})
          if (response.data.data === 'success') {
            this.step = 2
          } else {
            this.valid = false
          }
        } catch (err) {
          this.valid = false
          this.$refs.loginform.validate()
          this.loading = false
        }
        this.loading = false
      }
    },
    async request () {
      if (this.$refs.requestform.validate()) {
        console.log('valid')
        this.step = 3
      }
    }
  }
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
