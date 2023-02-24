const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const app = express();
const port = 5000;
const quizRoute = require('./router/quiz'); //server js memanggil router quiz router
const jobsheetRoute = require('./router/jobsheet'); 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
    res.send('Hello Word!');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet', jobsheetRoute)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`)) //express menjalankan router di dalam port 5000