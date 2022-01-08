<template>
  <q-card v-ripple clickable>
      <q-img :src="currentProject.img"/>
      <div>
          <span><span>{{currentProject.interestRate}}</span></span>
      </div>
      <q-scroll-area>
        <div>
          <text>{{currentProject.name}}</text>
          <h3>"{{currentProject.motto}}"</h3>
          <p><b>Location: </b>{{currentProject.location}}</p>
          <p><b>Interest Rate: </b>{{currentProject.interestRate}}</p>
          <p><b>Term: </b> {{currentProject.term}}</p>
          <p><b>Type: </b> {{currentProject.type}}</p>
          <p><b>Description: </b>{{currentProject.description}}</p>
        </div>
      </q-scroll-area>
  </q-card>
</template>

<script>
export default {
  name: 'ProjectListItem',
  props: ['currentProject']
}
</script>

<style lang="sass" scoped>
</style>
