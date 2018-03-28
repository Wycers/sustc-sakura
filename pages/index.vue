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
      div.content {{ weekHint }}
      v-form(ref="requestform")
        v-select(
          :items="weeks"
          v-model="week"
          :label="$t('step2.week')"
          item-text="text"
          item-value="value"
          single-line)
        v-btn(
          color="primary"
          :loading="loading"
          :disabled="loading"
          @click.native="request"
        ) {{ $t('step2.submit') }}
        v-btn(
          color="primary"
          @click.native="back"
        ) {{ $t('step2.back')}}  
      
        
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import download from 'downloadjs'
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
      step: 1,
      week: 1
    }
  },
  mounted () {
    this.week = moment().week() - 8
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
    },
    weekHint () {
      return `${this.$t('step2.week0')} ${this.$t(`ordinal.${moment().week() - 8}`)} ${this.$t('step2.week1')}`
    },
    weeks () {
      var res = []
      for (var i = 1; i <= 16; ++i) {
        res.push({
          text: `${this.$t('step2.week2')} ${this.$t(`ordinal.${i}`)} ${this.$t('step2.week3')}`,
          value: i
        })
      }
      return res
    }
  },
  methods: {
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
        let res = await axios({
          method: 'post',
          url: '/api/download',
          data: {
            'week': this.week
          },
          responseType: 'blob'
        })

        let resBlob = res.data
        let resData = null
        try {
          let resText = await new Promise((resolve, reject) => {
            // 通过 FileReader 接受并解析
            let reader = new FileReader()
            reader.addEventListener('abort', reject)
            reader.addEventListener('error', reject)
            reader.addEventListener('loadend', () => {
              resolve(reader.result)
            })
            // 文件
            reader.readAsText(resBlob)
          })
          // JSON
          resData = JSON.parse(resText)
        } catch (err) {
          console.log(err)
        }
        if (resData) {
          if (resData.error) {
            console.log(resData.error)
          } else {
            //
          }
        } else {
          download(resBlob, res.headers['x-suggested-filename'], 'text/plain')
        }
      }
    },
    back () {
      this.username = ''
      this.password = ''
      this.step = 1
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
