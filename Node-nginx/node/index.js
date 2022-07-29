const express = require('express')
const app = express()
const random_name = require('node-random-name');
const mysql = require('mysql')

const port = 3000
const DBConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fullcycle-challange'
}
const DBConnection = mysql.createConnection(DBConfig)

const createTableCommand = 'CREATE TABLE IF NOT EXISTS people (id MEDIUMINT NOT NULL AUTO_INCREMENT, name VARCHAR(200) NOT NULL, PRIMARY KEY (id))'
const insertPeopleCommand = `INSERT INTO people (name) VALUES ('${random_name()}')`
const getPeopleQuery = 'SELECT * FROM PEOPLE'

DBConnection.query(createTableCommand)
DBConnection.query(insertPeopleCommand)
let people = ""

DBConnection.query(getPeopleQuery, function(err, rows, fields) {
    rows.map(r => people += `${r.name.toString()} | `)
})
DBConnection.end()

app.get('/', (req, res) => {
    res.send(`<h1>Full cycle rocks</h1>\n ${people}`)
})

app.listen(port, () => {
    console.log('Listening on port ', port)
})