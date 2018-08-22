const express = require('express')
const app = express()

// spicedPg(process.env.DATABASE_URL || 'postgres:postgres:password/localhost:5432/petition')


app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(
    process.env.PORT || 8080,
    () => console.log('Listening')
)
