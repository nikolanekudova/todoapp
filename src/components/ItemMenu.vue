<template>
  <div class="item-menu-wrapper">
    <div class="item-menu">
      {{ name }}
    </div>
    <Delete16Regular class="icon-delete" @click="deleteProject" />
  </div>
</template>

<script setup>
import { ref } from "vue"
import { Delete16Regular } from '@vicons/fluent'

const props = defineProps({
  name: String,
  id: Number
})
const emit = defineEmits(['deleteProject'])
const projectId = ref(props.id)

function deleteProject() {
  emit('deleteProject', { projectId })
}
</script>

<style scoped>
.item-menu-wrapper,
.item-menu {
  display: flex;
  gap: 10px;
  font-size: 18px;
  padding: 5px 0px 5px 0px;
  justify-content: space-between;
  align-items: center;
}

.item-menu-wrapper {
  &:hover {
    .icon-delete {
      display: block;
    }
  }
}

.icon-delete {
  width: 25px;
  padding-right: 40px;
  display: none;
}

.icon-delete:hover {
  color: rgb(219, 90, 186);
}
</style>
