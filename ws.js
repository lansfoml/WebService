const express = require('express');
const fs = require('fs');
const mysql = require('mysql');

const credentials = JSON.parse(fs.readFileSync('credentials.json', 'utf8'));
const connection = mysql.createConnection(credentials);

const service = express();

connection.connect(error => {
  if (error) {
    console.error(error);
    process.exit(1);
  }
});

// define endpoints...

const port = 5001;
service.listen(port, () => {
  console.log(`We're live in port ${port}!`);
});

function rowToPlayer(row) {
    return {
      id: row.id,
      number: row.number,
      name: row.name,
      age : row.age
    };
  }

  service.get('/players/:id', (request, response) => {
    const parameters = [
      parseInt(request.params.id)
      
    ];
  
    const query = 'SELECT * FROM players WHERE id = ?';
    connection.query(query, parameters, (error, rows) => {
      if (error) {
        response.status(500);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        const players = rows.map(rowToHuman);
        response.json({
          ok: true,
          results: rows.map(rowToHuman),
        });
      }
    });
  });

  service.use(express.json());

  service.post('/players', (request, response) => {
    const parameters = [
      request.body.number,
      request.body.name,
      request.body.age
    ];
  
    const query = 'INSERT INTO players(number, name, age) VALUES (?, ?, ?)';
    connection.query(query, parameters, (error, result) => {
      if (error) {
        response.status(500);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        response.json({
          ok: true,
          results: result.insertId,
        });
      }
    });
  });