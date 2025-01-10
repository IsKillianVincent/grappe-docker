const express = require('express');
const db = require('../db');
const router = express.Router();

router.get('/:applicationId', async (req, res, next) => {
  const { applicationId } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM versions WHERE application_id = ?', [applicationId]);
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  const { application_id, version_number, environment, deployment_date, status } = req.body;

  if (!application_id || !version_number || !environment || !deployment_date || !status) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO versions (application_id, version_number, environment, deployment_date, status) VALUES (?, ?, ?, ?, ?)',
      [application_id, version_number, environment, deployment_date, status]
    );
    res.status(201).json({
      id: result.insertId,
      application_id,
      version_number,
      environment,
      deployment_date,
      status,
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
