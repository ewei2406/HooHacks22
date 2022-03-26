const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("Hello from backend")
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`)
})