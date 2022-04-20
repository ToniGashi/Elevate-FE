<template>
  <q-card v-ripple.early
          square
          class="full-width"
          @click="changeRoute"
          @mouseover="expanded = true"
          @mouseleave="expanded = false">

    <q-img src="~assets/unboxd.png"
           fit="scale-down"
           no-spinner
           :ratio="16/9">

      <div class="absolute-bottom no-padding">

        <div :class="[
             { 'q-py-xl': $q.screen.md || $q.screen.gt.md},
             { 'q-py-lg': $q.screen.sm },
             { 'q-py-md': $q.screen.xs },
             $q.screen.xl || $q.screen.lg ? 'text-h6':
             'text-subtitle2',
             'text-center'
             ]">

          {{currentObject.name}}

        </div>

      <transition-group enter-active-class="slideIn"
                        leave-active-class="slideOut">

        <q-list id="project-list"
                v-show="expanded"
                :dense="$q.screen.lt.lg"
                separator
                key="project-list"
                :class="[
                $q.screen.xl || $q.screen.lg? 'text-body1':
                'text-caption',
                'text-no-wrap',
                'text-primary',
                'bg-white',
                $q.screen.xl || $q.screen.lg? 'text-weight-bold':
                'text-weight-medium'
                ]">

          <q-item key="project-location">
            <q-item-section>
              {{$t('label.projectListCard.location')}}:
              {{currentObject.location}}
            </q-item-section>
          </q-item>

          <q-item key="project-type">
            <q-item-section>
              {{$t('label.projectListCard.type')}}:
              {{currentObject.type}}
            </q-item-section>
          </q-item>

          <q-item key="project-date">
            <q-item-section>
              {{$t('label.projectListCard.availableSince')}}:
              {{computeDate(currentObject.createdAt)}}
            </q-item-section>
          </q-item>

        </q-list>

      </transition-group>

      </div>

    </q-img>

  </q-card>
</template>

<script>
import dater from 'components/mixins/dater.js'
export default {
  name: 'ProjectListCard',
  props: ['currentObject'],
  mixins: [dater],
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    changeRoute () {
      setTimeout(() => {
        this.$router.push(`/projects/${this.currentObject.id}`)
      }, 100)
    }
  }
}
</script>
