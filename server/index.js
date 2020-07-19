const express = require('express');
const app = express();

app.use(express.json({extended: false}));

//define routes
app.use('/dogs', require('./routes/dogs'));

const PORT = process.env.PORT || 4001;

app.listen(PORT, () => console.log(`server is up port ${PORT}`));