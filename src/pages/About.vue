<template>
  <q-card flat
          square
          dark
          id="about-us">

    <div id="content-container"
        class="text-no-wrap">

      <q-card-section class="row justify-between">

        <div class="col-lg-6 col-md-12">
          <q-img src='~/assets/about-us-2.png' style="width:30rem;" />
        </div>
        <div class="text-h3 col-lg-6 col-md-12
            text-weight-bold q-mb-xs" style="color:rgba(25,83,69,1)">
          {{$t('label.aboutCard.aim')}}
          <h5 class="q-mt-lg text-weight-bold">{{$t('label.aboutCard.aim_subtext')}}</h5>
        </div>

      </q-card-section>
    </div>

    <div id="mission">
      <q-separator color="green-10" spaced style="height:0.3rem; width:30rem; margin:auto"/>

      <h3 class="q-mt-xl q-mb-xl text-weight-bold" style="color:rgba(25,83,69,1); text-align:center;">{{$t('label.aboutCard.mission')}}</h3>

      <q-separator color="green-10" spaced style="height:0.3rem; width:30rem; margin:auto"/>
    </div>

    <div id="vision">

      <h3 class="q-mt-xl q-mb-xl text-weight-bold" style="color:rgba(25,83,69,1); text-align:center;">{{$t('label.aboutCard.vision')}}</h3>

      <q-separator color="green-10" spaced style="height:0.3rem; width:30rem; margin:auto"/>

    </div>
      <q-card-section class="q-mt-xl" style="color:rgba(25,83,69,1)">
        <standard-grid :data="teamList"
                       :component="teamListCard"/>
      </q-card-section>
  </q-card>
</template>

<script>
import StandardGrid from 'components/grids/StandardGrid.vue'
import { defineAsyncComponent, shallowRef } from 'vue'

export default {
  name: 'AboutUs',
  components: { StandardGrid },
  data () {
    return {
      teamList: [
        {
          id: 0,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: 'img-1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 1,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: 'img-2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 2,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: 'img-3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 3,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: 'img-4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 4,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: 'img-5',
          description: 'Lorem ipsum dolor sit ametel turpis.',
          link: '/'
        },
        {
          id: 5,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: 'img-6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        }
      ],
      teamListCard: {}
    }
  },
  created () {
    this.teamListCard = shallowRef(defineAsyncComponent(
      () => import('components/cards/TeamListCard.vue')
    ))
  }
}
</script>

<style lang="sass" scoped>
#about-us
  padding-top: 10.5rem
  padding-bottom: 6rem
  position: relative
  background: $white

#content-container
  margin-left: 9rem
  margin-right: 5%
</style>
