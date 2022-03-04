<template>

  <q-form @submit="onSubmit"
          @reset="onReset"
          ref="contactForm"
          class="q-gutter-sm q-mx-auto">

    <div class="notify">
      <span id="notifyType"></span>
    </div>

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
         class="text-negative text-left">
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
             type="text"
             :placeholder="`${$t('label.contactForm.email')} *`"/>
    <div v-if="v$.form.email.$error"
         class="text-negative">
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
         class="text-negative">
      {{$t('error.enterMessage')}}
    </div>

    <div class="text-center q-mt-md">

      <standard-button size="lg"
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
import { required, email, minLength } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { Loading, QSpinnerHearts } from 'quasar'

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
      }
    }
  },
  methods: {
    notify (notification) {
      const notify = document.getElementsByClassName('notify')[0]
      notify.classList.toggle('active')
      const notifyType = document.getElementById('notifyType')
      notifyType.classList.toggle(notification)
      setTimeout(() => {
        notifyType.classList.toggle(notification)
        notify.classList.toggle('active')
      }, 2000)
    },

    async onSubmit () {
      Loading.show({
        spinner: QSpinnerHearts,
        message: this.$t('label.loading.sendMessage'),
        backgroundColor: 'green-5'
      })

      const fetchData = {
        fullName: this.form.fullName,
        email: this.form.email,
        message: this.form.message
      }

      try {
        const sendResponse = await this.$axios.post(
          '/api/emails/contact',
          fetchData)
        Loading.hide()
        if (sendResponse.status === 200 || sendResponse.status === 201) {
          this.$refs.contactForm.reset()
          this.notify('success')
        }
      } catch (err) {
        console.log(err)
        this.notify('failure')
      }
    },
    onReset () {
      this.form.fullName = ''
      this.form.email = ''
      this.form.message = ''
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

.notify
  position: absolute
  margin: 0
  top: 0
  right: 0
  width: 100%
  height: 0
  box-sizing: border-box
  color: white
  text-align: center
  background: $dark
  overflow: hidden
  transition: height .2s
  z-index: 100

#notifyType:before
  display: block
  margin-top: 15px
  z-index: 99

.active
  height: 50px

.success:before
  Content: "Success!"

.failure:before
  Content: "Failure!"

</style>
