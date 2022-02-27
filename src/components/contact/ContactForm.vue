<template>

  <q-form @submit="onSubmit"
          ref="contactForm"
          class="q-gutter-sm q-mx-auto text-center">

    <div class="notify"><span id="notifyType" class=""></span></div>

    <q-input
      v-model="v$.form.fullName.$model"
      outlined
      color="secondary"
      bg-color="white"
      input-style="font-size:17px"
      :input-class="[
      'form-input',
      'text-weight-bolder'
      ]"
      type="text"
      :placeholder="`${this.$t('label.contactForm.names')} *`"
    />
    <pre v-if="v$.form.fullName.$error" class="error-message">{{this.$t('error.enterFirstName')}}</pre>

    <q-input
      v-model="v$.form.email.$model"
      outlined
      color="secondary"
      bg-color="white"
      input-style="font-size:17px"
      :input-class="[
      'form-input',
      'text-weight-bolder'
      ]"
      type="text"
      :placeholder="`${this.$t('label.contactForm.email')} *`"
    />
    <pre v-if="v$.form.email.$error" class="error-message">{{this.$t('error.enterEmail')}}</pre>

    <q-input
      v-model="v$.form.message.$model"
      outlined
      color="secondary"
      bg-color="white"
      input-style="font-size:17px"
      :input-class="[
      'form-input',
      'text-weight-bolder'
      ]"
      type="textarea"
      :placeholder="`${this.$t('label.contactForm.message')} *`"
    />
    <pre v-if="v$.form.message.$error" class="error-message">{{this.$t('error.invalidMessage')}}</pre>

    <div class="q-mt-md">

      <standard-button
                       :disabled="(v$.form.fullName.$invalid || v$.form.email.$invalid || v$.form.message.$invalid) || (!form.fullName || !form.email || !form.message)"
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

/* eslint-disable no-trailing-spaces */
/* eslint-disable brace-style */
/* eslint-disable no-mixed-operators */

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
      setTimeout(function () {
        notifyType.classList.toggle(notification)
        notify.classList.toggle('active')
      }, 2000)
    },

    async onSubmit () {
      const isValid = await this.v$.$validate()

      if (!isValid) {
        return
      }

      Loading.show({
        spinner: QSpinnerHearts,
        message: 'Logging you in',
        backgroundColor: 'green-5'
      })

      const fetchData = {
        fullName: this.form.fullName,
        email: this.form.email,
        message: this.form.message
      }

      try {
        await this.$axios.post('/api/emails/contact', fetchData)
        this.form.fullName = null
        this.form.email = null
        this.form.message = null
        this.notify('success')
      } catch (err) {
        console.log(err)
        this.notify('failure')
      } finally {
        this.v$.$reset()
        Loading.hide()
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

<style scoped>
.q-form {
  max-width: 550px
}

.error-message {
  color: #ba3939;
  background: #ffe0e0;
  margin-left: 20px;
  margin-right: 20px;
}

#success{
  background:#03a679;
  color:#f0f0f0;
}

#failure{
  background:#ff3939;
  color:#f0f0f0;
}

.notify{
  position:absolute;
  margin:0px;
  top:0px;
  right:0px;
  width:100%;
  height:0;
  box-sizing:border-box;
  color:white;
  text-align:center;
  background:rgba(0,0,0,.6);
  overflow:hidden;
  box-sizing:border-box;
  transition:height .2s;
  z-index: 100;
}

#notifyType:before{
  display:block;
  margin-top:15px;
  z-index: 99;
}

.active{
  height:50px;
}

.success:before{
  Content:"Success!";
}

.failure:before{
  Content:"Failure!";
}

</style>
