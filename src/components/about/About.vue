<template>
<div>
  <q-card flat
        square
        dark
        id="about-2">

    <div id="content-container"
        class="text-no-wrap">

      <q-card-section class="row justify-between">

        <div class="col">
          <q-img src='../../assets/about-us-2.png' style="width:30rem;"></q-img>
        </div>
        <div class="text-h3 col
            text-weight-bold q-mb-xs" style="color:rgba(25,83,69,1)">
          {{$t('label.aboutCard.aim')}}
          <h5 class="q-mt-lg text-weight-bold">{{$t('label.aboutCard.aim_subtext')}}</h5>
        </div>

      </q-card-section>
    </div>

    <div>
      <q-separator color="green-10" spaced="lg" style="height:0.3rem; width:30rem; margin:auto"/>

      <h3 class="q-mt-xl q-mb-xl text-weight-bold" style="color:rgba(25,83,69,1); text-align:center;">{{$t('label.aboutCard.more')}}</h3>

      <q-separator color="green-10" spaced="lg" style="height:0.3rem; width:30rem; margin:auto"/>
    </div>

    <div class="our-team-container q-mt-xl" style="color:rgba(25,83,69,1)">
      <div class="row justify-around">
        <div class="col-md-3">
          <div class="card-box text-center">
            <div class="user-pic">
              <q-img src="../../assets/img-1.jpg" class="img-fluid" alt="User Pic"></q-img>
            </div>
            <h4 class="text-weight-bold">Toni Gashi</h4>
            <h6 class="text-weight-bold">Web Designer</h6>
            <hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <hr>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-box text-center">
            <div class="user-pic">
              <q-img src="../../assets/img-2.jpg" class="img-fluid" alt="User Pic"></q-img>
            </div>
            <h4 class="text-weight-bold">Satyam Tiwari</h4>
            <h6 class="text-weight-bold">Web Developer</h6>
            <hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <hr>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-box text-center">
            <div class="user-pic">
              <q-img src="../../assets/img-3.jpg" class="img-fluid" alt="User Pic"></q-img>
            </div>
            <h4 class="text-weight-bold">Salim Malik</h4>
            <h6 class="text-weight-bold">Front End Developer</h6>
            <hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <hr>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>
      </div>
      <div class="row justify-around">
        <div class="col-md-3">
          <div class="card-box text-center">
            <div class="user-pic">
              <q-img src="../../assets/img-4.jpg" class="img-fluid" alt="User Pic"></q-img>
            </div>
            <h4 class="text-weight-bold">Toni Gashi</h4>
            <h6 class="text-weight-bold">Web Designer</h6>
            <hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            <hr>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-box text-center">
            <div class="user-pic">
              <q-img src="../../assets/img-5.jpg" class="img-fluid" alt="User Pic"></q-img>
            </div>
            <h4 class="text-weight-bold">Satyam Tiwari</h4>
            <h6 class="text-weight-bold">Web Developer</h6>
            <hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <hr>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>

        <div class="col-md-3">
          <div class="card-box text-center">
            <div class="user-pic">
              <q-img src="../../assets/img-6.jpg" class="img-fluid" alt="User Pic"></q-img>
            </div>
            <h4 class="text-weight-bold">Salim Malik</h4>
            <h6 class="text-weight-bold">Front End Developer</h6>
            <hr>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <hr>
            <a href="#" class="btn btn-primary">Know More</a>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</div>
</template>

<script>
</script>

<style lang="sass" scoped>

@keyframes fadeIn
  from
    opacity: 0
  to
    opacity: 0.8

#about-2
  padding-top: 10.5rem
  padding-bottom: 6rem
  position: relative
  background: #FFFFFF

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
  transform: rotate(-30deg)
  transition: 0.5s

.card-box:hover .user-pic
    transform: rotate(0deg)
    transform: scale(1.1)

.card-box
    padding: 15px
    background-color: #fdfdfd
    margin: 20px 0px
    border-radius: 10px
    border: 1px solid #eee
    box-shadow: 0px 0px 8px 0px #d4d4d4
    transition: 0.5s

.card-box:hover
  border: 1px solid #007bff

.card-box p
    color: #808080

</style>
