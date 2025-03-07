<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="navbar-header">
      <div class="logo-container">
        <img class="logo" src="https://imgur.com/TyLFHJz.png" alt="#" height="30">
      </div>



      <ul class="menu">
        <li><a href="App.vue">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: #ffffff;
  transition: all ease 0.4s;
}

.navbar-header {
  padding: 10px 15px;
  background-color: #ffffff;
  transition: all ease 0.4s;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo-container {
  flex: 1;
  display: flex;
  justify-content: flex-start;
}

.logo {
  height: 50px; 
  width: auto;
  max-width: 100%;
  object-fit: contain;
}


.menu {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 20;
  font-size: 16px;
  margin: 0;
  flex: 1;
  justify-content: flex-end;
}

.menu li a {
  text-decoration: none;
  color: rgb(115,90,89);
}

.animate {
  padding: 10px 10px;
  background-color: #f8f8f8;
  transition: all ease 0.4s;
}

</style>
