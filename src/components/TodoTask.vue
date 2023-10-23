<template>
  <div>
    <div class="task-wrapper">
      <div class="task-first-row-wrapper">
        <CheckboxUnchecked24Regular
          color="#181B25"
          class="task-icon"
          v-if="finished == false"
          @click="finishTask"
        />
        <CheckboxChecked24Regular
          color="#27187E"
          class="task-icon"
          v-if="finished"
          @click="finishTask"
        />
        <p :class="{ 'finished-task': finished }">{{ name }}</p>
      </div>
      <p class="due-date">{{ dueDate }}</p>
    </div>
    <hr />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxUnchecked24Regular, CheckboxChecked24Regular } from '@vicons/fluent'

const emit = defineEmits(['finishTask'])
const props = defineProps({
  name: String,
  finished: Boolean,
  id: Number,
  dueDate: String
})
const id = ref(props.id)

function finishTask() {
  emit('finishTask', { id })
}
</script>

<style scoped>
.task-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task-first-row-wrapper {
  padding: 5px 0px 5px 0px;
  display: flex;
  align-items: center;
  gap: 10px;
}
.task-icon {
  width: 30px;
}

.task-icon:hover {
  cursor: pointer;
}

.finished-task {
  text-decoration: line-through;
  color: rgb(79, 79, 79);
}

.due-date {
  color: rgb(79, 79, 79);
  font-size: 14px;
  padding-right: 5px;
}

hr {
  border: 0.7px solid rgb(156, 164, 191);
  margin-left: 40px;
}
</style>
