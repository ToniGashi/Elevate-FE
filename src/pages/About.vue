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

    <!-- <div id="our-team-container" class="q-mt-xl" style="color:rgba(25,83,69,1)"> -->
      <q-card-section>
        <standard-grid :data="teamList"
                       :component="teamListCard"/>
      </q-card-section>
    <!-- </div> -->
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
          image: '~/assets/img-1.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem ut metus commodo porttitor facilisis vel turpis. Vivamus id nunc egestas, porttitor odio id, fermentum lorem. In viverra fringilla erat vitae maximus.',
          link: 'http://google.com'
        },
        {
          id: 1,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: '~/assets/img-2.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem ut metus commodo porttitor facilisis vel turpis. Vivamus id nunc egestas, porttitor odio id, fermentum lorem. In viverra fringilla erat vitae maximus.',
          link: 'http://google.com'
        },
        {
          id: 2,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: '~/assets/img-3.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem ut metus commodo porttitor facilisis vel turpis. Vivamus id nunc egestas, porttitor odio id, fermentum lorem. In viverra fringilla erat vitae maximus.',
          link: 'http://google.com'
        },
        {
          id: 3,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: '~/assets/img-4.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem ut metus commodo porttitor facilisis vel turpis. Vivamus id nunc egestas, porttitor odio id, fermentum lorem. In viverra fringilla erat vitae maximus.',
          link: 'http://google.com'
        },
        {
          id: 4,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: '~/assets/img-5.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem ut metus commodo porttitor facilisis vel turpis. Vivamus id nunc egestas, porttitor odio id, fermentum lorem. In viverra fringilla erat vitae maximus.',
          link: 'http://google.com'
        },
        {
          id: 5,
          fullName: 'Toni Gashi',
          job: 'Chief Technology Officer',
          image: '~/assets/img-6.jpg',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed sem ut metus commodo porttitor facilisis vel turpis. Vivamus id nunc egestas, porttitor odio id, fermentum lorem. In viverra fringilla erat vitae maximus.',
          link: 'http://google.com'
        }
      ],
      teamListCard: {}
    }
  },
  created () {
    console.log(this.teamList)
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
