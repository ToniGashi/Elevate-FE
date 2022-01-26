<template>
  <q-page padding>
    <sign-up-form></sign-up-form>
  </q-page>
</template>

<script>
import signUpForm from 'components/signUp/SignUpForm.vue'
export default {
  name: 'Project',
  components: { signUpForm }
}
</script>
