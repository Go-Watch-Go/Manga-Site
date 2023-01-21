<template>
  <nav class="navbar navbar-expand-lg bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand logoLink">
        <img src="https://bannerimgbucket.s3.ap-northeast-1.amazonaws.com/logo+copy.png" 
          width="55"
          height="50"
          alt="logo">
          <span class="logoTitle">owatchGo</span>
      </router-link>

      <button
            class="navbar-toggler menus"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span class="navbar-toggler-icon bars"
              ><font-awesome-icon icon="fa-solid fa-bars"/></span>
      </button>

      <div class="collapse navbar-collapse justify-content-end" id="navbarcollapse">
        <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/webtoon" class="mx-2 nav-link">Webtoon</router-link>
            </li>
            <li class="mav-item">
              <router-link to="/manga" class="mx-2 nav-link">Manga</router-link>
            </li>  
        </ul>
      </div>
    </div>   
  </nav>
  <router-view/>
</template>

<script>

export default {
  setup(){

  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"); /*Varela Rounded*/
@import url("https://fonts.googleapis.com/css?family=Fredoka+One:regular");

:root {
  --bg-color: #1e1e1e;
  --title-color: #08eb69;
  --search-color: #e5e5e5;
  --searchBox-color: #808080;
  --normalText-color: #fff;
  --textFixed-color: #08eb69;

  /* for icon  */
  --icon-color: #e5e5e5;
  --ratingIcon-color: #eb088a;
}

body {
  font-family: "Varela Round", sans-serif;
  background-color: var(--bg-color);
  overflow-x: hidden;

  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  -ms-user-select: none;
  user-select: none;
}

.logoLink{
  position: relative;
}

.logoTitle {
  font-family: Fredoka One;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  text-decoration: none;
  color: var(--textFixed-color);

  position: absolute;
  bottom: 10%;
  left: 80%;

}

.menus {
  background-color: #08eb69;
}

.navbar-toggler:focus {
  box-shadow: none;
}

.nav-link {
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: var(--textFixed-color);
  padding:20px 0;
  /* background: #141414; */
}

.nav-link:hover,
.nav-link:active,
.nav-link:focus {
  color: rgba(252, 252, 252, 1);
  transition: 0.5s;
}

</style>
