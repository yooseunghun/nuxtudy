import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.send("API test " + Math.random())
})

app.use('/hello', require('./hello'))

module.exports = {
    path: '/api',
    handler: app
}
