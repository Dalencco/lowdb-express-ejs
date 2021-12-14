const app = require('./src/server')
const { createConnection } = require('./src/database')

createConnection();
app.set('port', process.env.PORT || 3000);

app.listen(app.set('port'), () => {
    console.log('Server listo en el puerto', app.get('port'));
});
