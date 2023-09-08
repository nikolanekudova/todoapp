<script setup>
import { CalendarDay, CalendarAlt } from '@vicons/fa'
</script>

<template>
  <div id="menu-wrapper">
    <div id="header-wrapper">
      <h1>Todoapp</h1>
    </div>
    <div id="overview-wrapper">
      <div class="header-menu-wrapper">Overview</div>
      <div class="items-menu-wrapper">
        <div class="item-menu-wrapper">
          <CalendarDay class="menu-icon" />
          <div class="item-menu">Today</div>
        </div>
        <div class="item-menu-wrapper">
          <CalendarAlt class="menu-icon" />
          <div class="item-menu">Upcoming</div>
        </div>

      </div>
    </div>
    <div id="projects-wrapper">
      <div class="header-menu-wrapper">Projects</div>
      <div class="items-menu-wrapper">
        <div class="item-menu">Adbros</div>
        <div class="item-menu">PMI</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#menu-wrapper {
  background-color: rgb(39, 24, 126);
  color: rgb(180, 175, 207);
  padding: 40px 0px 0px 40px;
  min-width: 200px;
}

.header-menu-wrapper {
  color: rgb(210, 206, 237);
  font-size: 22px;
  padding: 35px 0px 15px 10px;
}

.items-menu-wrapper {
  padding-left: 20px;
}

.item-menu-wrapper, .item-menu {
  display: flex;
  gap: 10px;
  font-size: 18px;
  padding: 5px 0px 5px 0px;
}

.item-menu-wrapper:hover, .item-menu:hover {
  color: rgb(241, 242, 246);
  cursor: pointer;
}

.menu-icon {
  width: 18px;
}

.menu-icon:hover {
  color: rgb(241, 242, 246);
  cursor: pointer;
}

h1 {
  color: rgb(241, 242, 246);
  font-size: 38px;
}
</style>
