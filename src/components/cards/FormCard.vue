<template>

  <q-card
    flat
    square
    class="transparent">

    <q-card-section class="text-center text-white text-uppercase">

      <div class="text-h3 text-weight-medium q-mb-lg">
        Have a question?
      </div>

      <div class="text-subtitle2 text-weight-bold">
        For us, customer happiness is the number one priority,
        so we make it extremely easy for you to contact us.
      </div>

      <div class="text-subtitle2 text-weight-bold">
        Just fill out the form, and we will get back to you as soon as possible.
      </div>

    </q-card-section>

    <q-card-section>

      <ContactForm/>

    </q-card-section>

  </q-card>

</template>

<script>
import ContactForm from 'components/contact/ContactForm.vue'

export default {
  name: 'FormCard',
  components: { ContactForm }
}
</script>
