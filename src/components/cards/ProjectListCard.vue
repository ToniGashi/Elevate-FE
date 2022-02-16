<template>
  <q-card v-ripple.early
          square
          class="full-width"
          @click="changeRoute"
          @mouseover="expanded = true"
          @mouseleave="expanded = false">

    <q-img :src="currentObject.img"
           fit="cover"
           :ratio="$q.screen.xl || $q.screen.lg? 16/9:
           1">

      <q-avatar class="absolute-top-right
                text-weight-medium q-mt-xs q-mr-xs"
                color="red-9"
                :size="$q.screen.xl || $q.screen.lg? 'xl':
                'lg'"
                :font-size="$q.screen.xl || $q.screen.lg? '15px':
                '12px'"
                text-color="white">
        <div class="absolute-center">
          {{currentObject.interestRate}}
        </div>
      </q-avatar>

      <div class="absolute-bottom no-padding">

        <div :class="[
             $q.screen.xl || $q.screen.lg? 'q-py-lg':
             'q-py-md' ,
             'text-center'
             ]">

        <div :class="[
             $q.screen.xl || $q.screen.lg? 'text-h6':
             'text-subtitle2',
             { 'q-py-md': !currentObject.motto.length }
             ]">
          {{currentObject.name}}
        </div>

        <div v-if="currentObject.motto.length"
             class="text-overline">
          {{currentObject.motto}}
        </div>

        </div>

      <transition-group enter-active-class="slideIn"
                        leave-active-class="slideOut">

        <q-list id="project-list"
                v-show="expanded"
                dense
                separator
                key="project-list"
                :class="[
                $q.screen.xl || $q.screen.lg? 'text-body1':
                'text-caption',
                'text-no-wrap',
                'text-primary',
                'bg-white',
                'text-left',
                $q.screen.xl || $q.screen.lg? 'text-weight-bold':
                'text-weight-medium'
                ]">

          <q-item key="project-location">
            <q-item-section>
              {{$t('label.projectListCard.location')}}:
              {{currentObject.location}}
            </q-item-section>
          </q-item>

          <q-item key="project-term">
            <q-item-section>
              {{$t('label.projectListCard.termLabel')}}:
              {{currentObject.term}}
              {{$t('label.projectListCard.termMonths')}}
            </q-item-section>
          </q-item>

          <q-item key="project-target">
            <q-item-section>
              {{$t('label.projectListCard.target')}}:
              {{currentObject.targetAmount}}
            </q-item-section>
          </q-item>

        </q-list>

      </transition-group>

      </div>

    </q-img>

  </q-card>
</template>

<script>
export default {
  name: 'ProjectListCard',
  props: ['currentObject'],
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

<style lang="sass" scoped>
@keyframes slideIn
  0%
   transform: translateY(100%)
  100%
    transform: translateY(0)

@keyframes slideOut
  0%
    transform: translateY(0)
  100%
    transform: translateY(100%)

.slideIn
  transform-origin: bottom
  animation: slideIn 0.1s linear
.slideOut
  transform-origin: top
  animation: slideOut 0.1s linear
</style>
