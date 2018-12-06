<template>
    <div id="Overall">
        <img src="../assets/Overall.png" alt="">
        <ul id="Results">
            <li><span class="TeamsHeader">TEAMS</span><span class="TeamsHeader">RATING</span></li>
        </ul>
    </div>
</template>
<script>
export default {
    name : 'RaceResult'
}
</script>
<style scoped>
#Results{
    position: relative;
    bottom: 231px;
}

.TeamsHeader{
    font-size: 12px;
    letter-spacing: 2px;
    line-height: 8px;
    color: #fbb813;
    font-family: "Josefin Sans";
    text-align: center;
    padding-left: 10px;
    border-bottom: 2px solid #fcbb1b;
}
.Results > li{
    width: 200px;
}
</style>
