const express = require('express');
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.send('Bonjour, ici le Backend!');
});

app.listen(port, () => {
    console.log(`Backend fonctionne sur http://localhost:${port}`);
});
