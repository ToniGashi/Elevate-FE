<template>
<q-card flat
        square
        dark
        id="header-card">

    <div id="content-container"
         class="text-no-wrap">

      <q-card-section>

        <div class="text-h5 text-uppercase
             text-weight-bold q-mb-xs">
          {{$t('label.headerCard.h5')}}
        </div>

        <div class="text-h6 text-italic text-weight-regular">
          {{$t('label.headerCard.h6')}}
        </div>

      </q-card-section>

      <q-card-section>

        <standard-button to="/projects"
                         size="lg"
                         padding="10px md"
                         unelevated
                         color="secondary"
                         label-class="text-weight-bold"
                         :label="$t('label.headerCard.buttonLabel')"/>

      </q-card-section>

    </div>

</q-card>
</template>

<script>
import StandardButton from 'components/buttons/StandardButton.vue'
export default {
  name: 'HeaderCard',
  components: { StandardButton }
}
</script>

<style lang="sass" scoped>

@keyframes fadeIn
  from
    opacity: 0
  to
    opacity: 0.8

#header-card
  padding-top: 10.5rem
  padding-bottom: 6rem
  position: relative
  background: rgba(0, 0, 0, 0.3)

#header-card:after
  content: ""
  position: absolute
  background: url("src/assets/cover-photo.jpg") no-repeat center left fixed
  background-size: cover
  overflow: hidden
  top: 0
  left: 0
  right: 0
  bottom: 0
  z-index: -1
  opacity: 0.8
  animation: fadeIn 0.5s

#content-container
  margin-left: 10%

</style>
