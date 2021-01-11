const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, connection) => {
    if(err) throw err;
    connection.createChannel((err, channel) => {
        if(err) throw err;
        let queue = "technical";
        channel.assertQueue(queue, {durable: false});
        console.log("[*] Waiting for messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, (message) => {
            console.log("[x] receiver %s", message.content.toString());
        }, {noAck: true});
    });
});