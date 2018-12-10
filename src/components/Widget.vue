<template>
    <div style="text-align:center;height:600px">
        <section id="Edges">
            <img src="../assets/Edges.png" alt="" id="Edge">
            <img src="../assets/RaceBook.png" alt="" id="RaceBook" v-on:click="RaceBookActivate">
            <img src="../assets/Video.png" alt="" id="VideoShortcut" v-on:click="VideoActivate">
            <img src="../assets/WeatherForecast.png" alt="" id="WeatherForecast" v-on:click="WeatherActivate">
            <img src="../assets/Photo.png" alt="" id="PhotoShortcut" v-on:click="PhotoActivate">
        </section>
        <img src="../assets/WidgetBackground.png" id="BackgroundImage"> 
        <!-- v-if ile hangisinin gozukecegine iyi karar vermemiz gerekiyor -->
        <section id="Widget">
            <div id="Photo">
            <!-- Burada bir v-for olacak Foto ve verileri alacagiz -->
            <div id="LeftSide">
                <img src="../assets/1.jpg" alt="">
                    <p id="Writer">Yazar</p>
                    <p id="Header">Baslik</p>
                    <p id="Content">Lorem Ipsum Dolor sit ames.</p>
            </div>
            <div>
                <img src="../assets/2.jpg" alt="" id="RightUpperSide">
                <img src="../assets/Ileri.png" alt="" id="RightNextArrow">
            </div>
            <div>
                <img src="../assets/3.jpg" alt="" id="RightLowerSide">
                <img src="../assets/Geri.png" alt="" id="RightBackArrow">
            </div>
        </div>
        <div id="Video">
            <!-- Burada bir v-for olacak Foto ve verileri alacagiz -->
            <div id="LeftSideVideo">
                <iframe width="420" height="251" src="https://www.youtube.com/embed/Fam0lbbQMSY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <iframe id="RightUpperVideo" width="200" height="115" src="https://www.youtube.com/embed/kCUG-d9LDEA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div>
                <iframe id="RightLowerVideo" width="200" height="115" src="https://www.youtube.com/embed/YH0CLbp9has" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
        <div id="PDF">
            <img src="../assets/IconPDF.png" alt="" id="LeftPDFIcon">
            <img src="../assets/IconPDF.png" alt="" id="MiddlePDFIcon">
            <img src="../assets/IconPDF.png" alt="" id="RightPDFIcon">
            <p></p>
            <img src="../assets/LeftPDFArrow.png" alt="" id="LeftPDFArrow">
            <img src="../assets/RightPDFArrow.png" alt="" id="RightPDFArrow">
            <p id="PDFText">Lorem Ipsum Dolor Sit Ames</p>
        </div>
        <div id="Weather">
            <img src="../assets/GoldenToy.png" alt="" id="GoldenToy">
            
                    
            <div>
                <span id="WeatherList">{{ Weathers.main.temp }}&#176;</span><br><br>
                <span id="Location">Istanbul,Turkey</span>
                <img :src="WeatherIcon" id="OuterWind">
                <img src="../assets/DikineCizgi.png" id="DikineCizgi">
                <img src="../assets/Wind2.svg" id="OnlyWind">
            </div>
                <span id="WindSpeed">{{ Weathers.wind.speed }}kmh</span>
        </div>
        </section>
        <!-- <section id="PhotoText">
            <span id="PhotoTitle">Photo Title</span><br>
            <span id="PhotoContentLower">Lorem Ipsum Dolor Sit Ames.</span><br>
            <a href="#" id="GalleryLink">Gallery</a>
        </section>-->
        
    </div>
