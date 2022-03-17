const fetchTasks = async () => {
    const res = await fetch('http://localhost:3001/tasks')
    const data = await res.json()

    return data
}

const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:3001/tasks/${id}`, )
    const data = await res.json()

    return data
}

const deleteTaskById = async (id) => {
    await fetch(`http://localhost:3001/tasks/${id}`, { method: 'DELETE'})
}

const includeTask = async (task) => {
    const fetchResult = await fetch(`http://localhost:3001/tasks`, {
        method: 'POST' ,
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(task)
    })

    const taskResult = await fetchResult.json()

    return taskResult
}

const updateTask = async (task) => {
    await fetch(`http://localhost:3001/tasks/${task.id}`, {
        method: 'PUT' ,
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(task)
    })
}


export {
    fetchTasks,
    fetchTask,
    deleteTaskById,
    includeTask,
    updateTask
};