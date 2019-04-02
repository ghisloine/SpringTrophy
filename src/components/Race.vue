<template>
<section class="Total">
  <div class="container" style="padding-top:100px">
      <div class="row">
        <div class="col s12 m6">
          <img src="../assets/SpringTrophyLogo.png" style="width:330px;height:200px" id="TopLogo">
          <!-- Burdaki li icindeki linkler ileride databaseden degistirilir hale gelecek ! -->
          <ul>
            <li><img src="../assets/MenuLeftIcon.png" alt=""><a href="" class="RaceDocs hoverable">Yarış İlanı</a></li>
            <li><img src="../assets/MenuLeftIcon.png" alt=""><a href="" class="RaceDocs hoverable">Kayıt Formu</a></li>
            <li><img src="../assets/MenuLeftIcon.png" alt=""><a href="" class="RaceDocs hoverable">Ek Talimat</a></li>
            <li><img src="../assets/MenuLeftIcon.png" alt=""><a href="" class="RaceDocs hoverable">Sonuçlar</a></li>
          </ul>
        </div>
        <div class="col s12 m6">
          <span id="SpringTrophyInfo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu tortor tempus, feugiat arcu vel, dictum sapien. Vivamus congue justo eget massa luctus, vitae tempor est laoreet. Maecenas consequat eget neque a elementum. Pellentesque interdum eleifend elit, eget gravida orci aliquam a. Donec eget enim ac nunc laoreet lacinia sit amet et enim. Maecenas a venenatis nisl. Nunc eget sem a massa sodales tincidunt in sit amet neque. Nulla malesuada leo eu quam lacinia, quis commodo nibh suscipit. Phasellus erat massa, tempus id justo at, ultrices bibendum erat.
          </span>
          <Countdown></Countdown>
        </div>
      </div>
      <div class="row">
        <div class="col s12 m6 hide-on-small-only">
          <RaceResult></RaceResult>
        </div>
      </div>
          
  </div>
</section>
  
</template>

<script>
// @ is an alias to /src
import Countdown from '@/components/Countdown.vue'
import RaceResult from '@/components/RaceResult.vue'
export default {
  name: 'Race',
  components: {
    Countdown,
    RaceResult
  }
}
</script>
<style scoped>
.Total{
  background-color: #055387;
}
.container{
  background-image: url("../assets/BackgroundTekne.png");
  background-position-y: 340px;
  height: 1200px;
  background-repeat: no-repeat;
}
#SpringTrophyInfo{
  width: 370px;
  height: 160px;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  font-family: "Josefin Sans";
}
.RaceDocs{
  padding-left: 15px;
  font-size: 30px;
  letter-spacing: 4px;
  line-height: 40px;
  color: #ffffff;
  font-family: "Josefin Sans";
}
@media only screen and (max-width: 1200px) {
    .container {
        background: none;
    }
}
</style>

