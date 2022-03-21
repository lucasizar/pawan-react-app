const API_URL = process.env.REACT_APP_API_URL

const fetchTasks = async () => {
    const res = await fetch(`${API_URL}/tasks`)
    const data = await res.json()

    return data
}

const fetchTask = async (id) => {
    const res = await fetch(`${API_URL}/tasks/${id}`, )
    const data = await res.json()

    return data
}

const deleteTaskById = async (id) => {
    await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE'})
}

const includeTask = async (task) => {
    const fetchResult = await fetch(`${API_URL}/tasks`, {
        method: 'POST' ,
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(task)
    })

    const taskResult = await fetchResult.json()

    return taskResult
}

const updateTask = async (task) => {
    await fetch(`${API_URL}/tasks/${task.id}`, {
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