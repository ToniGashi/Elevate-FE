<template>
  <q-card flat
          square
          id="about-card">

      <q-card-section :class="[
                      'row justify-between',
                      'items-center',
                      { 'card-padding': $q.screen.sm }
                      ]">
        <div :class="[
             $q.screen.xl || $q.screen.lg ? 'text-h5':
             'text-subtitle1',
             'col-lg-8',
             'col-sm-6'
             ]">
          <div class="text-weight-bold">
            {{$t('label.aboutCard.aboutLabel')}}
          </div>
          <q-separator color="white"
                       spaced
                       style="height:0.5rem; width:25rem"/>
          <div class="q-mt-sm">
            {{$t('label.aboutCard.aboutText')}}
          </div>
        </div>

          <q-img src='~assets/about-us-1.png'
                 style="max-width: 30rem"
                 class="col-lg-4 col-sm-6"
                 no-spinner/>

      </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: 'AboutCard'
}
</script>

<style lang="sass" scoped>
#about-card
  background: #486e5e
.card-padding
  padding-top: 5rem
  padding-bottom: 1rem
</style>
