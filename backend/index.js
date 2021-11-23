const app = require('express')();
require('dotenv').config()

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`)
})

app.get('/test', (req, res) => {
    res.send("ok")
})