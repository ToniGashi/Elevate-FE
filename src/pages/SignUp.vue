<template>
  <q-page padding>
    <sign-up-form></sign-up-form>
  </q-page>
</template>

<script>
import SignUpForm from 'components/signUp/SignUpForm.vue'
export default {
  name: 'SignUp',
  components: { SignUpForm }
}
</script>
