<template>
    <div class="Countdown">
        <ul id="Count">
            <li class="left"><p class="Text">Day</p><p  class="Number" id="Day">1</p></li> <!-- Gun -->
            <li class="left"><p class="Text">Hour</p><p class="Number" id="Hour">2</p></li> <!-- Saat -->
            <li class="left"><p class="Text">Min.</p><p class="Number" id="Minute">3</p></li> <!-- Dakika -->
            <li class="left"><p class="Text">Sec.</p><p class="Number" id="Second">4</p></li> <!-- Saniye -->
        </ul><br><br>
        <ul id="SocialMediaIcons">
            <li><a href=""><img src="../assets/Facebook.svg" alt=""></a></li>
            <li><a href=""><img src="../assets/Instagram.svg" alt=""></a></li>
            <li><a href=""><img src="../assets/Twitter.svg" alt=""></a></li>
            <li><a href=""><img src="../assets/Youtube.svg" alt=""></a></li>
        </ul>
    </div>
</template>
<script>
var countDownDate = new Date("Mar 23, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  //document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  //+ minutes + "m " + seconds + "s ";
    document.getElementById("Day").innerHTML = days;
    document.getElementById("Hour").innerHTML = hours;
    document.getElementById("Minute").innerHTML = minutes;
    document.getElementById("Second").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
export default {
    name : 'Countdown'
}
</script>

<style scoped>
.Text{
    font-size: 13px;
    letter-spacing: 0px;
    line-height: 0px;
    color: #ffffff;
    font-family: "Josefin Sans";
    text-align: center;
    
}
.Number{
    font-size: 34px;
    letter-spacing: 1px;
    line-height: 20px;
    color: #fcbb1b;
    font-family: "Josefin Sans";
    margin: 20px 0px 0px 0px;
    
}

.left:nth-child(n + 1){
    padding-left: 15px;
    padding-right: 15px;
    border-right: 2px solid #fcbb1b;
}
.left:nth-child(1){
    padding-left: 0px;
}
#SocialMediaIcons{
    padding-top: 15px;
    display:flex;
}
#SocialMediaIcons li{
    padding-right: 20px;
}
@media only screen and (max-width: 600px) {
    #SocialMediaIcons{
        justify-content: center;
        padding-top: 0px;
        
    }
    #Count{
        display: flex;
        justify-content: center;
    }
}
</style>
