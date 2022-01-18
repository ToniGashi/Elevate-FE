<template>
  <q-card class="bg-grey-2 q-pa-xl" flat>
    <q-card-section class="text-center q-mb-lg">
      <div class="text-h2 text-weight-bold q-mb-sm">{{currentProject.name}}</div>
      <div class="text-subtitle1 text-weight-medium text-muted text-italic">
        {{currentProject.motto}}
      </div>
    </q-card-section>

    <q-card-section class="row">
      <q-img
        :ratio="16/9"
        class="col-lg-6 col-sm-12 q-mb-sm"
        :src="currentProject.img"/>

      <q-card-actions vertical
                      class="col-lg-5 col-sm-12 q-pa-none
                      q-mx-auto">
        <standard-button id="invest-button"
                         size="1.5rem"
                         padding="sm lg"
                         unelevated
                         color="secondary"
                         label-class="text-weight-bold text-no-wrap"
                         :label="`Invest in ${currentProject.name}`"/>
      </q-card-actions>

    </q-card-section>
  </q-card>
</template>

<script>
import StandardButton from 'components/buttons/StandardButton'
export default {
  name: 'ProjectCard',
  props: ['currentProject'],
  components: { StandardButton }
}
</script>

<style lang="sass" scoped>
.q-card
  width: 100%
#invest-button
  width: 100%
</style>
