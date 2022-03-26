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
          job: 'Chief Technology Officer',
          image: 'img-1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 1,
          fullName: 'Mihael Trifonov',
          job: 'Chief Executive Officer',
          image: 'img-2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 2,
          fullName: 'Martin Mitev',
          job: 'Front-end Developer',
          image: 'img-3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 3,
          fullName: 'Vasi Stoyanov',
          job: 'Chief Marketing Officer',
          image: 'img-4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          link: '/'
        },
        {
          id: 4,
          fullName: 'Marty Stanchev',
          job: 'Chief Executive Officer',
          image: 'img-5',
          description: 'Lorem ipsum dolor sit ametel turpis.',
          link: '/'
        },
        {
          id: 5,
          fullName: 'Lazaron Shyta',
          job: 'Back-end Developer',
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
