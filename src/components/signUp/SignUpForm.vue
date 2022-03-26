<template>
  <div>
    <q-form v-if="form.isInRegister"
            @submit="submitRegister"
            class="q-mx-auto shadow-5">
      <q-card square >
        <q-card-section class="bg-secondary">
          <div class="text-h5 text-white q-my-md">
            {{$t('label.signUpForm.registration')}}
          </div>
        </q-card-section>
        <q-card-section class="q-gutter-y-sm">
          <q-input outlined
                   color="secondary"
                   label-color="placeholder"
                   v-model="v$.form.firstName.$model"
                   type="text"
                   :label="$t('label.signUpForm.name')">
            <template v-slot:prepend>
              <q-icon name="person"
                      color="placeholder"/>
            </template>
          </q-input>
          <div v-if="v$.form.firstName.$invalid"
               class="error-message">
            {{$t('error.enterFirstName')}}
          </div>
          <q-input outlined
                   color="secondary"
                   label-color="placeholder"
                   v-model="v$.form.lastName.$model"
                   type="text"
                   :label="$t('label.signUpForm.lastName')">
            <template v-slot:prepend>
              <q-icon name="person"
                      color="placeholder"/>
            </template>
          </q-input>
          <div v-if="v$.form.lastName.$invalid"
               class="error-message">
            {{$t('error.enterLastName')}}
          </div>
          <q-input outlined
                   color="secondary"
                   label-color="placeholder"
                   v-model="v$.form.email.$model"
                   type="email"
                   :label="$t('label.signUpForm.email')">
            <template v-slot:prepend>
              <q-icon name="email"
                      color="placeholder"/>
            </template>
          </q-input>
          <div v-if="v$.form.email.$invalid"
               class="error-message">
            {{$t('error.invalidEmail')}}
          </div>
          <q-input outlined
                   color="secondary"
                   label-color="placeholder"
                   v-model="v$.form.password.$model"
                   type="password"
                   :label="$t('label.signUpForm.password')">
            <template v-slot:prepend>
              <q-icon name="lock"
                      color="placeholder"/>
            </template>
          </q-input>
          <div v-if="v$.form.password.$invalid"
               class="error-message">
            {{$t('error.invalidPassword')}}
          </div>
          <q-input outlined
                   color="secondary"
                   label-color="placeholder"
                   v-model="v$.form.confirmPassword.$model"
                   type="password"
                   :label="$t('label.signUpForm.confirmPassword')">
            <template v-slot:prepend>
              <q-icon name="lock"
                      color="placeholder"/>
            </template>
          </q-input>
          <div v-if="v$.form.confirmPassword.$invalid"
               class="error-message">
            {{$t('error.invalidConfirmPassword')}}
          </div>
        </q-card-section>
        <q-card-actions class="text-center q-px-md"
                        align="center"
                        vertical>
          <standard-button :disable="v$.form.email.$invalid ||
                           v$.form.password.$invalid ||
                           v$.form.confirmPassword.$invalid ||
                           v$.form.firstName.$invalid ||
                           v$.form.lastName.$invalid ||
                           (!form.email || !form.password ||
                           !form.confirmPassword || !form.firstName ||
                           !form.lastName)"
                           size="lg"
                           padding="sm 40px"
                           type="submit"
                           unelevated
                           color="secondary"
                           label-class="text-weight-bold"
                           :label="$t('label.signUpForm.signUpButton')"/>
          <div class="text-grey-6 cursor-pointer q-mt-md"
               @click="form.isInRegister=false">
            {{$t('label.signUpForm.toLogIn')}}
          </div>
        </q-card-actions>
      </q-card>
    </q-form>
    <q-form v-else
            @submit="submitLogIn"
            class="q-mx-auto standard-form shadow-5">
        <q-card square >
          <q-card-section class="bg-secondary">
            <div class="text-h5 text-white q-my-md">
              {{$t('label.signUpForm.h5')}} GreenFunds
            </div>
          </q-card-section>
          <q-card-section class="q-gutter-y-sm">
              <q-input outlined
                       color="secondary"
                       label-color="placeholder"
                       v-model="v$.form.email.$model"
                       type="email"
                       :label="$t('label.signUpForm.email')">
                <template v-slot:prepend>
                  <q-icon name="email"
                          color="placeholder"/>
                </template>
              </q-input>
              <div v-if="v$.form.email.$error"
                 class="error-message">
                {{$t('error.invalidEmail')}}
              </div>
              <q-input outlined
                       color="secondary"
                       label-color="placeholder"
                       v-model="v$.form.password.$model"
                       type="password"
                       :label="$t('label.signUpForm.password')">
                <template v-slot:prepend>
                  <q-icon name="lock"
                          color="placeholder"/>
                </template>
              </q-input>
              <div v-if="v$.form.password.$error"
                 class="error-message">
                {{$t('error.invalidPassword')}}
              </div>
          </q-card-section>
          <q-card-actions class="text-center q-px-md"
                          align="center"
                          vertical>
            <standard-button :disable="v$.form.email.$invalid ||
                             v$.form.password.$invalid ||
                             (!form.email || !form.password)"
                             size="lg"
                             padding="sm 40px"
                             type="submit"
                             unelevated
                             color="secondary"
                             label-class="text-weight-bold"
                             :label="$t('label.signUpForm.logInButton')"/>
            <div class="text-grey-6 cursor-pointer q-mt-md"
                 @click="form.isInRegister=true">
              {{$t('label.signUpForm.toSignUp')}}
            </div>
          </q-card-actions>
        </q-card>
    </q-form>
  </div>
