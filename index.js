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
      firstName: row.firstName,
      lastName: row.lastName,
      age: row.age,
      team: row.team,
      
    };
  }

  service.use((request, response, next) => {
    response.set('Access-Control-Allow-Origin', '*');
    next();
  });

  service.options('*', (request, response) => {
    response.set('Access-Control-Allow-Headers', 'Content-Type');
    response.set('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    response.sendStatus(200);
  });

  app.get('/report.html', function (req, res, next) {
    var options = {
      root: path.join(__dirname, 'public'),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }
  
    
    res.sendFile('/Users/matt/Desktop/Server/report.html', options, function (err) {
      if (err) {
        next(err)
      } else {
        console.log('Sent:', fileName)
      }
    })
  })

  service.get('/id/:id', (request, response) => {
    
    const parameters = request.params.id,

    query = 'SELECT * FROM players WHERE id = ?';
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


  service.get('/fname/:firstName', (request, response) => {
    
    const parameters = request.params.firstName,

    query = 'SELECT * FROM players WHERE firstName = ?';
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

  service.get('/lname/:lastName', (request, response) => {
    
    const parameters = request.params.lastName,

    query = 'SELECT * FROM players WHERE lastName = ?';
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

  service.get('/name/:firstName/:lastName', (request, response) => {
    
    const parameters = [
      request.params.firstName,
      request.params.lastName,
    ]

    query = 'SELECT * FROM players WHERE firstName = ? AND lastName = ?';
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

  service.get('/age/:age', (request, response) => {
    
    const parameters = request.params.age,

    query = 'SELECT * FROM players WHERE age = ?';
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

  service.get('/team/:team', (request, response) => {
    
    const parameters = request.params.team,

    query = 'SELECT * FROM players WHERE team = ?';
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

  service.get('/all', (request, response) => {
  
    const query = 'SELECT * FROM players WHERE is_deleted = 0';
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
  


  service.use(express.json());

  service.post('/players', (request, response) => {
    const parameters = [
      
      request.body.number,
      request.body.firstName,
      request.body.lastName,
      request.body.age,
      request.body.team,
      
    ];
  
    const query = 'INSERT INTO players(number, firstName, lastName, age, team) VALUES (?, ?, ?, ?, ?)';
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


  service.patch('/players/:id', (request, response) => {
    const parameters = [
      request.body.number,
      request.body.firstName,
      request.body.lastName,
      request.body.age,
      request.body.team,
      parseInt(request.params.id),
    ];
  
    const query = 'UPDATE players SET number = ?, firstName = ?, lastName = ?, age = ?, team = ? WHERE id = ?';
    connection.query(query, parameters, (error, result) => {
      if (error) {
        response.status(404);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        response.json({
          ok: true,
        });
      }
    });
  });

  service.delete('/players/:id', (request, response) => {
    const parameters = [parseInt(request.params.id)];
  
    const query = 'UPDATE players SET is_deleted = 1 WHERE id = ?';
    connection.query(query, parameters, (error, result) => {
      if (error) {
        response.status(404);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        response.json({
          ok: true,
        });
      }
    });
  });

  service.delete('/names/:firstName/:lastName', (request, response) => {
    const parameters = [
      request.params.firstName,
      request.params.lastName,
    ];
  
    const query = 'UPDATE players SET is_deleted = 1 WHERE firstName = ? AND lastName = ?';
    connection.query(query, parameters, (error, result) => {
      if (error) {
        response.status(404);
        response.json({
          ok: false,
          results: error.message,
        });
      } else {
        response.json({
          ok: true,
        });
      }
    });
  });
  