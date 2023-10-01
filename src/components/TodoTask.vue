<template>
  <div class="task-wrapper">
    <CheckboxUnchecked24Regular
      color="#27187E"
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
</template>

<script setup>
import { ref } from 'vue'
import { CheckboxUnchecked24Regular, CheckboxChecked24Regular } from '@vicons/fluent'

const emit = defineEmits(['finishTask'])
const props = defineProps({
  name: String,
  finished: Boolean,
  id: Number
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
</style>
