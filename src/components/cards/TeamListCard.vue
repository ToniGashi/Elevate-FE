<template>
  <div class="card-box text-center">
    <div class="user-pic">
      <q-img :src="teamMemberImg" class="img-fluid" alt="user pic"></q-img>
    </div>
    <h4 class="text-weight-bold">{{currentObject.fullName}}</h4>
    <h6 class="text-weight-bold">{{currentObject.job}}</h6>
    <q-separator spaced/>
    <div class="text-body1">
      {{currentObject.description}}
    </div>
    <q-separator spaced/>
    <router-link :to="currentObject.link">
      {{$t('label.teamListCard.learnMore')}}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'TeamListCard',
  props: ['currentObject'],
  computed: {
    teamMemberImg () {
      return require('src/assets/' + this.currentObject.image + '.jpg')
    }
  }
}
</script>

<style lang="sass" scoped>
.user-pic
  width: 150px
  height: 150px
  overflow: hidden
  border-radius: 100%
  margin: 20px auto 20px
  border-left: 3px solid #ddd
  border-right: 3px solid #ddd
  border-top: 3px solid #007bff
  border-bottom: 3px solid #007bff
  transition: 0.5s

.card-box:hover .user-pic
  transform: scale(1.1)
.card-box
  padding: 15px
  background-color: #fdfdfd
  margin: 20px 0
  border-radius: 10px
  border: 1px solid #eee
  box-shadow: 0 0 8px 0 #d4d4d4
  transition: 0.5s

.card-box:hover
  border: 1px solid #007bff
</style>
