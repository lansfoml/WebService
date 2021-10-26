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
      f_name: row.f_name,
      l_name: row.l_name,
      age: row.age,
      team: row.team,
      
    };
  }

  service.get('/all', (request, response) => {
  
    const query = 'SELECT * FROM players';
    connection.query(query, (error, rows) => {
      if (error) {
        response.status(500);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        const players = rows.map(rowToPlayer);
        response.json({
          ok: true,
          results: rows.map(rowToPlayer),
        });
      }
    });
  });

  service.get('players/:f_name', (request, response) => {
    const parameters = [
      request.params.f_name,
      
    ];
  
    const query = 'SELECT * FROM players WHERE f_name = ?';
    connection.query(query, parameters, (error, rows) => {
      if (error) {
        response.status(500);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        const players = rows.map(rowToPlayer);
        response.json({
          ok: true,
          results: rows.map(rowToPlayer),
        });
      }
    });
  });

  service.use(express.json());

  service.post('/players', (request, response) => {
    const parameters = [
      request.body.number,
      request.body.f_name,
      request.body.l_name,
      request.body.age,
      request.body.team,
      
    ];
  
    const query = 'INSERT INTO players(number, f_name, l_name, age, team) VALUES (?, ?, ?, ?, ?)';
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