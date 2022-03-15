//PAREI NO MIN 1:03:40
//https://www.youtube.com/watch?v=w7ejDZ8SWv8

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {
  fetchTasks,
  deleteTaskById,
  includeTask,
  fetchTask,
  updateTask
} from './services/taskService'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])


  //Add Task
  const addTask = async (task) => {
    await includeTask({ ...task, id: tasks.length + 1 })

    setTasks([
      ...tasks,
      { ...task, id: tasks.length + 1 }
    ])
    setShowAddTask(false)
  }

  // Delete Task
  const deleteTask = async (id) => {
    await deleteTaskById(id)

    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    await updateTask(updTask)

    const tasksFromServer = await fetchTasks()

    setTasks(tasksFromServer)
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'
      }
      <Footer />
    </div>
  )
}

export default App
