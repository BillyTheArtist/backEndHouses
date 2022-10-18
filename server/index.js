let express = require('express')
let cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

let {getHouse, deleteHouse, createHouse, updateHouse} = require('./controller.js')

app.get('/api/houses', getHouse)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(4004, () => {
    console.log('Up on 4004!')
})