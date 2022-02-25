<template>
  <q-card flat
        square
        dark
        id="about">

    <div id="content-container"
        class="text-no-wrap">

      <q-card-section class="row justify-around">

        <div class="text-h3 col q-my-auto
            text-weight-bold q-mb-md">
          {{$t('label.aboutCard.greeting')}}
          <q-separator color="white" spaced="lg" style="height:0.5rem; width:25rem"/>
          <h5 class="q-mt-sm text-weight-bold">{{$t('label.aboutCard.greeting_subtext')}}</h5>
        </div>

        <div class="col">
          <q-img src='../../assets/about-us-1.png' style="width:30rem;"></q-img>
        </div>

      </q-card-section>
    </div>

  </q-card>
</template>

<script>
export default ({
  name: 'about-us'
})
</script>

<style lang="sass" scoped>
#about
  padding-top: 10.5rem
  padding-bottom: 6rem
  position: relative
  background: rgba(111, 183, 146, 0.5)
</style>
