<template>
  <q-page
    class="row justify-center items-center"
  >
    <div v-if="!this.form.isInRegister" class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:20vw">

          <q-card-section class="bg-green-7">
            <h4 class="text-h5 text-white q-my-md">Green Funds</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index:1">
              <q-btn @click="this.form.isInRegister=true" fab icon="add" color="green-5" />
            </div>
          </q-card-section>

          <q-card-section>
            <q-form autocomplete="off" class="q-px-sm q-pt-xl">
              <q-input outlined color="secondary" :class="!v$.form.email.$invalid ? 'q-mb-sm' : ''" v-model="v$.form.email.$model" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <p v-if="v$.form.email.$invalid" class="error-message">Enter a valid email</p>
              <q-input outlined color="secondary" v-model="v$.form.password.$model" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <p v-if="v$.form.password.$invalid" class="error-message">Password must be at least 6 characters</p>
            </q-form>
          </q-card-section>
          <p id="wrong-log-in-credentials" class="error-message"></p>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-5" class="full-width text-white" label="Sign In" @click="submitLogIn" :disabled="v$.form.email.$invalid || v$.form.password.$invalid"></q-btn>
          </q-card-actions>

          <q-card-section class="text-center q-pa-sm">
            <p class="text-grey-6 cursor-not-allowed">Forgot your password?</p>
          </q-card-section>

        </q-card>
      </div>
    </div>

    <div v-if="this.form.isInRegister" class="column q-pa-lg">
      <div class="row">
        <q-card square class="shadow-24" style="width:20vw">
          <q-card-section class="bg-green-7">
            <h4 class="text-h5 text-white q-my-md">Registration</h4>
            <div class="absolute-bottom-right q-pr-md" style="transform: translateY(50%); z-index:1">
              <q-btn @click="this.form.isInRegister=false" fab icon="close" color="green-5" />
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-px-sm q-pt-xl">
              <q-input outlined color="secondary" :class="!v$.form.firstName.$invalid ? 'q-mb-sm' : ''" v-model="v$.form.firstName.$model" type="text" label="First Name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <p v-if="v$.form.firstName.$invalid" class="error-message">First name is required</p>
              <q-input outlined color="secondary" :class="!v$.form.lastName.$invalid ? 'q-mb-sm' : ''" v-model="v$.form.lastName.$model" type="text" label="Last Name">
                <template v-slot:prepend>
                  <q-icon name="person" />
                </template>
              </q-input>
              <p v-if="v$.form.lastName.$invalid" class="error-message">Last name is required</p>
              <q-input outlined color="secondary" :class="!v$.form.email.$invalid ? 'q-mb-sm' : ''" v-model="v$.form.email.$model" type="email" label="Email">
                <template v-slot:prepend>
                  <q-icon name="email" />
                </template>
              </q-input>
              <p v-if="v$.form.email.$invalid" class="error-message">Must be a valid email</p>
              <q-input outlined color="secondary" :class="!v$.form.password.$invalid ? 'q-mb-sm' : ''" v-model="v$.form.password.$model" type="password" label="Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <p v-if="v$.form.password.$invalid" class="error-message">Password must be at least 6 characters</p>
              <q-input outlined color="secondary" v-model="v$.form.confirmPassword.$model" type="password" label="Confirm Password">
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
              </q-input>
              <p v-if="v$.form.confirmPassword.$invalid" class="error-message">Passwords must match</p>
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-lg">
            <q-btn unelevated size="lg" color="green-5" class="full-width text-white" label="Get Started" @click="submitRegister" :disabled="v$.form.$invalid" />
          </q-card-actions>
          <q-card-section class="text-center q-pa-sm">
            <div @click="this.form.isInRegister=false" class="text-grey-6 cursor-pointer">Return to login</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: 'signUp',
  setup () {
    return { v$: useVuelidate() }
  },
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isInRegister: false,
        confirmPassword: ''
      }
    }
  },
  methods: {
    async submitLogIn () {
      try {
        const dataLogIn = await this.$axios.post('/api/users/token', {
          email: this.form.email,
          password: this.form.password
        })

        if (dataLogIn.status === 200 || dataLogIn.status === 201) {
          this.$store.dispatch('users/setCurrentUser', dataLogIn.data)
          this.$router.push('/')
          window.localStorage.clear()
          window.localStorage.setItem('isLoggedIn', true)
        }
      } catch (error) {
        document.getElementById('wrong-log-in-credentials').innerHTML = 'Wrong Credentials'
        console.log(error)
      }
    },
    async submitRegister () {
      try {
        const dataLogIn = await this.$axios.post('/api/users', {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          password: this.form.password
        })

        if (dataLogIn.status === 200 || dataLogIn.status === 201) {
          this.$store.dispatch('users/setCurrentUser', dataLogIn.data)
          this.$router.push('/')
          window.localStorage.clear()
          window.localStorage.setItem('isLoggedIn', true)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  },
  validations () {
    return {
      form: {
        firstName: {
          required,
          $lazy: false
        },
        lastName: {
          required,
          $lazy: false
        },
        email: {
          required,
          email,
          $lazy: false
        },
        password: { required, minLength: minLength(6), $lazy: false },
        confirmPassword: { required, sameAsPassword: sameAs(this.form.password), $lazy: false }
      },
      $lazy: true
    }
  }
}
</script>

<style lang="sass" scoped>
.error-message
  color: #ba3939
  background: #ffe0e0
  margin-left: 20px
  margin-right: 20px
</style>
