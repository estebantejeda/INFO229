const {PORT} = require('./config/config');

const slackEvents = require('./bots/task').slackEvents;

slackEvents.start(PORT).then(() => {
    console.log("Conectado en puerto 3000");
});

slackEvents.on('error', console.error);