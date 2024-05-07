const bodyParser = require('body-parser')
const express = require('express') //pobieranie paczek, require-wykorzystujemy paczki
const app = express()

app.use(bodyParser.json())
const port = 3000
app.listen(port, () => {
	console.log(`serwer działa pod adresem http://localhost:${port}`)
})
app.get('/', (req, res) => {
	res.send('hejbb')
})
