<template>

  <q-form
    @submit="onSubmit"
    @reset="onReset"
    ref="contactForm"
    class="q-gutter-md q-mx-auto text-center">

    <q-input
      v-for="(input, index) in inputs"
      :key="input.id"
      outlined
      color="secondary"
      :name="input.name"
      :model-value="input.value"
      @update:model-value="updateValue(index, $event)"
      :type="input.type"
      :placeholder="input.placeholder"
      :lazy-rules="input.lazy_rules"
      :rules="input.rules" />

    <div>
      <q-btn label="Submit" type="submit" color="secondary"/>
    </div>

  </q-form>
<!--  <div class="container">
    <div class="centered q-mb-xl">
      <h2 class="q-mb-lg">Have a question?</h2>
      <span class="text-subtitle2">
        For us, customer happiness is the number one priority,
        so we make it extremely easy for you to contact us.
        Just fill out the form and we will get back to you as soon as possible.
      </span>
    </div>
    <div class="row justify-evenly">
      <div>
        <q-icon name="mail_outline"
                style="font-size: 350px;
                color: #212529">
        </q-icon>
        <br>
        <div class="q-ml-xl">
          <h4 class="q-my-sm">Or call us: </h4>
          <span class="phone">Our Phone number: <b>+359 232 4892</b></span>
        </div>
      </div>
      <div>
        <q-form @submit='onSubmit'>
          <q-input type='text' v-model='name' placeholder='Enter your name here...' style='width:600px'/>
          <q-input type='text' v-model='email' placeholder='Enter your email here...' class='q-mt-md'/>
          <q-select v-model='countrySelected' :options='countryOptions' label='Country' class='q-mt-md'/>
          <q-select v-model='citySelected' :options='cityOptions' label='City' class='q-mt-md'/>
          <q-input v-model="text" type='textarea' filled placeholder='Write your text here..' class='q-mt-md'/>
          <q-btn color='secondary' type='Submit' label='Submit' class='q-mt-md'/>
        </q-form>
      </div>
    </div>
  </div>-->

</template>

<script>

/* eslint-disable no-trailing-spaces */
/* eslint-disable brace-style */
/* eslint-disable no-mixed-operators */

export default {
  name: 'ContactForm',
  data () {
    return {

      inputs: [
        {
          id: 0,
          name: 'fullName',
          value: null,
          type: 'text',
          placeholder: 'Your name *',
          lazy_rules: true,
          rules: [
            val => val && val.length > 0 ||
            'Please type your name'
          ]
        },
        {
          id: 1,
          name: 'email',
          value: null,
          type: 'text',
          placeholder: 'Your email *',
          lazy_rules: true,
          rules: [
            val => val && val.length > 0 ||
            'Please type your email'
          ]
        },
        {
          id: 2,
          name: 'message',
          value: null,
          type: 'textarea',
          placeholder: 'Your message *',
          lazy_rules: true,
          rules: [
            val => val && val.length > 0 ||
              'Please type your message'
          ]
        }
      ]
    }
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
          console.log(response)
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
  max-width: 600px

.q-field__native
  color: $muted

</style>
