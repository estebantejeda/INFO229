const amqp = require('amqplib/callback_api');

let queue = 'task_queue';
let msg = process.argv.slice(2).join(' ') || "....Hello World!";

amqp.connect('amqp://localhost', (err, connection) => {
    if(err) throw err;
    connection.createChannel((err, channel) => {
        if(err) throw err;

        channel.assertQueue(queue, {
            durable: true
        });

        channel.sendToQueue(queue, Buffer.from(msg), {
            persistent: true
        });

        setTimeout(() => {
            connection.close();
        }, 1000);

        console.log("[x] Sent '%s'", msg);
    });
});