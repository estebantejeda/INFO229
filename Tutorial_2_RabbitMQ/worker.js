const amqp = require('amqplib/callback_api');

var queue = 'task_queue';

amqp.connect('amqp://localhost', (err, connection) => {
    if(err) throw err;
    connection.createChannel((err, channel) => {
        if(err) throw err;

        channel.assertQueue(queue, {
            durable: true
        });
          
        channel.consume(queue, (msg) => {
            var secs = msg.content.toString().split('.').length - 1;
            console.log(" [x] Received %s", msg.content.toString());
            setTimeout(() => {
              console.log(" [x] Done");
            }, secs * 1000);
        },{noAck: true});
    });
});