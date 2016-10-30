const Http = require('http');
const App = require('./index');

/*
 * Create and start HTTP server.
 */
let Server = Http.createServer(App);

App.on('start', () => {
    /* eslint-disable no-console */
    console.log('Application ready to serve requests.');
    console.log('Environment: %s', App.kraken.get('env:env'));
    Server.listen(process.env.PORT || 8000, function () {
        //App.swagger.api.host = this.address().address + ':' + this.address().port;
        console.log('App running on %s:%d', this.address().address, this.address().port);
    });
    /* eslint-disable no-console */
});