</template>

<script>
import StandardButton from 'components/buttons/StandardButton.vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'

export default {
  name: 'SignUpForm',
  components: { StandardButton },
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
        isInRegister: true,
        confirmPassword: ''
      },
      notificationMessage: '',
      error: null
    }
  },
  created () {
    this.$watch(() => this.$i18n.locale,
      () => {
        if (this.error) {
          if (this.error.response.status === 400) {
            this.notificationMessage =
              this.$t('label.notification.alreadyRegistered')
          } else if (this.error.response.status === 401) {
            this.notificationMessage =
              this.$t('label.notification.wrongCredentials')
          }
          this.$store.dispatch('notifications/setMessage',
            this.notificationMessage)
        }
      })
  },
  methods: {
    resetRegisterForm () {
      this.v$.$reset()
      this.form.firstName = ''
      this.form.lastName = ''
      this.form.email = ''
      this.form.password = ''
      this.form.confirmPassword = ''
    },
    resetLogInForm () {
      this.v$.$reset()
      this.form.email = ''
      this.form.password = ''
    },
    loginUser (user) {
      window.localStorage.setItem('loggedUser', JSON.stringify(user))
      this.$store.dispatch('users/logInCurrentUser', user)
      this.$router.push('/')
    },
    displayNotification (message) {
      this.notificationMessage = message
      this.$store.dispatch('notifications/setMessage',
        this.notificationMessage)
      this.$store.dispatch('notifications/setType',
        'failure')
      this.$store.dispatch('notifications/toggleDisplay')
    },
    async submitRegister () {
      this.$showLoader()
      try {
        const dataLogIn = await this.$axios.post('/api/users', {
          first_name: this.form.firstName,
          last_name: this.form.lastName,
          email: this.form.email,
          password: this.form.password
        })
        if (dataLogIn.status === 200 || dataLogIn.status === 201) {
          this.error = null
          this.resetRegisterForm()
          this.loginUser(dataLogIn.data.user)
        }
      } catch (error) {
        this.error = error
        this.displayNotification(
          this.$t('label.notification.alreadyRegistered')
        )
      } finally {
        this.$hideLoader()
      }
    },
    async submitLogIn () {
      this.$showLoader()
      try {
        const dataLogIn = await this.$axios.post('/api/users/token', {
          email: this.form.email,
          password: this.form.password
        })
        if (dataLogIn.status === 200 || dataLogIn.status === 201) {
          this.error = null
          this.resetLogInForm()
          this.loginUser(dataLogIn.data.user)
        }
      } catch (error) {
        this.error = error
        this.displayNotification(
          this.$t('label.notification.wrongCredentials')
        )
      } finally {
        this.$hideLoader()
      }
    }
  },
  validations () {
    return {
      form: {
        firstName: {
          required,
          $lazy: true
        },
        lastName: {
          required,
          $lazy: true
        },
        email: {
          required,
          email,
          $lazy: true
        },
        password: {
          required,
          minLength: minLength(6),
          $lazy: true
        },
        confirmPassword: {
          required,
          sameAsPassword: sameAs(this.form.password),
          $lazy: true
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.q-form
  max-width: 370px
</style>
