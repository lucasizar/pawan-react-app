//PAREI NO MIN 1:03:40
//https://www.youtube.com/watch?v=w7ejDZ8SWv8

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
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
  const [loading, setLoading] = useState(true)
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      setLoading(true)
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
      setLoading(false)
    }

    getTasks()
  }, [])


  //Add Task
  const addTask = async (task) => {
    setLoading(true)

    const taskResult = await includeTask({ ...task })
    console.log('taskResult', taskResult)
    setTasks([...tasks, taskResult])
    setShowAddTask(false)

    setLoading(false)
  }

  // Delete Task
  const deleteTask = async (id) => {
    setLoading(true)
    await deleteTaskById(id)

    setTasks(tasks.filter(task => task.id !== id))
    setLoading(false)
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    setLoading(true)

    const taskToToggle = await fetchTask(id)

    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    await updateTask(updTask)

    const tasksFromServer = await fetchTasks()

    setTasks(tasksFromServer)

    setLoading(false)
  }

  return (
    <Router>
      <div className="container">
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} loading={loading} />
        <Routes>
          <Route path="/" element={
            <>
              {!loading && <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {
                  tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'
                }
              </>}

              {loading && <>
                <span>Loading...</span>
              </>}
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer loading={loading} />
      </div>
    </Router>
  )
}

export default App
