const express = require('express');

const app = express();
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => res.render('index.html'));
app.get('/', (req, res) => res.render('about.html'));
app.listen(process.env.port || 3000);
