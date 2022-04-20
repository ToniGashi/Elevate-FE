<template>
  <q-card class="bg-grey-2 full-width q-pt-md
          q-pb-sm q-px-md text-primary"
          square
          flat>
    <q-card-section class="q-px-none">
      <div class="row items-center q-mb-none">
        <div class="text-h2 text-weight-bold col-auto">
          {{currentProject.name}}
        </div>
        <q-spinner v-if="isLoading"
                   color="primary"
                   class="col-auto on-right"
                   size="sm"/>
        <q-avatar v-else
                  size="md"
                  square
                  class="shadow-5 col-auto on-right q-mt-sm q-mb-xs">
          <img :src="`icons/flags/${iconFile}.svg`"
               :alt="`flag of ${iconFile}`">
        </q-avatar>
      </div>
    </q-card-section>

    <q-card-section :class="[
                    'row',
                    'q-px-none',
                    $q.screen.xl ||
                    $q.screen.lg ?
                    'q-gutter-x-xl':
                    'q-gutter-y-lg'
                    ]">
      <q-img :ratio="16/9"
             fit="scale-down"
             :class="[
             'col-lg-6',
             'col-sm-12'
             ]"
             src="~assets/unboxd.png"/>

      <q-card-actions vertical
                      class="col-lg-5 col-sm-12
                      no-padding justify-between text-h6">
        <div :class="[
             'col-auto',
             $q.screen.xl ||
             $q.screen.lg ?
             'q-mb-none' :
             'q-mb-lg'
             ]">
            {{$t('label.projectCard.location')}}:
          <span class="text-weight-bold">
            {{currentProject.location}}
          </span>
        </div>

        <div :class="[
             'col-auto',
             $q.screen.xl ||
             $q.screen.lg ?
             'q-mb-none' :
             'q-mb-lg'
             ]">
          {{$t('label.projectCard.type')}}:
          <span class="text-weight-bold">
            {{currentProject.type}}
          </span>
        </div>

        <div :class="[
             'col-auto',
             $q.screen.xl ||
             $q.screen.lg ?
             'q-mb-none' :
             'q-mb-lg'
             ]">
          {{$t('label.projectCard.availableSince')}}:
          <span class="text-weight-bold">
            {{date}}
          </span>
        </div>

        <div class="col-auto q-mb-none">
          {{$t('label.projectCard.website')}}:
          <a href="https://www.aubg.edu/accelerator/assets/img/teams/Unboxd%202.png"
             target="_blank"
             class="text-weight-bold">
            {{currentProject.website}}
          </a>
        </div>

<!--      <div :class="[
           'col',
           'row',
           'items-center',
           'q-gutter-x-sm',
           $q.screen.xl ||
           $q.screen.lg ?
           'q-mb-none' :
           'q-mb-lg'
           ]">
        <q-linear-progress :value="progress"
                           color="secondary"
                           size="20px"
                           class="col"/>
          <q-badge text-color="secondary"
                   class="col-shrink text-weight-bold bg-muted"
                   :label="currentProject.interestRate"/>
      </div>-->

      </q-card-actions>

    </q-card-section>

    <q-card-section class="q-px-none q-pb-none">

      <ProjectPanels :current-project="currentProject"/>

    </q-card-section>

  </q-card>
</template>

<script>
import ProjectPanels from 'components/cards/ProjectPanels.vue'
import dater from 'components/mixins/dater.js'
// import gtm from 'components/gtm.js'

export default {
  name: 'ProjectCard',
  props: ['currentProject'],
  components: { ProjectPanels },
  mixins: [dater],
  data () {
    return {
      iconFile: '',
      isLoading: true,
      date: '',
      notificationMessage: '',
      error: null
    }
  },
  created () {
    this.$watch(
      () => this.currentProject.location,
      async () => {
        if (this.currentProject.location) {
          const countryName = this.currentProject.location.split(', ')[1]
          await this.$axios.get(`/country-api/${countryName}`)
            .then(response => {
              this.error = null
              this.iconFile = response.data.records[0].fields.iso2_code
                .toLowerCase()
              this.isLoading = false
            })
            .catch(error => {
              this.error = error
              this.notificationMessage =
                this.$t('label.notification.failureCountryFlag')
              this.$store.dispatch('notifications/setMessage',
                this.notificationMessage)
              this.$store.dispatch('notifications/setType',
                'failure')
              this.$store.dispatch('notifications/toggleDisplay')
            })
        }
      })
    this.$watch(
      () => [
        this.$i18n.locale,
        this.currentProject.createdAt
      ],
      () => {
        if (this.currentProject.createdAt) {
          this.date = this.computeDate(this.currentProject.createdAt)
        }
        if (this.error) {
          this.notificationMessage =
            this.$t('label.notification.failureCountryFlag')
          this.$store.dispatch('notifications/setMessage',
            this.notificationMessage)
        }
      })
  } /*,
  methods: {
    trackDonationButton () {
      gtm.logEvent('tracking', 'donationTrack',
        'Donation Button clicked', 99.90,
        `/projects/${this.currentProject.id}`)
    }
  } */
}
</script>
