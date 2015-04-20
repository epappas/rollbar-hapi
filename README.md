# rollbar-hapi
A Hapi plugin for rollbar painless integration

# installation

    npm install rollbar-hapi --save

# Use of

    server.register({
            register: require('./rollbar/index'),
            options: {
                accessToken: '',
                environment: '', // optional, defaults to process.env.NODE_ENV
                exitOnUncaughtException: true // optional, defaults to true
            }
        }, function (err) {
            if (err) throw err;
        });

# Exposes

    server.plugins['rollbar-hapi'].rollbar // the rollbar module, already initialised

    server.methods.handleError(err, req, next); // == rollbar.handleError
    server.methods.handleErrorWithPayloadData(err, opts, req, next); // == rollbar.handleErrorWithPayloadData
    server.methods.reportMessage(msg, level, req, next); // == rollbar.reportMessage
    server.methods.reportMessageWithPayloadData(msg, opts, req, next); // == rollbar.reportMessageWithPayloadData