</template>
<script>
    export default {
        name : "Widget",
        data(){
            return {
               Weathers : [],
            }
            
        },
        computed : {
            WeatherIcon : function(){
                return "https://openweathermap.org/img/w/"+this.Weathers.weather[0].icon+".png"
            },
            Tempreture : function(){
                return Math.ceil(this.Weathers[0].main.temp)
            }
        },
        methods : {
            RaceBookActivate : function(){
                document.getElementById("PDF").style.display = "inline";
                document.getElementById("Photo").style.display = "none";
                document.getElementById("Video").style.display = "none";
                document.getElementById("Weather").style.display = "none";
            },
            VideoActivate : function(){
                document.getElementById("PDF").style.display = "none";
                document.getElementById("Photo").style.display = "none";
                document.getElementById("Video").style.display = "inline";
                document.getElementById("Weather").style.display = "none";
            },
            PhotoActivate : function(){
                document.getElementById("PDF").style.display = "none";
                document.getElementById("Photo").style.display = "inline";
                document.getElementById("Video").style.display = "none";
                document.getElementById("Weather").style.display = "none";
            },
            WeatherActivate : function(){
                document.getElementById("PDF").style.display = "none";
                document.getElementById("Photo").style.display = "none";
                document.getElementById("Video").style.display = "none";
                document.getElementById("Weather").style.display = "inline";
            }
        },
        created(){
            fetch('http://api.openweathermap.org/data/2.5/weather?id=745044&APPID=0fe2878295c119c3ef597b7c430f7910&lang=tr&units=metric')
            .then((res) => {return res.json()})
            .then((res) => {this.Weathers = res})
        }
    }
    
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        max-width: 1280px;
    }
    p{
        padding: 0;
        margin: 0;
    }
    #BackgroundImage{
        display: block;
        margin-left: auto;
        margin-right: auto;
        
    }
    #Edges{
        margin: 0 auto;
        max-width: 506px;
        
    }
    #RaceBook{
        position: relative;
        left: 265px;
        bottom: 65px;
        cursor: pointer;
    }
    #WeatherForecast{
        position: relative;
        left: 50px;
        bottom: 65px;
        cursor: pointer;
    }
    #PhotoShortcut{
        position: relative;
        right: 136px;
        bottom: 65px;
        cursor: pointer;
    }
    #VideoShortcut{
        position: relative;
        right: 140px;
        bottom: 65px;
        cursor: pointer;
    }
    #LeftSideVideo{
        position: relative;
        top: 66px;
        left: -70px;
    }
    #RightUpperVideo{
        position: relative;
        bottom: 188px;
        left: 268px;
    }
    #RightLowerVideo{
        position: relative;
        bottom: 170px;
        left: 270px;
    }
    #Widget {
        margin: 0 auto;
        position: relative;
        bottom: 395px;
    }
    #Photo{
        display: inline;
    }
    #Video{
        display: none;
    }
    #PDF{
        display: none;
        position: relative;
        right: 10px;
    }
    #Weather{
        display: none;
    }
    
    #LeftSide img{
        width: 420px;
        height: 251px;
        position: relative;
        left: -70px;
        top: 66px;
    }
    #LeftSide p{
        position: relative;
        bottom: 0px;
        right: 190px;
    }
    #Writer{
        font-size: 12px;
        letter-spacing: 0px;
        line-height: 18px;
        color: #fbb813;
        font-family: "Josefin Sans";
        
    }
    #Header{
        font-size: 12px;
        letter-spacing: 0px;
        line-height: 18px;
        color: #fbb813;
        font-family: "Josefin Sans";
    }
    #Content{
        font-size: 12px;
        letter-spacing: 0px;
        line-height: 16px;
        color: #fbb813;
        font-family: "Josefin Sans";
    }
    #RightUpperSide{
        width: 200px;
        height: 115px;
        position: relative;
        left: 278px;
        top: -240px;
    }
    #RightNextArrow{
        position: relative;
        bottom: 280px;
        left: 160px;
    }

    #RightLowerSide{
        width: 200px;
        height: 115px;
        position: relative;
        left: 278px;
        top: -223px;
    }
    #RightBackArrow{
        position: relative;
        bottom: 260px;
        left: 160px;
    }
    #LeftPDFIcon{
        position: relative;
        right: 30px;
        top: 150px;
    }
    #MiddlePDFIcon{
        width: 85px;
        height: 120px;
        position: relative;
        top:150px;
        left: 40px;
    }
    #RightPDFIcon{
        position: relative;
        top: 150px;
        left: 110px;
    }
    #LeftPDFArrow{
        position: relative;
        top: 170px;
        left: 25px;
    }
    #RightPDFArrow{
        position: relative;
        top: 170px;
        left: 50px;
    }
    #PDFText{
        position: relative;
        bottom: 40px;
        left: 46px;
        font-size: 20px;
        letter-spacing: 1px;
        line-height: 26px;
        color: #ffffff;
        font-family: "Josefin Sans";
        text-align: center;
    }
    #GoldenToy{
        position: relative;
        top: 50px;
        right: 70px;
    }
    #WeatherList{
        font-size: 86px;
        line-height: 46px;
        color: #fbb916;
        font-family: "Josefin Sans";
        position: relative;
        bottom: 190px;
        left: 250px;
    }
    #Derece{
        font-size: 40px;
        line-height: 46px;
        color: #fbb916;
        font-family: "Josefin Sans";
        position: relative;
        bottom: 30px;
    }
    #Location{
        font-size: 20px;
        line-height: 46px;
        color: #fbb916;
        font-family: "Josefin Sans";
        position: relative;
        bottom: 270px;
        left: 317px;
    }
    #WindAndIcon{
        display: flex;
        justify-content: center;
        position: relative;
        left: 220px;
        bottom: 200px;
        list-style-type: none;
    }
    #OnlyWind{
        width: 100px;
        height: 100px;
        position: relative;
        bottom: 140px;
        left: 190px;
    }
    #OuterWind{
        position: relative;
        bottom: 190px;
        left: 180px;
    }
    #DikineCizgi{
        position: relative;
        bottom: 170px;
        left: 194px;
    }
    #WindSpeed{
        font-size: 20px;
        line-height: 46px;
        color: #fbb916;
        font-family: "Josefin Sans";
        position: relative;
        bottom: 224px;
        left: 293px;
    }
    #GalleryLink{
        font-size: 15px;
        line-height: 17px;
        color: #fbb813;
        font-family: "Josefin Sans";
    }
    #PhotoContentLower{
        width: 602px;
        height: 88px;
        font-size: 13px;
        line-height: 17px;
        color: #58595b;
        font-family: "Josefin Sans";
    }
    #PhotoTitle{
        font-size: 25px;
        line-height: 104px;
        color: #055388;
        font-family: "Josefin Sans";
    }
    #PhotoText{
        text-align: left;
        position: relative;

    }
</style>