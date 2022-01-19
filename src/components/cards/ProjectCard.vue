<template>
  <q-card class="bg-grey-2 q-pa-xl"
          square
          flat>
    <q-card-section class="text-left q-mb-sm">
      <div class="text-h2 text-weight-bold q-mb-sm">
        {{currentProject.name}}
      </div>
      <div class="text-subtitle1 text-weight-medium
           text-muted text-italic q-mb-sm">
        {{currentProject.motto}}
      </div>
      <div class="text-body1">
        {{currentProject.description}}
      </div>
    </q-card-section>

    <q-card-section class="row">
      <q-img
        :ratio="16/9"
        :class="[
          'col-lg-6',
          'col-sm-12',
          { 'q-mb-lg': $q.screen.sm }
          ]"
        :src="currentProject.img"/>

      <q-card-actions vertical
                      class="col-lg-5 col-sm-12
                      q-pa-none justify-evenly q-mx-auto">
        <div :class="[
          'text-h6',
          { 'q-mb-lg': $q.screen.sm }
          ]">
          Term:
          <span class="text-weight-regular">
          {{currentProject.term}}
          </span>
        </div>

      <div :class="[
           'row',
           'justify-between',
           { 'q-mb-lg': $q.screen.sm }
           ]">
        <q-linear-progress :value="progress"
                           color="secondary"
                           size="lg"
                           class="col-11"/>
          <q-badge text-color="secondary"
                   class="col-shrink"
                   :label="currentProject.interestRate" />
      </div>

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
  components: { StandardButton },
  data () {
    return {
      progress: 0
    }
  },
  created () {
    this.$watch(
      () => this.currentProject.interestRate,
      () => {
        this.progress = Number(this.currentProject.interestRate
          .split('%')[0]) / 100
      }
    )
  }
}
</script>

<style lang="sass" scoped>
.q-card
  width: 100%
#invest-button
  width: 100%
.q-badge
  background-color: #dcdcdc
  height: 16px
</style>
