const router = require('express').Router()

router.get('/', (req, res, next) => {
    res.send('Hello Router '+ Math.random())
})

module.exports = router