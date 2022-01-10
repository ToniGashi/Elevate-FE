<template>
  <q-card v-ripple.early
          square
          id="project-item"
          @click="changeRoute">

    <q-img :src="currentProject.img"
           fit="cover"
           height="350px"
           width="100%">

      <q-avatar class="absolute-top-right
                text-weight-medium q-mt-xs q-mr-xs"
                color="red-9"
                size="xl"
                font-size="15px"
                text-color="white">
        <div class="absolute-center">
          {{currentProject.interestRate}}
        </div>
      </q-avatar>

      <div class="absolute-bottom">
      <div class="text-h6">
        {{currentProject.name}}
      </div>
      <div class="text-caption">
        {{currentProject.motto}}
      </div>
      </div>
    </q-img>

    <q-card-section class="text-body1 text-left text-weight-bold">
      Location: {{currentProject.location}}
    </q-card-section>
    <q-separator/>

    <q-card-section class="text-body1 text-left text-weight-bold">
      Term: {{currentProject.term}}
    </q-card-section>
    <q-separator/>

    <q-card-section class="text-body1 text-left text-weight-bold">
      Type: {{currentProject.type}}
    </q-card-section>

  </q-card>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: ['currentProject'],
  methods: {
    changeRoute () {
      setTimeout(() => {
        this.$router.push(`/projects/${this.currentProject.id}`)
      }, 100)
    }
  }
}
</script>

<style lang="sass" scoped>
#project-item
  width: 100%
</style>
