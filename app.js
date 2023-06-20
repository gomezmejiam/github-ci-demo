const app = require('./holamundo');

const port = process.env.PORT || 3000;

app.listen(port,
    () => console.log(`El servicio está corriendo en http://localhost:${port}`)
);
