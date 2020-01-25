const express = require('express')

const Resources = require('./resource-model.js')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.find()
        .then(resources => {
            res.status(200).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to retrieve resources.' })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Resources.findById(id)
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to retrieve resource.' })
        })
})

router.post('/', (req, res) => {
    const body = req.body

    Resources.add(body)
        .then(resources => {
            res.status(201).json(resources)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Failed to add resource.' })
        })
})

module.exports = router