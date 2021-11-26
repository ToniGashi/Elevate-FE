<template>
  <q-card class="container cursor-pointer" v-ripple clickable>
    <router-link :to="'/projects/'+currentProject.id" class="card hover" style="margin-bottom:50px">
      <q-img :src="currentProject.img" class="card-image" />
      <div class="card-meta">
          <span class="date"><span>{{currentProject.interestRate}}</span></span>
      </div>
      <q-scroll-area class="card-details">
        <div>
          <text class="q-mb-xs text-h4 text-weight-bold">{{currentProject.name}}</text>
          <h3 class="mottoStyles">"{{currentProject.motto}}"</h3>
          <p class="pStyles"><b>Location: </b>{{currentProject.location}}</p>
          <p class="pStyles"><b>Interest Rate: </b>{{currentProject.interestRate}}</p>
          <p class="pStyles"><b>Term: </b> {{currentProject.term}}</p>
          <p class="pStyles"><b>Type: </b> {{currentProject.type}}</p>
          <p class="pStyles"><b>Description: </b>{{currentProject.description}}</p>
        </div>
      </q-scroll-area>
    </router-link>
    <router-view></router-view>
  </q-card>
</template>

<script>
/* eslint-disable */
import NavLink from '../header/NavLink.vue'

export default {
  components: { NavLink },
  props: ['currentProject']
}
</script>

<style scoped>
    @import '../../css/ProjectListItemStyle.sass';
</style>
