const express = require('express');
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home', { title: '50 Cent - Home' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: '50 Cent - About' });
});

app.get('/works', (req, res) => {
    res.render('works', { title: '50 Cent - Works' });
});

app.get('/gallery', (req, res) => {
    res.render('gallery', { title: '50 Cent - Gallery' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
