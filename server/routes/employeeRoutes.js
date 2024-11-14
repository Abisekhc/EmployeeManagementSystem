const express = require('express');
const db = require('../dbconfig');
const router = express.Router();

router.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

router.post('/employees', (req, res) => {
  const { name, age, position, department } = req.body;
  db.query('INSERT INTO employees SET ?', { name, age, position, department }, err => {
    if (err) throw err;
    res.status(201).json({ message: 'Employee added' });
  });
});

router.get('/employees/:id', (req, res) => {
  db.query('SELECT * FROM employees WHERE id = ?', [req.params.id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});

router.put('/employees/:id', (req, res) => {
  const { name, age, position, department } = req.body;
  db.query('UPDATE employees SET ? WHERE id = ?', [{ name, age, position, department }, req.params.id], err => {
    if (err) throw err;
    res.json({ message: 'Employee updated' });
  });
});

router.delete('/employees/:id', (req, res) => {
  db.query('DELETE FROM employees WHERE id = ?', [req.params.id], err => {
    if (err) throw err;
    res.json({ message: 'Employee deleted' });
  });
});

module.exports = router;
