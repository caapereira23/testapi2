const app = require('express')();
const PORT = 8080;

app.get('/agenda', (req, res) => {
    res.status(200).send({
        username: 'teste',
        nota: 'consulta'
    })
});

// import routes
const MxRoutes = require('./src/routes/mx.route');

// create routes
app.use('/mx', MxRoutes);

app.listen(
    PORT,
    () => console.log(`"It's alive on http://localhost:${PORT}"`)
)


