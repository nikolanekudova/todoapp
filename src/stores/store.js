import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', () => {
  const todoList = ref([
    {
      name: 'No project: Wash the dishes',
      id: 0,
      project: '',
      priority: 'low',
      dueDate: '2023-10-11',
      finished: true
    },
    {
      name: 'Clean vacuum cleaner',
      id: 1,
      project: 'Home',
      priority: 'low',
      dueDate: '2023-10-11',
      finished: false
    },
    {
      name: 'Adbros test',
      id: 2,
      project: 'Adbros',
      priority: 'low',
      dueDate: '2023-10-11',
      finished: false
    },
    {
      name: 'PMI test',
      id: 3,
      project: 'PMI',
      priority: 'low',
      dueDate: '2023-10-11',
      finished: false
    }
  ])

  const projectList = ref([
    {
      title: 'Home',
      id: 0
    },
    {
      title: 'Adbros',
      id: 1
    },
    {
      title: 'PMI',
      id: 2
    }
  ])

  const notesList = ref([
    {
      project: 'Today',
      notes: '<h2>Todays notes</h2><br><p><strong>what to buy:</strong></p><ul><li>milk</li><li>apples</li></ul>'
    },
    {
      project: 'Upcoming',
      notes: '<h2>Upcoming notes</h2><br><p><strong>what to buy:</strong></p><ul><li>milk</li><li>apples</li></ul>'
    },
    {
        project: 'Home',
        notes: ''
      },
    {
      project: 'Adbros',
      notes: '<h2>Adbros social media</h2><br><p><strong>this week:</strong></p><ul><li>blah blah</li><li>blah blah</li></ul>'
    },
    {
      project: 'PMI',
      notes: ''
    }
  ])

  const taskId = ref(4)
  const projectId = ref(3)
  const showProjectInput = ref(false)
  const activePage = ref('Today')
  const todaysDate = new Date()



  console.log(todaysDate)

  function setActivePage(page) {
    activePage.value = page
  }

  function setTodayActivePage() {
    activePage.value = 'Today'
  }

  function setUpcomingActivePage() {
    activePage.value = 'Upcoming'
  }

  const getRelevantTodos = computed(() => {
    let toDoListToDisplay = todoList.value

    if (activePage.value == 'Today') {
      return toDoListToDisplay
      // return toDoListToDisplay.filter((todo) => {
      //     todo.dueDate <= todaysDate
      //})
    } else if (activePage.value == 'Upcoming') {
      return toDoListToDisplay
      // return toDoListToDisplay.filter((todo) => {
      //     todo.dueDate >= todaysDate
      //})
    } else {
      return toDoListToDisplay.filter(todo => todo.project == activePage.value)
    }
  })

  const getRelevantNotes = computed(() => {
    let notesToDisplay = notesList.value

    return notesToDisplay.filter(notes => notes.project == activePage.value)
  })

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
      id: projectId.value++
    }

    projectList.value = [...projectList.value, newProject]

    triggerProjectInput()
  }

  function deleteProject(projectId) {
    // added a dialog window with reasurring
    if (window.confirm('Do you really want to delete this project?')) {
      projectList.value = projectList.value.filter((project) => {
        return project.id != projectId.projectId.value
      })
    }
  }

  return {
    todoList,
    projectList,
    notesList,
    activePage,
    setActivePage,
    setTodayActivePage,
    setUpcomingActivePage,
    getRelevantTodos,
    getRelevantNotes,
    showProjectInput,
    triggerProjectInput,
    addProject,
    triggerFinishedTask,
    deleteProject
  }
})
