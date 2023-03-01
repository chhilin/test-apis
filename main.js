const express = require('express');
const app = express();
const PORT = 5000;
app.listen(process.env.PORT || PORT, () => { console.log('listening on port ' + PORT); });

app.get('/', (req, res) => {
    res.send({message: 'Welcome to API'});
});

app.get('/api', (req, res) => {
    res.send({name: 'API', message: 'baby', age: 18});
});