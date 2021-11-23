<template>
<q-card flat
        square
        dark
        id="header-card">

    <div id="content-container"
         class="text-no-wrap">

      <q-card-section>

        <div class="text-h5 text-uppercase
               text-weight-bold q-mb-xs">
          Trusted fundraising for sustainable projects
        </div>

        <div class="text-h6 text-italic text-weight-regular">
          Start in just 5 minutes
        </div>

      </q-card-section>

      <q-card-section>

        <q-btn size="lg"
               unelevated
               color="secondary">

          <div class="text-weight-bold">
            Start Investing
          </div>

        </q-btn>

      </q-card-section>

    </div>

</q-card>
</template>

<script>
export default {
  name: 'HeaderCard'
}
</script>

<style lang="sass" scoped>

#header-card
  background: $header
  padding-top: 10.5rem
  padding-bottom: 6rem

#content-container
  margin-left: 10%

</style>
