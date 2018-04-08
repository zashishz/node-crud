const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {handleErrors} = require('./middlewares/errorHandlers');
// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false }));

// Routes
app.use('/', require('./routes'));

app.get('/', (req, res) => res.send('This is Index page'));

app.use(handleErrors);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is listening @ ${PORT}`))