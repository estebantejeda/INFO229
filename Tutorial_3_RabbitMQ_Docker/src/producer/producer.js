const amqp = require('amqplib/callback_api');

amqp.connect('amqp://localhost', (err, connection) => {
    if(err) throw err;
    connection.createChannel((err, channel) => {
        if(err) throw err;
        let queueName = "technical";
        let message = "{1} [Wikipedia] Batman";
        channel.assertQueue(queueName, {durable: false});
        channel.sendToQueue(queueName, Buffer.from(message));
        console.log("[x] Enviado %s", message);
        let priority = getPriority(message);
        setTimeout(() => connection.close(), 500*priority);
    });
});

function getPriority(message){
    let priority = message;
    let inicio = priority.indexOf('{')+1;
    let fin = priority.indexOf('}');
    return priority.substring(inicio, fin);
}