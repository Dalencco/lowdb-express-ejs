const app = require('./server')
const { createConnection } = require('./database')

createConnection();
app.set('port', process.env.PORT || 3000);

app.listen(app.set('port'), () => {
    console.log('Server listo en el puerto', app.get('port'));
});