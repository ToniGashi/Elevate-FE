<template>

  <q-form @submit="onSubmit"
          @reset="onReset"
          ref="contactForm"
          class="q-gutter-sm q-mx-auto text-center">

    <q-input v-for="(input, index) in inputs"
             :key="input.id"
             outlined
             color="secondary"
             bg-color="white"
             input-style="font-size:17px"
             :input-class="[
             'form-input',
             'text-weight-bolder'
             ]"
             :name="input.name"
             :model-value="input.value"
             @update:model-value="updateValue(index, $event)"
             :type="input.type"
             :placeholder="input.placeholder"
             :lazy-rules="input.lazy_rules"
             :rules="input.rules" />

    <div class="q-mt-md">

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

/* eslint-disable no-trailing-spaces */
/* eslint-disable brace-style */
/* eslint-disable no-mixed-operators */

import StandardButton from 'components/buttons/StandardButton.vue'

export default {
  name: 'ContactForm',
  components: { StandardButton },
  data () {
    return {
      inputs: [
        {
          id: 0,
          name: 'fullName',
          value: null,
          type: 'text',
          lazy_rules: true
        },
        {
          id: 1,
          name: 'email',
          value: null,
          type: 'text',
          lazy_rules: true
        },
        {
          id: 2,
          name: 'message',
          value: null,
          type: 'textarea',
          lazy_rules: true
        }
      ]
    }
  },
  created () {
    this.$watch(
      () => this.$i18n.locale,
      () => {
        this.inputs[0].placeholder = `${this.$t('label.contactForm.names')} *`
        this.inputs[0].rules = [
          val => val && val.length > 0 ||
            this.$t('error.enterNames')
        ]
        this.inputs[1].placeholder = `${this.$t('label.contactForm.email')} *`
        this.inputs[1].rules = [
          val => val && val.length > 0 ||
            this.$t('error.enterEmail'),
          v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            this.$t('error.invalidEmail')
        ]
        this.inputs[2].placeholder = `${this.$t('label.contactForm.message')} *`
        this.inputs[2].rules = [
          val => val && val.length > 0 ||
            this.$t('error.enterMessage')
        ]
      }, { immediate: true })
  },
  methods: {

    updateValue (index, value) {
      this.inputs[index].value = value
    },

    onSubmit () {
      let fullName
      let email
      let message

      for (let i = 0; i < this.inputs.length; i++) {
        if (this.inputs[i].name === 'fullName')
        { fullName = this.inputs[i].value }

        else if (this.inputs[i].name === 'email')
        { email = this.inputs[i].value }

        else if (this.inputs[i].name === 'message')
        { message = this.inputs[i].value }
      }

      const fetchData = {
        fullName: fullName,
        email: email,
        message: message
      }

      this.$axios.post('/api/emails/contact', fetchData)
        .then(response => {
          this.$refs.contactForm.reset()
          fullName = null
          email = null
          message = null
        })
        .catch(err => console.log(err))
    },
    onReset () {
      // eslint-disable-next-line no-return-assign
      this.inputs.forEach(input => input.value = null)
    }
  }
}
</script>

<style lang="sass" scoped>

.q-form
  max-width: 550px

</style>
