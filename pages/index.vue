<template lang="pug">
  v-stepper.ma-3(v-model="step" vertical)
    v-stepper-step.stepper-title(step="1" :complete="step > 0") {{ $t('step1.title') }}
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
          :loading="loading"
          @click.native="login"
          :disabled="loading"
        ) {{ $t('step1.submit') }}  
    v-stepper-step.stepper-title(step="2" :complete="step > 1") {{ $t('step2.title') }}  
    v-stepper-content(step="2")
      <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
        
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
      loading: false,
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
