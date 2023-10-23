<template>
  <div id="page-wrapper-scroll">
    <div id="page-wrapper">
      <div>
        <p>Project:</p>
        <div id="project-btn-wrapper">
          <div id="project-name">{{ store.activePage }}</div>
          <AddCircle16Filled id="icon-add-task" color="#27187E" />
        </div>
        <div id="tasks-btn-wrapper">
          <div id="tasks-header">Tasks</div>
          <CalendarClock24Regular id="icon-due-date" color="#6b6f72" />
        </div>
      </div>
      <div id="tasks-wrapper">
        <TodoTask
          v-for="todo in getRelevantTodos"
          :key="todo.id"
          :name="todo.name"
          :finished="todo.finished"
          @finishTask="triggerFinishedTask"
          :id="todo.id"
          :dueDate="todo.dueDate"
        />
      </div>
      <div id="notes-header">Notes</div>
      <VueEditor v-model="getRelevantNotes[0].notes" />

      <!-- MODAL WINDOW -->
      <div id="modal">
        <div id="modal-content">
          <p>Add new todo</p>
          <div id="form-wrapper">
            <div class="form-item">
              <label for="todo-name">name</label>
              <input name="todo-name" type="text" />
            </div>
            <div class="form-item">
              <label for="todo-project">project</label>
              <select name="todo-project">
                <option disabled value="">Please select one</option>
                <option v-for="project in projectList" :value="project.title" v-bind:key="project.id">
                  {{ project.title }}
                </option>
              </select>
            </div>
            <div class="form-item">
              <label for="todo-duedate">due date</label>
              <input name="todo-duedate" type="date" v-model="newTodo.dueDate" />
            </div>
            <div class="form-item">
              <Flag24Regular class="icon-form" />
              <select name="todo-priority">
                <option disabled value="">Please select one</option>
                <option value="low">low</option>
                <option value="medium">medium</option>
                <option value="high">high</option>
              </select>
            </div>
          </div>
          <div id="btns-wrapper">
            <button id="btn-add">add</button>
            <button id="btn-cancel">cancel</button>
          </div>
          {{ newTodo.dueDate }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import TodoTask from './TodoTask.vue'
import { storeToRefs } from 'pinia'
import { VueEditor } from 'vue3-editor'
import { useTodoListStore } from '../stores/store'
import { AddCircle16Filled, Flag24Regular, CalendarClock24Regular } from '@vicons/fluent'

const store = useTodoListStore()
const { getRelevantTodos, getRelevantNotes } = storeToRefs(store)
const { projectList } = storeToRefs(store)

const newTodo = ref({
      name: '',
      id: 3,
      project: '',
      priority: '',
      dueDate: '',
      finished: false
})

console.log(newTodo)

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

#page-wrapper-scroll {
  overflow: scroll;
  width: 100%;
}

#page-wrapper {
  padding: 40px 0 30px 55px;
  max-width: 50vw;
}

#project-name {
  font-size: 35px;
  font-weight: 600;
  color: rgb(39, 24, 126);
}

#tasks-wrapper {
  padding-top: 20px;
}

#tasks-header,
#notes-header {
  font-size: 20px;
  font-weight: 600;
  color: rgb(39, 24, 126);
}

#notes-header {
  padding-top: 50px;
  padding-bottom: 20px;
}

#icon-add-task {
  width: 32px;
}

#icon-add-task:hover {
  cursor: pointer;
  color: rgb(219, 90, 186);
}

#icon-due-date {
  width: 22px;
  padding-right: 5px;
}

#tasks-btn-wrapper {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#project-btn-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);

}

#modal-content {
  background-color: white;
  width: 30%;
  position: absolute;
  top: 20%;
  left: 35%;
  padding: 20px 30px;
}

#form-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  max-width: 250px;
}

select {
  max-width: 150px;
}

#btns-wrapper {
  padding-top: 20px;
  display: flex;
  gap: 10px;
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

.icon-form {
  max-width: 20px;
}

</style>
