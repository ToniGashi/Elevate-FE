<template>
<q-page padding>
  <q-card flat
          square
          id="about-us"
          class="text-primary">

      <q-card-section class="row flex-center">

          <q-img src='~/assets/about-us-2.png'
                 style="max-width: 30rem"
                 class="col-lg-5"
                 no-spinner/>

        <div class="col-lg-7 col-sm-12 text-h5 q-mx-auto">

        <div class="text-weight-bold">
          {{$t('label.aboutCard.aim')}}
        </div>

        <div class="q-mt-md text-weight-medium">
          {{$t('label.aboutCard.aim_subtext')}}
        </div>

        </div>

      </q-card-section>

    <q-card-section id="vision"
                    class="q-mt-sm text-center">

      <q-separator class="q-mx-auto"
                   style="height:0.3rem;
                   width: 75%"
                   color="primary"
                   spaced/>

      <div class="text-weight-bold text-h3 q-my-xl">
        {{$t('label.aboutCard.vision')}}
      </div>

      <q-separator class="q-mx-auto"
                   style="height:0.3rem;
                   width: 75%;"
                   color="primary"
                   spaced/>

    </q-card-section>

      <q-card-section class="q-mt-lg text-center">

        <div class="text-weight-bold text-h3 q-mb-lg">
          {{$t('label.aboutCard.team')}}
        </div>

        <standard-grid :data="teamList"
                       :component="teamListCard"/>

      </q-card-section>
  </q-card>
</q-page>
</template>

<script>
import StandardGrid from 'components/grids/StandardGrid.vue'
import { defineAsyncComponent, shallowRef } from 'vue'

export default {
  name: 'About',
  components: { StandardGrid },
  data () {
    return {
      teamList: [
        {
          id: 0,
          fullName: 'Toni Gashi',
          job: 'Chief Executive Officer',
          image: 'toni-gashi',
          description: 'Hi, my name is Toni. I love long walks, ' +
                       'especially when there is a beautiful view by my side. ' +
                       'I enjoy solving hard problems and watching FRIENDS.',
          link: '/'
        },
        {
          id: 1,
          fullName: 'Martin Mitev',
          job: 'Chief Technology Officer',
          image: 'martin-mitev',
          description: 'Martin is a programmer, a student at AUBG, ' +
                       'and an aspiring entrepreneur. He\'s known for ' +
                       'his dedication and tendency to think big, ' +
                       'demonstrated by his favorite quote: ' +
                       '"I think, therefore I am."',
          link: '/'
        },
        {
          id: 2,
          fullName: 'Lazaron Shyta',
          job: 'Chief Information Officer',
          image: 'lazaron-shyta',
          description: 'Lazaron is a software engineer and a graduating student at AUBG. ' +
                       'He has a competitive spirit when it comes to solving hard problems ' +
                       'and is a fan of team work.',
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
