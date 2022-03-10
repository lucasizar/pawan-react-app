//PAREI NO MIN 1:03:40
//https://www.youtube.com/watch?v=w7ejDZ8SWv8

import { useState } from "react"
import defaultTasks from './util/tasks.json'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState(defaultTasks)

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id)
          return { ...task, reminder: !task.reminder }

        return task
      })
    )
  }

  return (
    <div className="container">
      <Header />
      {
        tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'
      }
    </div>
  )
}

export default App;
