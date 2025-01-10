const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM applications');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des applications.' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM applications WHERE id = ?', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Application not found' });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching application details', details: error.message });
  }
});

router.post('/', async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO applications (name, description) VALUES (?, ?)',
      [name, description]
    );
    res.status(201).json({ id: result.insertId, name, description });
  } catch (err) {
    res.status(500).json({ error: 'Failed to add application', details: err.message });
  }
});

module.exports = router;
