<template>

  <q-card flat
          square
          class="transparent">

    <q-card-section class="text-center text-white text-uppercase">

      <div class="text-h3 text-weight-medium q-mb-md">
        {{$t('label.formCard.h3')}}?
      </div>

      <div class="text-subtitle2 text-weight-bold">
        {{$t('label.formCard.subtitle')}}
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
