<template>
    <section class="AllNavigation">
    <nav class="nav-wrapper">
    <div class="container">
      <a href="" class="brand-logo"><img src="../assets/NavigationLogo.png" style="height:40px;width:70px;margin:10px;"></a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger">
          <i class="material-icons" style="color:#055387;font-size:36px">menu</i>
          </a>
      <ul class="right hide-on-med-and-down">
        <li class="NavItems"><a href="sass.html">ANASAYFA</a></li>
        <li class="NavItems"><a href="badges.html">BAUISC</a></li>
        <li class="NavItems"><a href="collapsible.html">GALERİ</a></li>
        <li class="NavItems"><a href="mobile.html">YARIŞLAR</a></li>
        <li class="NavItems"><a href="mobile.html">SPONSORLAR</a></li>
        <li class="NavItems"><a href="mobile.html">TAKIMLAR</a></li>
        <li class="NavItems"><a href="mobile.html">STORE</a></li>
        <li class="NavItems"><a href="mobile.html">VELA KUPASI</a></li>
        <li class="NavItems"><a href="mobile.html">İLETİŞİM</a></li>
      </ul>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li class="NavItems"><a href="sass.html">ANASAYFA</a></li>
        <li class="NavItems"><a href="badges.html">BAUISC</a></li>
        <li class="NavItems"><a href="collapsible.html">GALERİ</a></li>
        <li class="NavItems"><a href="mobile.html">YARIŞLAR</a></li>
        <li class="NavItems"><a href="mobile.html">SPONSORLAR</a></li>
        <li class="NavItems"><a href="mobile.html">TAKIMLAR</a></li>
        <li class="NavItems"><a href="mobile.html">STORE</a></li>
        <li class="NavItems"><a href="mobile.html">VELA KUPASI</a></li>
        <li class="NavItems"><a href="mobile.html">İLETİŞİM</a></li>
        <li class="NavItems"><a href=""><img src="../assets/Facebook.svg" alt=""></a></li>
        <li class="NavItems"><a href=""><img src="../assets/Instagram.svg" alt=""></a></li>
        <li class="NavItems"><a href=""><img src="../assets/Twitter.svg" alt=""></a></li>
        <li class="NavItems"><a href=""><img src="../assets/Youtube.svg" alt=""></a></li>
  </ul>
    </section>
</template>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
export default {
    name : 'Navigation'
}
</script>
<style scoped>
.AllNavigation{
    height: 85px;
    box-shadow: 6px 10.392px 13px rgba(0,1,1,0.14);
    background-color: #f0f2f1;
}
nav{
    background-color: #f5f6f5;
}
.container{
    width: 100%;
}

.NavItems a{
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 61px;
    color: #0f1c36;
    font-family: "Josefin Sans";
    text-align: center;
    font-weight: 600;
}
</style>
