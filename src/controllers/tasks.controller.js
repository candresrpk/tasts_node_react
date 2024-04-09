export const getTasks = (req, res) => {
    res.send('getting all the tasks')
}

export const getTask = (req, res) => {

    const {id} = req.params

    res.send('getting a task ' + id)
}

export const createTask = (req, res) => {
    res.send('making a task')
}

export const updateTask = (req, res) => {
    res.send('updating a task')
}

export const deleteTask = (req, res) => {
    res.send('deleting a task')
}