<template>
  <q-page>

    <q-card
      flat
      square
      dark
      class="full-width relative-position">

      <q-img
        class="all-pointer-events"
        no-spinner
        no-native-menu
        src="map-of-the-world.jpg">

      </q-img>

      <q-card-section class="text-center text-white text-weight-bolder
      text-uppercase absolute-top">

        <div class="text-h2 q-mb-lg">Have a question?</div>

        <p class="text-subtitle2">
          For us, customer happiness is the number one priority,
          so we make it extremely easy for you to contact us.
        </p>

        <p class="text-subtitle2 q-mt-lg">
          Just fill out the form and we will get back to you as soon as possible.
        </p>

      </q-card-section>

      <q-card-section class="absolute-center">

      <contact-form/>

      </q-card-section>

    </q-card>

  </q-page>

</template>

<script>
import ContactForm from 'components/ContactForm'
export default {
  name: 'Contact',
  components: { ContactForm }
}
</script>

<style lang="sass" scoped>
.q-img
  max-height: fit-content
  filter: brightness(0.35)
</style>
