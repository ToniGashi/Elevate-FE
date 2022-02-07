<template>

  <q-card
    flat
    square
    class="transparent">

    <q-card-section class="text-center text-white text-uppercase">

      <div class="text-h3 text-weight-medium q-mb-md">
        Имате въпрос?
      </div>

      <div class="text-subtitle2 text-weight-bold">
        Не се колебайте да се свържете с нас
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
