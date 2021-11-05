const express = require('express');

function createRouter(db) {
  const router = express.Router();
  const owner = ' ';
  router.post('/event', (req, res, next) => {
    db.query('INSERT INTO events (owner, name, description, date) VALUES (?,?,?,?)',
      [owner, req.body.name, req.body.description, new Date(req.body.date)],
      (error) => {
        if (error) {
          console.error(error);
          res.status(500).json({status: 'error'});
        } else {
          res.status(200).json({status: 'ok'});
        }
      }
    );
  });
  return router;
}
module.exports = createRouter;
