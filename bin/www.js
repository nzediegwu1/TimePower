var app = require('../app');
app.set('port', process.env.PORT || 3000);
const models = require("../models");

models.sequelize.sync().then(function () {
    const server = app.listen(app.get('port'), function () {
        console.log('Express server listening on port ' + server.address().port)
    });
});
