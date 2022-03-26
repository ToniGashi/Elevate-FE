<template>
  <q-form @submit="onSubmit"
          class="q-gutter-y-sm q-mx-auto">

    <q-input v-model="v$.form.fullName.$model"
             outlined
             color="secondary"
             bg-color="white"
             input-style="font-size:17px"
             :input-class="[
             'form-input',
             'text-weight-bolder'
             ]"
             type="text"
             :placeholder="`${$t('label.contactForm.names')} *`" />
    <div v-if="v$.form.fullName.$error"
         class="error-message">
      {{$t('error.enterNames')}}
    </div>

    <q-input v-model="v$.form.email.$model"
             outlined
             color="secondary"
             bg-color="white"
             input-style="font-size:17px"
             :input-class="[
             'form-input',
             'text-weight-bolder'
             ]"
             type="email"
             :placeholder="`${$t('label.contactForm.email')} *`"/>
    <div v-if="v$.form.email.$error"
         class="error-message">
      {{$t('error.invalidEmail')}}
    </div>

    <q-input v-model="v$.form.message.$model"
             outlined
             color="secondary"
             bg-color="white"
             input-style="font-size:17px"
             :input-class="[
             'form-input',
             'text-weight-bolder'
             ]"
             type="textarea"
             :placeholder="`${$t('label.contactForm.message')} *`"/>
    <div v-if="v$.form.message.$error"
         class="error-message">
      {{$t('error.enterMessage')}}
    </div>

    <div class="text-center q-mt-md">

      <standard-button :disable="(v$.form.fullName.$invalid ||
                       v$.form.email.$invalid ||
                       v$.form.message.$invalid) ||
                       (!form.fullName || !form.email || !form.message)"
                       size="lg"
                       padding="sm 40px"
                       type="submit"
                       unelevated
                       color="secondary"
                       label-class="text-weight-bold"
                       :label="$t('label.contactForm.buttonLabel')"/>
    </div>
  </q-form>
</template>

<script>

import StandardButton from 'components/buttons/StandardButton.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

export default {
  name: 'ContactForm',
  components: { StandardButton },
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        fullName: '',
        email: '',
        message: ''
      },
      notificationMessage: '',
      error: null
    }
  },
  created () {
    this.$watch(() => this.$i18n.locale,
      () => {
        if (this.error) {
          this.notificationMessage =
          this.$t('label.notification.failureMessage')
        } else {
          this.notificationMessage =
          this.$t('label.notification.successMessage')
        }
        this.$store.dispatch('notifications/setMessage',
          this.notificationMessage)
      })
  },
  methods: {
    resetForm () {
      this.v$.$reset()
      this.form.fullName = ''
      this.form.email = ''
      this.form.message = ''
    },
    async displayNotification (message, type) {
      this.notificationMessage = message
      await this.$store.dispatch('notifications/setMessage',
        this.notificationMessage)
      await this.$store.dispatch('notifications/setType',
        type)
      await this.$store.dispatch('notifications/toggleDisplay')
    },
    async onSubmit () {
      this.$showLoader()
      const messageData = {
        fullName: this.form.fullName,
        email: this.form.email,
        message: this.form.message
      }
      try {
        const sendResponse = await this.$axios.post(
          '/api/emails/contact', messageData)
        if (sendResponse.status === 200 || sendResponse.status === 201) {
          this.error = null
          this.resetForm()
          await this.displayNotification(
            this.$t('label.notification.successMessage'),
            'success'
          )
        }
      } catch (error) {
        this.error = error
        await this.displayNotification(
          this.$t('label.notification.failureMessage'),
          'failure'
        )
      } finally {
        this.$hideLoader()
      }
    }
  },
  validations () {
    return {
      form: {
        fullName: {
          required,
          $lazy: true
        },
        email: {
          required,
          email,
          $lazy: true
        },
        message: {
          required,
          minLength: minLength(6),
          $lazy: true
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.q-form
  max-width: 550px
</style>
