import { ref } from "vue"
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore("todoList", () => {
    const todoList = ref([
        {
            name: "Wash the dishes",
            id: 0,
            finished: true
        },
        {
            name: "Clean vacuum cleaner",
            id: 1,
            finished: false
        }
    ])

    const projectList = ref([
        {
            title: "Adbros",
            id: 0
        }, 
        {
            title: "PMI",
            id: 1
        }
    ])

    const id = ref(2)
    const showProjectInput = ref(false)

    function triggerProjectInput() {
        if (showProjectInput.value === false) {
            showProjectInput.value = true
        } else {
            showProjectInput.value = false
        }
    }

    function triggerFinishedTask(taskId) {
        let todoListToMutate = todoList.value

        for (let i = 0; i < todoListToMutate.length; i++) {
            if (taskId.id.value == todoListToMutate[i].id) {
                return { ...(todoListToMutate[i].finished = !todoListToMutate[i].finished) }
            }
        }

        todoList.value = todoListToMutate
    }

    function addProject(project) {
        if (project.value == '') {
            return
        }

        const newProject = {
            title: project.value,
            id: id.value++,
        }

        projectList.value = [...projectList.value, newProject]

        triggerProjectInput()
    }

    function deleteProject(projectId) {
        // added a dialog window with reasurring
        if (window.confirm("Do you really want to delete this project?")) {
            projectList.value = projectList.value.filter((project) => {
                return project.id != projectId.projectId.value
            })
        }
    }

    return {
        todoList,
        projectList,
        showProjectInput,
        triggerProjectInput,
        addProject,
        triggerFinishedTask,
        deleteProject
    }
})