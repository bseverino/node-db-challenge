const express = require('express')

const Projects = require('./project-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.find()
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to retrieve projects.' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Projects.findById(id)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to retrieve project.' })
        })
})

router.post('/', (req, res) => {
    const body = req.body

    Projects.add(body)
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add project.' })
        })
})

router.get('/:id/tasks', (req, res) => {
    const { id } = req.params

    Projects.findTasks(id)
        .then(tasks => {
            res.status(200).json(tasks)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to retrieve tasks.' })
        })
})

router.post('/:id', (req, res) => {
    const { id } = req.params
    const body = {
        ...req.body,
        project_id: id
    }

    Projects.addTask(body)
        .then(projects => {
            res.status(201).json(projects)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add task.' })
        })
})

module.exports = router