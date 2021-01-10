const {PORT} = require('./config/config');

const slackEvents = require('./bots/events').slackEvents;

slackEvents.start(PORT).then(() => {
    console.log("Conectado en puerto 3000");
});

slackEvents.on('error', console.error);