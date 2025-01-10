const express = require('express');
const cors = require('cors');
const app = express();

const applicationsRoutes = require('./routes/applications');
const versionsRoutes = require('./routes/versions');

app.use(cors());

app.use(express.json());

app.use('/applications', applicationsRoutes);
app.use('/versions', versionsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the backend API!');
});

app.use((req, res) => {
  res.status(404).send({ error: 'Route not found' });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));