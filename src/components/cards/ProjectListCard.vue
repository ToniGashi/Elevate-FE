<template>
  <q-card v-ripple.early
          square
          id="project-item"
          @click="changeRoute">

    <q-card-section class="no-padding" >

    <q-img :src="currentObject.img"
           fit="cover"
           :ratio="16/9">

      <q-avatar class="absolute-top-right
                text-weight-medium q-mt-xs q-mr-xs"
                color="red-9"
                size="xl"
                font-size="15px"
                text-color="white">
        <div class="absolute-center">
          {{currentObject.interestRate}}
        </div>
      </q-avatar>

      <div class="absolute-bottom no-padding">

        <div :class="[
             $q.screen.sm ? 'q-py-sm': 'q-py-lg' ,
             'text-center'
          ]">

        <div class="text-h6">
          {{currentObject.name}}
        </div>

        <div class="text-caption">
          {{currentObject.motto}}
        </div>

        </div>

      </div>

    </q-img>

    <q-list v-if="$route.path === '/projects'"
            separator
            :class="[
            $q.screen.sm ? 'text-caption': 'text-body1',
            'text-no-wrap',
            'text-left',
            $q.screen.sm ? 'text-weight-medium': 'text-weight-bold'
            ]">

      <q-item>
        <q-item-section>
          Location: {{currentObject.location}}
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          Term: {{currentObject.term}}
        </q-item-section>
      </q-item>

      <q-item>
        <q-item-section>
          Type: {{currentObject.type}}
        </q-item-section>
      </q-item>

    </q-list>

    </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: 'ProjectListCard',
  props: ['currentObject'],
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
#project-item
  width: 100%
</style>
