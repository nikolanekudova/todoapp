<template>
  <div id="page-wrapper">
    <div>
      <p>Project:</p>
      <div id="project-name">Today</div>
    </div>
    <div id="tasks-wrapper">
      <TodoTask
        v-for="todo in todoList"
        :key="todo.id"
        :name="todo.name"
        :finished="todo.finished"
        @finishTask="triggerFinishedTask"
        :id="todo.id"
      />
    </div>
  </div>
</template>

<script setup>
import TodoTask from './TodoTask.vue'
import { storeToRefs } from 'pinia'
import { useTodoListStore } from '../stores/store'

const store = useTodoListStore()
const { todoList } = storeToRefs(store)

function triggerFinishedTask(taskID) {
  store.triggerFinishedTask(taskID)
}

defineProps({ id: Number })
</script>

<style scoped>
p {
  padding-bottom: 10px;
  font-size: 15px;
  color: rgb(107, 111, 114);
}

#page-wrapper {
  padding: 40px 0 30px 55px;
}

#project-name {
  font-size: 35px;
  font-weight: 600;
  color: rgb(39, 24, 126);
}

#tasks-wrapper {
  padding-top: 30px;
}
</style>
