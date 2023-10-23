<template>
  <div id="menu-wrapper">
    <div id="header-wrapper">
      <h1>Todoapp</h1>
    </div>
    <div id="overview-wrapper">
      <div class="header-menu-wrapper">Overview</div>
      <div class="items-menu-wrapper">
        <div class="item-menu-wrapper" @click="store.setTodayActivePage">
          <CalendarDay class="menu-icon" />
          <div class="item-menu">Today</div>
        </div>
        <div class="item-menu-wrapper" @click="store.setUpcomingActivePage">
          <CalendarAlt class="menu-icon" />
          <div class="item-menu">Upcoming</div>
        </div>
      </div>
    </div>
    <div id="projects-wrapper">
      <div class="projects-plus-wrapper">
        <div class="header-menu-wrapper">Projects</div>
      </div>
      <div class="items-menu-wrapper">
        <ItemMenu
          v-for="project in projectList"
          :key="project.id"
          :name="project.title"
          :id="project.id"
          @deleteProject="deleteProject"
          @click="store.setActivePage(project.title)"
        />
      </div>
      <div
        class="icon-add-wrapper"
        v-if="store.showProjectInput == false"
        @click="store.triggerProjectInput"
      >
        <Add12Filled id="icon-add" />
        <p>add new project</p>
      </div>
      <div class="project-input-wrapper" v-if="store.showProjectInput">
        <input type="text" id="project-input" v-model="title" />
        <div class="btns-wrapper">
          <button id="btn-add" @click="addProject">add</button>
          <button id="btn-cancel" @click="cancelAddingProject">cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '../stores/store'
import { CalendarDay, CalendarAlt } from '@vicons/fa'
import { Add12Filled } from '@vicons/fluent'
import ItemMenu from './ItemMenu.vue'

const store = useTodoListStore()
const { projectList } = storeToRefs(store)
const title = ref('')

function addProject() {
  store.addProject(title)
  title.value = ''
}

function cancelAddingProject() {
  store.triggerProjectInput()
}

function deleteProject(projectId) {
  store.deleteProject(projectId)
}


</script>

<style scoped>
#menu-wrapper {
  background-color: rgb(39, 24, 126);
  color: rgb(180, 175, 207);
  padding: 40px 0px 0px 40px;
  min-width: 230px;
}

.header-menu-wrapper {
  color: rgb(210, 206, 237);
  font-size: 22px;
  padding: 35px 0px 15px 10px;
}

.items-menu-wrapper {
  padding-left: 20px;
}

.item-menu-wrapper,
.item-menu {
  display: flex;
  gap: 10px;
  font-size: 18px;
  padding: 5px 0px 5px 0px;
}

.item-menu-wrapper:hover,
.item-menu:hover {
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

.projects-plus-wrapper {
  display: flex;
  justify-content: space-between;
}

.icon-add-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  padding-left: 7px;
  padding-top: 15px;
}

.icon-add-wrapper:hover {
  color: rgb(241, 242, 246);
  cursor: pointer;
}

#icon-add {
  max-width: 18px;
}

.project-input-wrapper {
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 15px;
}

#project-input {
  max-width: 70%;
  padding: 5px 10px;
  background-color: rgb(241, 242, 246);
  border: none;
}

#btn-add,
#btn-cancel {
  background-color: rgb(219, 90, 186);
  padding: 5px 10px;
  color: rgb(241, 242, 246);
  border-radius: 3px;
}

#btn-add {
  background-color: rgb(219, 90, 186);
  width: 50px;
  border: none;
}

#btn-add:hover {
  background-color: rgb(215, 64, 177);
}

#btn-cancel {
  background-color: rgb(39, 24, 126);
  width: 70px;
  border: 1px solid rgb(241, 242, 246);
}

#btn-cancel:hover {
  background-color: rgb(19, 1, 125);
}

.btns-wrapper {
  display: flex;
  gap: 10px;
}

h1 {
  color: rgb(241, 242, 246);
  font-size: 38px;
}
</style>
