<template>
  <q-card flat
          square
          dark
          id="about-card">

    <div class="text-no-wrap">

      <q-card-section class="row wrap justify-evenly">

        <div class="text-h5 q-my-auto text-weight-bold col-6" :style="{'white-space': 'pre-line'}">
          {{$t('label.aboutCard.greeting')}}
          <q-separator color="white" spaced style="height:0.5rem; width:25rem"/>
          <div class="q-mt-sm text-weight-bold">{{$t('label.aboutCard.greeting_subtext')}}</div>
        </div>

        <div class="col-4">
          <q-img src='~assets/about-us-1.png' width="30rem" no-spinner/>
        </div>

      </q-card-section>
    </div>

  </q-card>
</template>

<script>
export default {
  name: 'AboutCard'
}
</script>

<style lang="sass" scoped>
#about-card
  padding-top: 10.5rem
  padding-bottom: 6rem
  position: relative
  background: rgba(111, 183, 146, 0.5)
</style>
