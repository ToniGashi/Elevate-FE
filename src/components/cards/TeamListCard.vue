<template>
  <div class="card-box text-center">
    <div class="user-pic">
      <q-img :src="currentTeamMember.image" class="img-fluid" alt="user pic"></q-img>
    </div>
    <h4 class="text-weight-bold">{{currentTeamMember.fullName}}</h4>
    <h6 class="text-weight-bold">{{currentTeamMember.job}}</h6>
    <q-separator spaced/>
    <div class="text-body1">
      {{currentTeamMember.description}}
    </div>
    <q-separator spaced/>
    <router-link :to="currentTeamMember.link" class="btn btn-primary">Learn More</router-link>
  </div>
</template>

<script>
export default {
  name: 'TeamListCard',
  props: ['currentTeamMember'],
  created () {
    console.log('!!!!!!!!', this.currentTeamMember)
    return {
      expanded: false
    }
  }
}
</script>

<style lang="sass" scoped>
.q-badge
  background-color: #dcdcdc
  height: 16px
</style>
