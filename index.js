const express = require('express');
const app = express();
const routes = require('./server/routes/motorcycles');
app.use(express.json());
app.use('/api/v1', routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

