<template lang="pug">
  v-layout(column justify-center align-center fluid)
    v-flex(xs10 sm10 md10)
      v-stepper.ma-5(v-model="step")
        v-stepper-header
          v-stepper-step.stepper-title(step="1" :complete="step > 0") {{ $t('step1.title') }}
          v-divider
          v-stepper-step.stepper-title(step="2" :complete="step > 1") {{ $t('step2.title') }}
          v-divider
          v-stepper-step.stepper-title(step="3") {{ $t('step3.title') }}
        v-stepper-items.ma-4
          v-stepper-content(step="1")
            div.content {{ $t('description') }}
            v-form(ref="loginform")
              v-text-field(
                :label="$t('step1.username')"
                :rules="usernameRules"
                requried
              )
              v-text-field(
                :label="$t('step1.password')"
                :rules="passwordRules"
                type="password"
                requried
              )
              div.content {{ $t('step1.indication') }}
              v-btn(
                color="primary"
                :loading="loading1"
                @click.native="login"
                :disabled="loading1"
              ) {{ $t('step1.submit') }}
                
          v-stepper-content(step="2")
            v-form(ref="requestform")
              
          v-stepper-content(step="3")
            v-card
              div 233
        
</template>

<script>
export default {
  data () {
    return {
      usernameRules: [
        (v) => !!v || this.$t('step1.username-required'),
        (v) => /^\d+$/.test(v) || this.$t('step1.username-notnum')
      ],
      passwordRules: [
        (v) => !!v || this.$t('step1.password-required')
      ],
      loading1: false,
      loading2: false,
      step: 1
    }
  },
  methods: {
    async login () {
      if (this.$refs.loginform.validate()) {
        this.loading1 = true
        this.step = 2
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
