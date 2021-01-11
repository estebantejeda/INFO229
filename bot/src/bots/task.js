const {STSECRET} = require('../config/config');

const {createEventAdapter} = require('@slack/events-api');
const amqp = require('amqplib/callback_api');

const slackEvents = createEventAdapter(STSECRET);
let queue = 'task_queue';

slackEvents.on('app_mention', event => {
    console.log(event);
    amqp.connect('amqp://localhost', (err, connection) => {
        if(err) throw err;
        connection.createChannel((err, channel) => {
            if(err) throw err;
            channel.assertQueue(queue, {
                durable: true
            });
            channel.sendToQueue(queue, Buffer.from(event.text), {
                persistent: true
            });
            setTimeout(() => {
                connection.close();
            }, 1000);
            console.log("[x] Sent '%s'", event.text);
        });
    });
});

module.exports = {
    slackEvents
}
